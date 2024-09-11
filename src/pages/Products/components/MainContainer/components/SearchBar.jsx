import './SearchBar.scss';

export const SearchBar = () => {
    return <>
        <div className="searchBar-container">
            <input
             type="text"
             placeholder="Search"
             className="searchInput"
            />
            <button className="searchButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                    <path fill="currentColor" d="m229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72"/>
                </svg>
            </button>
        </div>
    </>
}