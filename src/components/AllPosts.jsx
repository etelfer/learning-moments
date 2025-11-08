import { useEffect, useState } from "react"
import { getAllPosts } from "../services/PostService"
import "./Posts.css"
import { TopicFilter } from "./TopicFilter"
import { SearchBar } from "./SearchBar"

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
        if (chosenTopicId === 0) {
            setFilteredPosts(allPosts)
        } else {
            const filteredPosts = allPosts.filter((post) => 
            post.topicId === chosenTopicId)
            setFilteredPosts(filteredPosts)
        }
    }, [chosenTopicId, allPosts])

    useEffect(() => {
        const foundPosts = allPosts.filter((post) => 
            post.body.includes(searchTerm.toLowerCase())
        )
        setFilteredPosts(foundPosts)
    }, [searchTerm,allPosts])

    return (
        <div className="posts">
            <h2>All Posts</h2>
            <TopicFilter setChosenTopicId={setChosenTopicId} />
            <SearchBar setSearchTerm={setSearchTerm} />
            <article>
                {filteredPosts.map((postObj) => {
                    return (
                    <section className="post" key={postObj.id}>
                        <header className="post-header">
                            <strong>{postObj.title}</strong>
                        </header>
                        <div className="post-topic">
                            Topic: {postObj.topic?.name}
                        </div>
                        <footer className="post-footer">
                            Likes: {postObj.likes?.length}
                        </footer>
                    </section>
                    )
                })}
            </article>
        </div>
    )
}