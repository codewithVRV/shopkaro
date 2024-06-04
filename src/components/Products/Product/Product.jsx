import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"
const Product = () => {
    return (
        <div className="product-card">
            {/* <h1>Product Component</h1> */}
            <div className="thumbnail">
                <img src={prod} alt="Product Image" />
            </div>
            <div className="prod-details">
                <span className="name">Product Name</span>
                <span className="price">&#8377; 499</span>
            </div>

        </div>
    )
};

export default Product;
