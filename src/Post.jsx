
const Post = ({post}) => {
    //const {title} = post;
  return (
    <div className="card">
      <h3>Title: {post.title}</h3>
    </div>
  );
};

export default Post;