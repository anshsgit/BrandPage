import './Navigation.css';
import brandImage from '../assets/brand_logo.png'

export default function Navigation() {
    return (
        <header>
            <img src={brandImage} alt="Brand Logo" />

            <ul>
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
            
            <button>Login</button>
        </header>
    )
}