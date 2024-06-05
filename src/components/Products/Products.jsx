import Product from "./Product/Product";
import "./Products.scss";
const Products = ({innerPage, hedingText}) => {
    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{hedingText}</div>}
            <div className="products">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
};

export default Products;
