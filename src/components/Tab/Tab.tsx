import { Link } from "react-router-dom";
import { DataItem } from "../../App";
import css from './Tab.module.css'
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";

type TabProps = {
    heading: string;
    data: DataItem[];
    handleOnDragEnd: (result: DropResult) => void;
    droppableId: string
};

export function Tab({ data, heading, handleOnDragEnd, droppableId }: TabProps) {
    return (
        <div className={css.layout}>
            <span>{heading}</span>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId={droppableId} type='group' direction="horizontal">
                    {(provided) => (
                        <div className={css.wrapper} {...provided.droppableProps} ref={provided.innerRef}>
                            {data.map((item, index) => {
                                return (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided) => (
                                            <div className={css.item} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                <Link to={item.route} key={item.id}>
                                                    <span>{item.title}</span>
                                                </Link></div>
                                        )}

                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                        </div>
                    )}

                </Droppable>
            </DragDropContext>
        </div >
    );
}
