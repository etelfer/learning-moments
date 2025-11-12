import "./Post.css"

export const Post = ({ post }) => {
    return (
         <div className="post">
                    <div>
                        <div className="post-info">Title</div>
                        <div>{post.title}</div>
                    </div>
                    <div>
                        <div className="post-info">Topic</div>
                        <div>{post.topic?.name}</div>
                    </div>
                    <div>
                        <div className="post-info">Likes</div>
                        <div>{post.likes?.length}</div>
                    </div>
                </div>
    )
}