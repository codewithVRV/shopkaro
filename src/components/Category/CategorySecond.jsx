// import "./Category.scss";
import Products from "../Products/Products";
import "./Category.scss"
// import cat1 from "../../assets/category/cat-1.jpg"
// import Products from "../../"

const CategorySecond = () => {
    return (

        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">Category Title</div>
                <Products innerPage={true} />
            </div>
        </div>
    )
};

export default CategorySecond;
