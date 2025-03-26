import { use } from "react";
import Post from "./Post";

const Posts = ({postsPromise}) => {
    const posts = use(postsPromise);
    //console.log(posts);
    
  return (
    <div className="card">
        <h3>
          all posts are here
        </h3>
        {
        posts.map(post => <Post key={post.id} post={post}></Post>)
      }
    </div>
  );
};

export default Posts;