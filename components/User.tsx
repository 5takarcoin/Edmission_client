type UserType = {
    name: string;
    _id: string;
    username: string;
    password: string;
  };

export default function User({user}: {user: UserType}) {

  return (
    <div>
      <h1>Welcome, {user.name} {user.username} {user.password} </h1>
    </div>
  );
}
