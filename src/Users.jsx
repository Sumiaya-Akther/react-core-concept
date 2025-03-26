import { use } from "react";

const Users = ({fetchUsers}) => {
  const user = use(fetchUsers);
  //console.log(user);
  
  return (
    <div className="card">
      <h3>User: {user.length}</h3>
    </div>
  );
};

export default Users;