### atom이나 selector로 useRecoilState를 사용할 때 array의 첫 번째 argument는 atom의 값이거나 selector의 get함수의 값이다.

### atom이나 selector로 useRecoilState를 사용할 때 array의 두 번째 argument는 atom을 수정하는 함수이거나 selector의 set property를 실행시키는 함수이다.

# react-beautiful-dnd

- drag and drop ani

npm i react-beautiful-dnd
npm i --save-dev @types/react-beautiful-dnd

## DrapDropContext

- wraps the part of your application you want to have drag and drop enabled for
- 드래그 앤 드롭 기능을 사용하고 싶다면 DrapDropContext안에 넣어야 한다.

## Droppable

- 무언가를 드래그 앤 드롭할 수 있는 영역이다.

### argument

- Droppable에서 제공하는 첫 번째 argument는 provided(or magic)이다.
  - provided 매개변수에는 innerRef, placeholder, droppableProps를 갖고 있다.
    - <ul>태그는 provided 매개변수의 droppableProps를 필요로 한다.
    - `<ul {...magic.droppableProps}></ul>`
    - placeholder 매개변수는 droppable이 끝날 때 사용한다.
      - placeholder 매개변수를 사용하면 리스트 드래그 시 리스트의 사이즈가 변하는걸 방지할 수 있다.
- Droppable에서 제공하는 두 번째 argument는 snapshot이다.
  - snapshot 매개변수는 isDraggingOver, draggingOverWiht, draggingFromThisWith, isUsingPlaceholder가 있다.
    - isDraggingOver: boolean
      - 현재 선택한 Droppable이 특정 Droppable뒤에 드래깅 되고 있는지 여부 확인
    - draggingOverWith: ?DroppableId
      - Droppable 위로 드래그
    - draggingFromThisWith: ?DroppableId
      - 현재 Droppable에서 벗어난 드래깅되고 있는 Droppable ID
    - isUsingPlaceholder: boolean
      - placeholder가 사용되고 있는지 여부

## Draggable

- droppable 영역 안에서 드래그 하는 영역이다.

### argument

- Draggable에서 제공하는 첫 번째 argument는 provided(or magic)이다.
  - provided 매개변수에는 innerRef, draggableProps, dragHandleProps가 있다.
    - 요소가 기본적으로 드래그 되기를 원한다면 draggableProps를 사용한다.
      - 즉, 요소 전체를 드래그한다.
    - 특정 조건에서 드래그가 되기를 원한다면 dragHandleProps를 사용한다.

# atom

## useRecoilValue

- atom의 값을 가져온다.

## useRecoilState

- atom의 값과 atom을 수정하는 함수를 호출한다.
- const [atom값, atom을 수정할 함수] = useRecoilState(toDoState)

# reRendering

- react.js에선 부모의 component의 state를 변경하면 자식의 state도 모두 재렌더링(reRendering) 된다.
  - application이 느려진다.
    - react memo를 사용하여 위 현상을 방지한다.

# react memo

- react.js한테 이 component는 렌더링 하지 말라고 알리는 역할을 한다.
  - 즉, react memo는 react.js에게 prop이 바뀌지 않는다면 컴포넌트를 렌더링 하지 말라고 한다.
  ```js
  export default React.memo(DraggableCard);
  // DraggableCard의 prop이 변하지 않았다면 DraggableCard를 다시 렌더링하지 않는다.
  ```

# 배열의 loop

- Array.map

# 객체의 loop

Object.keys()

- Object가 가진 eky만 array로 뽑아준다.
  - 즉, 각각의 property를 돌려준다.

Object.values()

- Object가 가진 value들만 array로 뽑아준다.

```js
const toDos = {
  x: ["a", "b"],
  z: ["n", "t"],
};
Object.ekys(toDos); // ["x","z"]
Object.values(toDos); // [["a","b"], ["n", "t"]];
Object.keys(toDos).map((boardId) => toDos[boardId]);
// [["a","b"], ["n", "t"]];
```

# flex-grow

- flex-item 요소가, flex-container 요소 내부에서 할당 가능한 공간의 정도를 선언한다.

#
