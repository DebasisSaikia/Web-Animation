import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const json = await res.json();
      setUsers(json);
      console.log(json);
    };
    fetchUsers();
  }, []);

  const allUsers = users.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });

//   search functionality
let filterUsers=users.filter(({name})=>{
    return name.indexOf(term)>=0;
}).map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });

  return (
    <div>
      <h1>UserList</h1>
      <input
        type="text"
        value={term}
        placeholder="Search Users"
        onChange={(e) => setTerm(e.target.value)}
      />
      {filterUsers}
    </div>
  );
};

export default UserList;
