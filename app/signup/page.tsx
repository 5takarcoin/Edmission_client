"use client"

import InputField from "@/components/InputField"
import { collectGenerateParams } from "next/dist/build/utils"
import { useRouter } from "next/navigation"
import { useState } from "react"

type UserType = {
  name: string,
}

export default function Signup() {
  const router = useRouter()

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [image, setImage] = useState<null | File>(null)

  const [user, setUser] = useState<null | UserType>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData();
    console.log(formData)
    formData.append('name', name);
    formData.append('username', username);
    formData.append('password', password);
    if(image)
      formData.append('image', image);
    console.log(formData)


    console.log(username, name,password)
    const url = "http://localhost:5050/signup";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formData
    })
    if(response.status === 201)
     {
       router.push('/login')
       console.log(response)
     }
  }


  return (
    <div className="flex items-center justify-center h-screen">
        <div className="flex-col border-2 border-gray-600 p-8 w-1/4 rounded-xl">
          <h1 className="block text-2xl mb-8">Signup</h1>
          <form className="" onSubmit={handleSubmit}>
            <InputField value={name} setValue={setName} >Name</InputField>
            <InputField value={username} setValue={setUsername} >Username</InputField>
            <InputField value={password} setValue={setPassword} isPassword={true}>Password</InputField>
            <div className="mb-5">
              <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
              <input onChange={e => setImage(e.target.files ? e.target.files[0] : null)} type="file" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Signup</button>
          </form>
          </div>
        </div>
  )
}
