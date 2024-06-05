import { useEffect, useState, useContext } from "react";

import "./Header.scss";
import "../../index.scss"
import {TbSearch} from "react-icons/tb"
import {CgShoppingCart} from "react-icons/cg"
import {AiOutlineHeart} from "react-icons/ai"


import { Context } from "../../utils/Context";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";


const Header = () => {

    const [scroll, setScroll] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 100) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }
    useEffect (() => {
        window.addEventListener("scroll", handleScroll)
    }, [])


    return (

        <>

            <header className={`main-header ${scroll ? "sticky-header" : ""}`}>
                    <div className="header-content">
                        <ul className="left">
                            <li>Home</li>
                            <li>About</li>
                            <li>Categories</li>
                        </ul>
                        <div className="center">ShopKaro</div>
                        <div className="right">
                            <TbSearch  onClick={() => setShowSearch(true)}/>
                            <AiOutlineHeart />
                            <span className="cart-icon">
                                <CgShoppingCart onClick={() => setShowCart(true)}/>
                                <span>5</span>
                            </span>
                        </div>
                    </div>
                </header>
                {showCart && <Cart setShowCart={setShowCart}/>}
                {showSearch && <Search  setShowSearch={setShowSearch}/>}
        </>
    );
};

export default Header;
