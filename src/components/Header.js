import { HEADER_LOGO } from "../utils/CDN";

const Header = () => {
    return(
            <div className='header'>
                <div className='logo'>
                    <img src= {HEADER_LOGO}/>
                    
                </div>
                <div className='nav'>
                   <ul>
                     <li>About</li>
                     <li>Contact</li>
                     <li>Order</li>
                     <li>Cart</li>
                   </ul>

                </div>
            </div>

    )
}

export default Header;