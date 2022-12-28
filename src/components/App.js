import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { data } from './data/todo';
import Counter from "./Counter";
import User from "./User";
import UsersList from "./UsersList";
import { users } from "./data/users";

function App() {

  const todos = data;
  
  return (
    <div>
      <ToDoForm />
      <ToDoList todos={todos} />
      {/* <Counter /> */}
      {/* <User first_name={'Marta'} last_name={'Kliuchnik'} /> */}
      {/* <UsersList id={1} email={'george.bluth@reqres.in'} first_name={'Marta'} last_name={'Kliuchnik'} avatar={'https://reqres.in/img/faces/1-image.jpg'} /> */}
      {
        users.map(user =>
          <UsersList key={user.id} {...user} />
        )}
    </div>
  );
}

export default App;

// users={users} 