"use client"

import InputField from "@/components/Organizer/InputField";
import Logout from "@/components/Organizer/Logout";
import { AppDispatch, useAppSelector } from "@/store/store";
import { login } from "@/store/userSlice";
import { User } from "@/types/UserType";
import { useState } from "react";
import { useDispatch } from "react-redux";

type UserType = {
  name: string,
  image: string,
  username: string,
}

type LoginType = "Student" | "University" | "Admin"

export default function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [loginType, setLoginType] = useState<LoginType>("Student")

  const dispatch = useDispatch<AppDispatch>()

  // const [user, setUser] = useState<null | any>(null)
  const user = useAppSelector(state => state.user);



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
      body: JSON.stringify({ username, password, loginType })
    })
    const theUser = await response.json()
    if(response.status === 200)
    {
      console.log(theUser)
      dispatch(login(theUser))
    }
  }

  return (
    <div className="flex flex-col text-ed-text items-center justify-center min-h-[600px]">
    <div className="flex-col bg-ed-white p-8 w-11/12 rounded-xl">
    <h1 className="block text-2xl mb-8 font-bold">{loginType} Login</h1>
    {
      user.name &&
      <div>
      <h3>Welcome, {user.name}</h3>
      <img src={user.image} alt="haha" />
      <Logout />
            </div>
          }
          <form className="" onSubmit={handleSubmit}>
            <InputField id="login_username" value={username} setValue={setUsername} >Username</InputField>
            <InputField id="login_password" value={password} setValue={setPassword} isPassword>Password</InputField>
            <button type="submit" className="text-ed-text bg-white hover:bg-ed-sec hover:text-white border-solid border-2 border-ed-sec font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Login</button>
            </form>
            
            </div>
            <div className="w-11/12">
            
            {loginType !== "University" && <div className="py-2 pt-4">
              <button onClick={e => setLoginType("University")}>Login as University</button >
              </div>}
          {loginType !== "Admin" && <div className="py-2">
            <button onClick={e => setLoginType("Admin")}>Login as Admin</button >
            </div>}
            {loginType !== "Student" && <div className="py-2">
            <button onClick={e => setLoginType("Student")}>Login as Student</button >
            </div>}
          </div>
          </div>) 

          
}
