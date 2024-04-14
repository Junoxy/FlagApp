import './SearchBar.css'

const SearchBar = ({ onChange }) => {
    return (
        <div className="searchbar">
            <input
                type="text"
                onChange={onChange}
            />
            <span className="placeholder">Search countries...</span> 
        </div>
    );
};

export default SearchBar