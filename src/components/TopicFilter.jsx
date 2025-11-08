import { useEffect, useState } from "react";
import { getAllTopics } from "../services/PostService";

export const TopicFilter = ({ setChosenTopicId }) => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getAllTopics().then((topicsArray) => {
            setTopics(topicsArray)
        })
    }, [])

    return (
        <div className="filter-bar">
            <select className="topic-filter"
            onChange={(event) => {
                setChosenTopicId(parseInt(event.target.value))
            }}
            >
                <option value="0">Choose A Topic</option>
                {topics.map((topic) => {
                    return (
                        <option value={topic.id} key={topic.id}>
                            {topic.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}