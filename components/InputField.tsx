function InputField({setValue,id, value, isPassword = false, children}: {setValue: React.Dispatch<React.SetStateAction<string>>, value: string, id: string, isPassword?: boolean, children?: React.ReactNode}) {
  return (
    <div className="mb-5">
              <label htmlFor={id} className="block mb-2 text-sm font-medium">{children}</label>
              <input onChange={e => setValue(e.target.value)} type={isPassword ? "password" : "text"} value={value} id={id} className="bg-white border border-gray-300 text-ed-text text-sm rounded-md block w-full p-2 focus:outline-none"/>
            </div>
  )
}

export default InputField