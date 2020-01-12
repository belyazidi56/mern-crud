import { useQuery } from "@apollo/react-hooks"
import Posts from "../queries/posts"

const HomePage = () => {
  const { loading, error, data } = useQuery(Posts)

  if (error) console.log("error message is: ", error.message)
  if (loading) return <p>loading</p>

  if (data === undefined || data.me === undefined || data.me === null) {
    const { publishedPosts } = data

    return (
      <>
        <p>Published Posts</p>
        {publishedPosts.map(post => {
          return <div>{post.title}</div>
        })}
      </>
    )
  } else {
    return (
      <>
        <p>Hi, {data.me.firstName}</p>
        <p>process.env.NODE_ENV is {process.env.NODE_ENV}</p>
      </>
    )
  }
}

export default HomePage