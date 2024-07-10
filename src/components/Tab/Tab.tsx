import { Link } from "react-router-dom";
import { DataItem } from "../../App";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";

type TabProps = {
    heading: string;
    data: DataItem[];
    handleOnDragEnd: (result: DropResult) => void;
};

export function Tab({ data, heading, handleOnDragEnd }: TabProps) {
    return (
        <div>
            <span>{heading}</span>

            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId={"pinned1"} type='group'>
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {data.map((item, index) => {
                                return (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided) => (
                                            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}><Link to={"/"} key={item.id}>
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

        </div>
    );
}
