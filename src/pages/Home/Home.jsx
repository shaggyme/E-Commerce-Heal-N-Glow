import React, { useState, useEffect} from "react";
import Helmet from "../../components/Helmet/Helmet";
import heroImg from "../../assets/images/IMG_2938.jpg"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";
import "./home.css";
import Services from "../../components/Services/Services";
import Clock from "../../components/UI/Clock";
import ProductsList from "../../components/UI/ProductsList";
import products from "../../assets/data/products";

import counterImg from '../../assets/images/IMG_3036.jpg'

const Home = () => {

    const [data, setData] = useState(products);
    const [newArrival, setNewArrival] = useState([]);
    const year = new Date().getFullYear();

    useEffect(() => {
        const filteredProducts = products.filter(
            (item) => item.avgRating >= '4.7'
        );

        const filteredNewArrivalsProducts = products.filter(
            (item) => item.newArrival === 'true'
        );

        setData(filteredProducts);
        setNewArrival(filteredNewArrivalsProducts);
    }, []);

    return (
        <Helmet title={"Home"}>
            <section className="hero__section">
                <Container>
                    <Row>
                        <Col lg= '6' md='6'>
                            <div className="hero__content">
                                <p className="hero_subtitle">Trending product in {year}</p>
                                <h2>Make Your Skin Glow</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident ab consequuntur maiores. Rem iusto, ipsum iste sequi at inventore. Minus!</p>
                                <motion.button whileTap={{scale: 1.2}} className="buy__btn"><Link className="link" to="/shop">SHOP NOW</Link></motion.button>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="hero__img">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Services/>
            <section className="top__products">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2 className="section__title">Top Products</h2>
                        </Col>
                        <ProductsList data={data}/>
                    </Row>
                </Container>
            </section>
            <section className="timer__count">
                <Container>
                    <Row>
                        <Col lg='6' md='12' className="count__down-col">
                        <div className="clock__top-content">
                            <h4 className="text-white fs-6 mb-2">Limited Offer</h4>
                            <h3 className="text-white fs-5 mb-3">Royal Glow Facial Kit</h3>
                        </div>
                            <Clock/>
                            <motion.button 
                                whileTap={{scale: 1.2}} 
                                className="buy__btn store__btn"
                            >
                                <Link to='/shop'>Visit Store</Link>
                            </motion.button>                        
                        </Col>
                        <Col lg='6' md='12' className="text-end counter__img">
                            <img src={counterImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="new__arrivals">
                <Container>
                    <Row>
                    <Col lg="12" className="text-center">
                            <h2 className="section__title">New Arrivals</h2>
                        </Col>
                        <ProductsList data={newArrival}/>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Home; 