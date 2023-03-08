import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../atoms";
const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  padding: 10px 10px;
  background-color: ${(props) =>
    props.isDragging ? "#74b9ff" : props.theme.cardColor};
  margin-bottom: 10px;
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 10px rgba(0,0,0,0.5)" : "none"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    border: none;
    background-color: inherit;
    cursor: pointer;
  }
`;
interface IDraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}
function DraggableCard({ toDoId, toDoText, index }: IDraggableCardProps) {
  const onClick = (event: any) => {
    console.log(event);
  };

  return (
    <Draggable key={index} draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDoText}
          <button onClick={onClick}>❌</button>
        </Card>
      )}
    </Draggable>
  );
}
export default React.memo(DraggableCard);
