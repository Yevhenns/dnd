import css from './App.module.scss';
import { useEffect, useState } from 'react';
import { data } from './data';
import { DropResult } from 'react-beautiful-dnd';
import { Tab } from './components/Tab/Tab';

export type DataItem = {
  id: string;
  title: string;
  pinned: boolean;
  route: string;
};

function App() {
  const [pinnedItems, setPinnedItems] = useState<DataItem[]>([]);
  const [unpinnedItems, setUnpinnedItems] = useState<DataItem[]>([]);

  useEffect(() => {
    const array = data.filter(item => item.pinned === true);
    setPinnedItems(array);
  }, []);

  useEffect(() => {
    const array = data.filter(item => item.pinned === false);
    setUnpinnedItems(array);
  }, []);

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) return;

    const items = Array.from(pinnedItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPinnedItems(items);
  }

  function handleOnDragEnd1(result: DropResult) {
    if (!result.destination) return;

    const items = Array.from(unpinnedItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setUnpinnedItems(items);
  }

  return (
    <div className={css.layout}>
      <Tab
        droppableId="pinned"
        data={pinnedItems}
        handleOnDragEnd={handleOnDragEnd}
        pinned
      />
      <Tab
        droppableId="unpinned"
        data={unpinnedItems}
        handleOnDragEnd={handleOnDragEnd1}
      />
    </div>
  );
}

export default App;
