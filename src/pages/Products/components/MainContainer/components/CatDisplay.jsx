
import { useState } from "react";
import categories from "../../../../../data/categoriesData.js";
import './CatDisplay.scss';
import { ShowProducts } from './components/ItemsListContainer';


export const CatDisplay = ({ searchTerm, onSearch }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categoryClick = (category) => {
        setSelectedCategory(category);
        onSearch("")
    };

    return <>
        <div className='mainContainer'>
            <div className="categories-container">
                {categories.map((cat) => {
                    return <>
                        <div 
                            key={cat.catName}
                            onClick={() => categoryClick(cat.catName)}
                            className="category-btn-container"
                        >
                            <div className="catImg-container">
                                <img className="catImage" src={cat.catImg} alt="" />
                            </div>
                            <span className="catName">{cat.catName}</span>
                        </div>
                    </>
                })}
            </div>
            <div className="display-container">
                <ShowProducts category={selectedCategory} searchTerm={searchTerm}/>
            </div>
        </div>
    </>
}