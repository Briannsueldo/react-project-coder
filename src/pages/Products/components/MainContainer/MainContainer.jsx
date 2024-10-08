import { useState } from "react";
import { SearchBar } from "./components/SearchBar"; 
import { CatDisplay } from "./components/CatDisplay";
import './MainContainer.scss';

export const MainContainer = () => {

    const [searchTerm, setSearchTerm] = useState("");
    
    const handleSearch = (value) => {
        setSearchTerm(value);
    };


    return <>
        <main className="mainSection">
            <SearchBar onSearch={handleSearch}/>
            <span className="separator"></span>
            <CatDisplay searchTerm={searchTerm} onSearch={handleSearch}/>
        </main>
    </>
}

