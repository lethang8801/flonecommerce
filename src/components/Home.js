import React, { useState } from 'react';
import Slider from '../components/Slider'
import Navigation from '../components/Navigation'
import Container from '../components/Container'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import { useHistory } from "react-router-dom";
import { NavItem, NavLink } from 'reactstrap';
import { dataProduct } from '../components/Data/ListData'
import '../components/css/Product.css'





const Home = () => {
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

    const [list, setList] = useState(
        [
            {
                id: 1,
                title: 'New Arrivals',
                label: 'left',
                active: true,
            },
            {
                id: 2,
                title: 'Best Sellers',
                label: 'mid',
                active: false,
            },
            {
                id: 3,
                title: 'Sale Items',
                label: 'right',
                active: false,
            },
        ]
    )

    const [defaultTab, setDefaultTab] = useState('left')

    const handleList = (params) => {
        let cloneList = [...list]
        cloneList.map((item) => {
            if (item.id === params.id) {
                item.active = true
            }
            else {
                item.active = false
            }
        })
        setList(cloneList)
        setDefaultTab(params.label)
    }

    const borderBottom = {
        borderBottom: '1px solid #000'
    }

    const borderNone = {

    }

    return (
        <div>

            <Navigation />
            <Slider />
            <Container />


            <div>
                <div className="btn-all">
                    {
                        list.map(params => (
                            <button key={params.id}
                                style={params.active ? borderBottom : borderNone}
                                onClick={() => handleList(params)}
                                className="btn-array">
                                {params.title}
                            </button>
                        ))
                    }
                </div>
                {
                    defaultTab === 'left' &&
                    <div className="product-list">
                        <div className="product-8">
                            {
                                dataProduct.map((item) =>
                                    <div key={item.id} className="product">

                                        <img
                                            src={item.img}
                                            alt="img"
                                        />
                                        <div className="text-product">
                                            <div>
                                                <button
                                                    onClick={() => history.push('/productItem', { state: item })}
                                                    style={{ border: 'none', backgroundColor: 'transparent' }}>
                                                    {item.name}
                                                </button>


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
                }
                {
                    defaultTab === 'mid' && <div className="product-list">
                        <div className="product-8">
                            {
                                dataProduct.map((item) =>
                                    <div key={item.id} className="product">

                                        <img
                                            src={item.imgChange}
                                            alt="img"
                                        />
                                        <div className="text-product">
                                            <div>
                                                <button
                                                    onClick={() => history.push('/productItem', { state: item })}
                                                    style={{ border: 'none', backgroundColor: 'transparent' }}>
                                                    {item.name}
                                                </button>


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
                }
                {
                    defaultTab === 'right' && <div className="product-list">
                        <div className="product-8">
                            {
                                dataProduct.map((item) =>
                                    <div key={item.id} className="product">

                                        <img
                                            src={item.img}
                                            alt="img"
                                        />
                                        <div className="text-product">
                                            <div>
                                                <button
                                                    onClick={() => history.push('/productItem', { state: item })}
                                                    style={{ border: 'none', backgroundColor: 'transparent' }}>
                                                    {item.name}
                                                </button>


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
                }
            </div>
            <Blog />
            <Footer />

        </div>
    )

}
export default Home