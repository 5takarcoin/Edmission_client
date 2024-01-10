"use client";

import User from "@/components/User";
import { use, useEffect, useState } from "react";

type UserType = {
  name: string;
  _id: string;
  username: string;
  password: string;
};

export default function Users() {
  const [users, setUsers] = useState([] as UserType[]);

  const printUsers = () => {
    console.log(users);
  };

  const getUsers = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const url = "http://localhost:5050/api/users";
    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      const theUsers = await response.json();
      setUsers(theUsers);
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Click me</button>
      <button onClick={printUsers}>Cli</button>

      {users.map((user, i) => (
        <User key={user.username} user={user} />
      ))}
    </div>
  );
}
