"use client"

import InputField from "@/components/Organizer/InputField"
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
    const url = process.env.NEXT_PUBLIC_API + "signup";
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
    <div className="flex text-ed-text items-center justify-center min-h-[600px]">
    <div className="flex-col bg-ed-white p-8 w-11/12 rounded-xl">
      <h1 className="block text-2xl mb-8 font-bold">Sign Up</h1>
          <form className="" onSubmit={handleSubmit}>
            <InputField id="signup_name" value={name} setValue={setName} >Name</InputField>
            <InputField id="signup_username" value={username} setValue={setUsername} >Username</InputField>
            <InputField id="signup_password" value={password} setValue={setPassword} isPassword={true}>Password</InputField>
            <div className="mb-5">
              <div className="my-4">{image ? <img src={URL.createObjectURL(image)} alt="" /> : <p>No image selected</p>}</div>
              <label htmlFor="image" className="mb-2 text-ed-text text-sm bg-white rounded-md border border-ed-sec font-medium h-10 w-full flex justify-center  items-center text-center"><span>{image ? "Change avatar" : "Choose your avatar"}</span></label>
              <input onChange={e => setImage(e.target.files ? e.target.files[0] : null)} type="file" id="image" className="hidden"/>
            </div>
            <button type="submit" className="text-ed-text bg-white hover:bg-ed-sec hover:text-white border-solid border-2 border-ed-sec font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Sign Up</button>
          
          </form>
          </div>
        </div>
  )
}
