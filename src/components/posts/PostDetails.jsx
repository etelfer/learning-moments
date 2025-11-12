import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostById } from "../../services/PostService"
import "./PostDetails.css"

export const PostDetails = () => {
    const [post, setPost] = useState({})
    const { postId } = useParams()

useEffect (() => {
    getPostById(postId).then((data) => {
        setPost(data)
    })
}, [postId])

return (
 <section className="post-details">
    <header className="post-header">{post.title}</header>
    <div>
        <span className="post-info">Author : </span>
        {post.user?.fullName}
    </div>
        <div>
        <span className="post-info">Topic : </span>
        {post.topic?.name}
    </div>
        <div>
        <span className="post-info">Date : </span>
        {post.date}
    </div>
        <div>
        <span className="post-info"></span>
        {post.body}
    </div>
        <div>
        <span className="post-info">Likes : </span>
        {post.likes?.length}
    </div>
</section>
)
}