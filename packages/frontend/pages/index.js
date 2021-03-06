import { useQuery } from "@apollo/react-hooks";
import Posts from "../queries/posts";

const HomePage = () => {
  const { loading, error, data } = useQuery(Posts);

  if (error) console.log("error message is: ", error.message);
  if (loading) return <p>loading</p>;

  if (data === undefined || data.me === undefined || data.me === null) {
    const { publishedPosts } = data;

    return (
      <>
        <h1>Frontend</h1>
        {publishedPosts.map((post, id) => {
          return <div key={`post-${id}`}>{post.title}</div>;
        })}
      </>
    );
  } else {
    return (
      <>
        <p>Hi, {data.me.firstName}</p>
        <p>process.env.NODE_ENV is {process.env.NODE_ENV}</p>
      </>
    );
  }
};

export default HomePage;
