type UserType = {
    name: string
}

export default function Logout({user, setUser} : { user: UserType, setUser: React.Dispatch<React.SetStateAction<UserType | null>>}) {

  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const url = "http://localhost:5050/logout";
    const response = await fetch(url, {
      credentials: "include",
    });
    setUser(null);
  };

  return (
    <div>
      <button
        className="my-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
