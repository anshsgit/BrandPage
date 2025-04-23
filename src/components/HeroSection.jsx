import './HeroSection.css';
import flipkartImage from '../assets/flipkart.png';
import amazonImage from '../assets/amazon.png';
import shoeImage from '../assets/shoe_image.png';

export default function HeroSection() {
    return (
        <main>
            <section className='section1'>
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p className='section1-p'>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH YOUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH YOUR SHOES.</p>
                <div className='buttons'>
                    <button className='shopNow'>Shop Now</button>
                    <button className='category'>Category</button>
                </div>
                <div>
                    <p>Also Available On</p>
                    <div className='shoppingImages'>
                        <img src={flipkartImage} alt='flipkart image' />
                        <img src={amazonImage} alt='amazon image' />
                    </div>
                </div>
            </section>

            <section>
                <img src={shoeImage} alt="shoe image" />
            </section>
        </main>
    )
}