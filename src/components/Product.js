import React, { useState } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { dataProduct } from '../Data/ListData'
import '../components/css/Product.css'
import { useHistory } from "react-router-dom";

function Product({onClick}) {
    const [color, setColor] = useState();
    function handleBoxClick() {
            setColor(thaydoi => !thaydoi);

    }

    const history = useHistory();


    const colorChange = {
        color: '',
    }

    const handleColor = {
        color: 'red'
    }
    return (
        <div className="product-list">
            <Nav>
                <NavItem>
                    <NavLink href="#">New Arrivals</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Best Sellers</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Sale Items</NavLink>
                </NavItem>
            </Nav>
            <div className="product-8">
                {
                    dataProduct.map((item) =>
                        <div key={item.id} className="product">
                            <button 
                            onClick={onClick && onClick(item)}
                            style={{border:'none'}}>
                                 <img 
                            src={item.img} 
                            alt="img"
                            style={{
                                
                            }}
                            />
                            </button>
                           
                            <div className="text-product">
                                <div>
                                    <p>
                                        {item.name}
                                    </p>
                                    <span>
                                        {item.price - item.price * item.percent / 100}
                                    </span>
                                    <span>
                                        {
                                            item.percent <= 0 ? null : item.price
                                        }

                                    </span>
                                </div>
                                <button
                                    className="btn-like"
                                    style={color ? colorChange : handleColor}
                                    onClick={() => handleBoxClick()}>
                                     
                                        <i class="fa fa-heart"></i>
                                        {/* {
                                            item.active === true ?
                                            <i class="fa fa-heart" style={{color: 'red'}} ></i>
                                                :
                                                <i class="fa fa-heart"></i>

                                        } */}
                                </button>
                            </div>
                            <div className="text-discount">
                                <p>
                                    {
                                        item.percent <= 0 ? null : item.percent
                                    }
                                    {
                                        item.percent <= 0 ? null : '%'
                                    }

                                </p>
                                <p>
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="more">
                <NavItem>
                    <NavLink href="#">VIEW MORE PRODUCTS</NavLink>
                </NavItem>
            </div>
        </div>
    )
}

export default Product
