import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      const json = await res.json();
      setTodos(json);
      console.log(json);
    };
    fetchUsers();
  }, []);

  //   const allUsers = users.map((user) => {
  //     return (
  //       <div key={user.id}>
  //         <p>
  //           <strong>{user.name}</strong>
  //         </p>
  //       </div>
  //     );
  //   });

  //   search functionality
  let filterTodos = todos
    .filter(({ title }) => {
      return title.indexOf(term) >= 0;
    })
    .slice(0, 10)
    .map((todo) => {
      return (
        <div key={todo.id}>
          <p>
            <strong>{todo.title}</strong>
          </p>
        </div>
      );
    });

  return (
    <div>
      <h1>TodoList</h1>
      <input
        type="text"
        value={term}
        placeholder="Search Todos"
        onChange={(e) => setTerm(e.target.value)}
      />
      {filterTodos}
    </div>
  );
};

export default TodoList;
