import { useEffect, useState } from "react"
import { getAllPosts } from "../../services/PostService"
import "./Post.css"
import { TopicFilter } from "../TopicFilter"
import { SearchBar } from "../SearchBar"
import { Link } from "react-router-dom"
import { Post } from "./Post"

export const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [chosenTopicId, setChosenTopicId] = useState(0)
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        getAllPosts().then((postArray) => {
            setAllPosts(postArray)
        })
    }, [])

    useEffect(() => {
        let filtered = allPosts

        if (chosenTopicId !== 0) {
            filtered = filtered.filter((post) => post.topicId === chosenTopicId)
        }

        if (searchTerm !== "") {
            filtered = filtered.filter ((post) => 
            post.body.toLowerCase().includes(searchTerm.toLowerCase())
        )
        }

        setFilteredPosts(filtered)
    }, [chosenTopicId, searchTerm, allPosts])

    return (
        <div className="posts">
            <h2>All Posts</h2>
            <TopicFilter setChosenTopicId={setChosenTopicId} />
            <SearchBar setSearchTerm={setSearchTerm} />
            <article>
                {filteredPosts.map((postObj) => {
     return <Link to={`/allposts/${postObj.id}`} key={postObj.id}>
                    <Post post={postObj} /> 
                    </Link>
                })}
            </article>
        </div>
    )
}