import './SearchBar.css'

const SearchBar = ({onChange}) => {
    return (
        <div className="searchbar">
            <input 
            type="text"
            placeholder='Search countries'
            onChange={onChange}
            />

        </div>
    )
}

export default SearchBar