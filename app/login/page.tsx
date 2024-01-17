"use client"

import InputField from "@/components/InputField";
import Logout from "@/components/Logout";
import { useState } from "react";

type UserType = {
  name: string,
  image: string,
  username: string,
}

export default function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [user, setUser] = useState<null | any>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const url = "http://localhost:5050/login";
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    const theUser = await response.json()
    if(response.status === 200)
      setUser(theUser)
  }

  return (
    <div className="flex items-center justify-center h-screen">
        <div className="flex-col border-2 border-gray-600 p-8 w-1/4 rounded-xl">
          <h1 className="block text-2xl mb-8">Login</h1>
          {
            user &&
            <div>
            <h3>Welcome, {user.name}</h3>
            <img src={`http://localhost:5050/uploads/${user.image}`} alt="haha" />
            <Logout user={user} setUser={setUser}/>
            </div>
          }
           <form className="" onSubmit={handleSubmit}>
            <InputField value={username} setValue={setUsername} >Name</InputField>
            <InputField value={password} setValue={setPassword} isPassword>Password</InputField>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
          </form>
          </div>
        </div>

  );
}
