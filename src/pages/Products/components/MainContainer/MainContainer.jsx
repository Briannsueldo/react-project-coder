
import { SearchBar } from "./components/SearchBar"; 
import { CatDisplay } from "./components/CatDisplay";
import './MainContainer.scss';

export const MainContainer = () => {


    return <>
        <main className="mainSection">
            <SearchBar/>
            <span className="separator"></span>
            <CatDisplay/>
        </main>
    </>
}

