import React from 'react'
import '../components/css/Footer.css';  
function Footer() {
    return (
        <div className="footer">
            <div className="list-footer">
            <div>
                <h2>Flone.</h2>
                <p>© Flone.</p>
                <p>All Rights Reserved</p>
            </div>
            <ul>
                <h3>ABOUT US</h3>
                <li>About us</li>
                <li>Store location</li>
                <li>Contact</li>
                <li>Orders tracking</li>
            </ul>
            <ul>
                <h3>USEFUL LINKS</h3>
                <li>Returns</li>
                <li>Support Policy</li>
                <li>Size guide</li>
                <li>FAQs</li>
            </ul>
            <ul>
                <h3>FOLLOW US</h3>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube </li>  
            </ul>
        </div>
        </div>
    )
}

export default Footer
