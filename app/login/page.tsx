"use client"

import InputField from "@/components/InputField";
import Logout from "@/components/Logout";
import { AppDispatch } from "@/store/store";
import { login } from "@/store/userSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

type UserType = {
  name: string,
  image: string,
  username: string,
}

export default function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch<AppDispatch>()

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
    {
      console.log(theUser)
      dispatch(login(theUser))
      setUser(theUser)
    }
  }

  return (
    <div className="flex text-ed-text items-center justify-center min-h-[600px]">
        <div className="flex-col bg-ed-white p-8 w-11/12 rounded-xl">
          <h1 className="block text-2xl mb-8 font-bold">Login</h1>
          {
            user &&
            <div>
            <h3>Welcome, {user.name}</h3>
            <img src={user.image} alt="haha" />
            <Logout user={user} setUser={setUser}/>
            </div>
          }
           <form className="" onSubmit={handleSubmit}>
            <InputField id="login_username" value={username} setValue={setUsername} >Name</InputField>
            <InputField id="login_password" value={password} setValue={setPassword} isPassword>Password</InputField>
            <button type="submit" className="text-ed-text bg-white hover:bg-ed-sec hover:text-white border-solid border-2 border-ed-sec font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Login</button>
          </form>
          </div>
        </div>

  );
}
