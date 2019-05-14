export default function Blog(props) {
  // 用于说明 key只要在一个组内，不同便可
  const sidebar = (
    <ul>
      {props.posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>))}
    </ul>
  );

  const content = props.posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>));

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}
