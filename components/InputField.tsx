function InputField({setValue, value, isPassword = false, children}: {setValue: React.Dispatch<React.SetStateAction<string>>, value: string, isPassword?: boolean, children?: React.ReactNode}) {
  return (
    <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{children}</label>
              <input onChange={e => setValue(e.target.value)} type={isPassword ? "password" : "text"} value={value} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
  )
}

export default InputField