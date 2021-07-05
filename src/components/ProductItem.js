import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import '../components/css/ProductItem.css';

const ProductItem = () => {
    const [array, setArray] = useState([
        {
            id: 1,
            title: 'Additional Information',
            label: 'left',
            active: true,
        },
        {
            id: 2,
            title: 'Description',
            label: 'mid',
            active: false,
        },
        {
            id: 3,
            title: 'Reviews',
            label: 'right',
            active: false,
        },
    ])

    const [setlectedTab, setSetlectedTab] = useState('left')

    const handleArr = (value) => {
        let clonedArray = [...array]
        clonedArray.map((item) => {
            if (item.id === value.id) {
                item.active = true
            }
            else {
                item.active = false
            }
        })
        setArray(clonedArray)
        setSetlectedTab(value.label)
    }


    let location = useLocation();
    const item = location.state.state

    const borderBottom =  {
        borderBottom:'1px solid #000'
    }   

    const borderNone = {
        
    }

    const over = (e) => {
        e.currentTarget.src = item.imgChange;
    }
    const out = (e) => {
        e.currentTarget.src = item.img;
    }

    
    return (
        <div className="product-items">
           
            <Navigation />
            <div className="product-item">

                <img src={item.img}  
                onMouseOver={over}
                onMouseOut={out} 
                alt="src" 
                className="product-item-img" />

                <div className="information">
                    <p>
                        {location.state.state.name}
                    </p>
                    <span className="price">
                        {item.price - item.price * item.percent / 100}
                    </span>
                    <span className="price-old">
                        {
                            item.percent <= 0 ? null : item.price
                        }

                    </span>
                    <div>
                        <button className="btn">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="imformation1">
                <div className="btn-all">
                    {
                        array.map(value => (
                            <button
                            style={value.active ? borderBottom : borderNone} 
                            key={value.id} 
                            onClick={() => handleArr(value)} 
                            className="btn-array">
                                {value.title}
                            </button>
                        ))
                    }
                </div>

                {
                    setlectedTab === 'left' && <div className="content content-1">
                        <ul>
                            <li>Weight</li>
                            <li>Dimensions</li>
                            <li>Materials</li>
                            <li>Other Info</li>
                        </ul>
                        <ul>
                            <li>400 g</li>
                            <li>10 x 10 x 15 cm</li>
                            <li>60% cotton, 40% polyester</li>
                            <li>American heirloom jean shorts pug seitan letterpress</li>
                        </ul>
                    </div>
                }
                {
                    setlectedTab === 'mid' && <div className="content">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </div>
                }
                {
                    setlectedTab === 'right' && <div className="content">
                        <h4>White Lewis</h4>
                        <p>Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.</p>
                    </div>
                }
            </div>
            <Footer />
        </div>
    )

}

export default ProductItem
