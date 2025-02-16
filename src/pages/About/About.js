import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import './About.css';
import Contact from "../../components/contact/contact";
import sliki from '../../assets/sliki';
import MapEmbed from "../../components/mapEmbed";
import { Container, Row, Col } from 'react-bootstrap';

function About(props) {
        return (
            <div className="Home">
                    <Navbar/>
                    <div className="container">
                            <div className="about-section">
                                    <div className="about-item">
                                            <h1>About Us - Plaset Doner</h1>
                                            <img src={sliki.doner_logo} alt="Plaset Doner" className="doner-logo"/>
                                            <p>Welcome to Plaset Doner, a culinary haven where passion meets tradition, and every bite tells
                                                    a story. </p>
                                    </div>

                                    <div className="about-item">
                                            <h1>Craftsmanship in Every Bite</h1>
                                            <img src={sliki.doner_workplace} alt="Craftsmanship in Every Bite" className="workplace-image"/>
                                            <p>Our culinary artisans carefully curate each aspect of the Plaset Doner experience. From the
                                                    selection of premium meats and fresh, locally sourced ingredients to the artful assembly of
                                                    our signature dishes, we take pride in delivering a taste that goes beyond the ordinary.</p>
                                    </div>

                                    <div className="about-item">
                                            <h1>Visit Us</h1>
                                            <img src={sliki.doner_burger} alt="Visit Us" className="burger-image"/>
                                            <p>Plaset Doner – Where Every Meal is an Adventure.</p>
                                    </div>
                            </div>
                    </div>
                    <div className="map-contact-container">
                            <MapEmbed className="map-container"/>
                            <div>
                                    <Contact className="contact-container"/>
                            </div>
                    </div>
                    <Footer/>
            </div>
        );
}
export default About;
