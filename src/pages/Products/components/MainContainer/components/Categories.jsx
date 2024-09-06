
export const Categories = ({category, image}) => {
    return <>
        <button className="category-container">
            <div className="catImage">
                <img src={image} alt="logo" />
            </div>
            <div className="catName">
                <p>{category}</p>
            </div>
        </button>
    </>
}