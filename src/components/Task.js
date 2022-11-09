import React from "react";
import AddTask from "./AddTask";
import TasksContainer from "./TasksContainer";
import Nav from "./Nav";
import socketIO from "socket.io-client";

/*
👇🏻  Pass Socket.io into the required components
    where communications are made with the server
*/
const socket = socketIO.connect(
  "https://kanban-board-server-side.up.railway.app"
);

console.log(socket);

const Task = () => {
  return (
    <div>
      <Nav />
      <AddTask socket={socket} />
      <TasksContainer socket={socket} />
    </div>
  );
};

export default Task;
