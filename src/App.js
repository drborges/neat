import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import View from "./View";
import Editor from "./Editor";
import Toolbar from "./Toolbar";
import Workspace from "./Workspace";

import FancyDiv from "./FancyDiv";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";

import makeDraggable from "./Draggable/makeDraggable";
import makeDroppable from "./Droppable/makeDroppable";

import "./styles.css";

const makeDestroyable = Component => ({ onDestroy, ...props }, key) => (
  <View onDestroy={onDestroy} key={key}>
    <Component {...props} />
  </View>
);

const DroppableWorkspace = makeDroppable(Workspace);
const DraggableTodoItem = makeDraggable(makeDestroyable(TodoItem));
const DroppableTodoList = makeDraggable(
  makeDroppable(makeDestroyable(TodoList))
);
const DraggableFancyDiv = makeDraggable(
  makeDroppable(makeDestroyable(FancyDiv))
);

export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Editor>
        <Toolbar>
          <DraggableTodoItem text="Clean the house" />
          <DraggableTodoItem text="Do the dishes" />
          <DraggableTodoItem text="Walk the dog" />

          <DraggableFancyDiv />
          <DroppableTodoList />
        </Toolbar>

        <DroppableWorkspace />
      </Editor>
    </DndProvider>
  );
}
