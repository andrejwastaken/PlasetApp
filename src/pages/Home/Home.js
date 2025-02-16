import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import './Home.css';
import sliki from '../../assets/sliki';

function Home(props) {
    const imageNames = ["item1", "item2", "item3"];

    return (
        <div className="Home">
            <Navbar />

            <div className="background-container"> </div>

            <div>
                <ul className="image-list">
                    {imageNames.map((imageName, index) => (
                        <li key={index} className="image-item">
                            <img src={sliki[imageName]} alt={`Image ${index + 1}`} />
                        </li>
                    ))}
                </ul>
            </div>

            <Footer />
        </div>
    );
}

export default Home;
