import { Link } from 'react-router-dom';
import { DataItem } from '../../App';
import css from './Tab.module.scss';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

type TabProps = {
  data: DataItem[];
  handleOnDragEnd: (result: DropResult) => void;
  droppableId: string;
  pinned?: boolean;
};

export function Tab({
  data,
  handleOnDragEnd,
  droppableId,
  pinned = false,
}: TabProps) {
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId={droppableId} type="group" direction="horizontal">
        {provided => (
          <div
            className={[css.wrapper, pinned ? css.pinned : css.unpinned].join(
              ' '
            )}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {data.map((item, index) => {
              return (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {provided => (
                    <div
                      className={css.item}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <Link to={item.route} key={item.id}>
                        <span>{item.title}</span>
                      </Link>
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
