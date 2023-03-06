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
