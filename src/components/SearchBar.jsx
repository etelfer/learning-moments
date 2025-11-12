export const SearchBar = ( { setSearchTerm }) => {

return (
    <div className="filter-bar">

    <input
        onChange={(event) => {setSearchTerm(event.target.value)
        }}
        type="text"
        placeholder="Search Posts"
        className="search-bar-input"
        />
    </div>
    )
}