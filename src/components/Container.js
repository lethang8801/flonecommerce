import React from 'react'
import '../components/css/Container.css'
import { newItems } from '../components/Data/ListData'
function Container() {
    return (
        <div className="container-1">
            {
                newItems.map((item) =>
                    <div className="new-item">
                        <img src={item.src} alt="src"/>
                        <div className="text-item">
                            <h4>{item.name}</h4>
                            <p>{item.price} <span>{item.coin}</span></p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Container
