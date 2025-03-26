import { use } from "react";

const Friends = ({friendsPromise}) => {

    const friends = use(friendsPromise);
  return (
    <div className="card">
      <h3>Friends:{friends.length} </h3>
    </div>
  );
};

export default Friends;