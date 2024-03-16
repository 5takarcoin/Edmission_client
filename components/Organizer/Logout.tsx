import { AppDispatch } from "@/store/store";
import { logout } from "@/store/userSlice";
import { useDispatch } from "react-redux";

type UserType = {
  name: string;
};

export default function Logout() {
  const dispatch = useDispatch<AppDispatch>();
  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const url = process.env.NEXT_PUBLIC_API + "logout";
    const response = await fetch(url, {
      credentials: "include",
    });
    dispatch(logout());
  };

  return (
    <div>
      <button
        className="border-2 border-ed-white text-white hover:text-ed-prim hover:bg-ed-white px-8 py-2 rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
