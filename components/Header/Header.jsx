import React, {useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import userIcon from "../../assets/images/profile.png";
import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import useAuth from '../../custom-hooks/useAuth';
import { signOut } from "firebase/auth";
import { toast } from 'react-toastify'
import { auth } from "../../firebase.config";
import "./header.css";

const nav__links = [
    {
        path: '/',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Products'
    },
    {
        path: 'cart',
        display: 'Cart'
    },
]

const Header = () => {

    const headerRef = useRef(null);
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const menuRef = useRef(null);
    const navigate = useNavigate()
    const {currentUser} = useAuth()
    const profileActionRef = useRef(null)

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () =>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky__header')
            } else{
                headerRef.current.classList.remove('sticky__header')
            }
        });
    };

    const logout = () => {
        signOut(auth).then(() => {
            toast.success('Logged out');
            navigate('/');
        }).catch(err => {
            toast.error(err.message)
        })
    }

    useEffect(() => {
        stickyHeaderFunc()
        return () => window.removeEventListener('scroll', stickyHeaderFunc)
    });

    const menuToggle = () => menuRef.current.classList.toggle('active__menu');

    const navigateToCart = () => {
        navigate('/cart')
    }

    const toggleProfileActions = () => profileActionRef.current.classList.toggle('show__profileActions')

    return <div className="header" ref={headerRef}>
        <Container>
            <Row>
                <div className="nav__wrapper"> 
                    <div className="logo">
                        {/* <img src='' alt="logo" /> */}
                        <div>
                            <h1>HEAL'N'GLOW</h1>
                        </div>
                    </div>
                    <div className="navigation" ref={menuRef} onClick={menuToggle}>
                        <ul className="menu">
                            {nav__links.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active': ''}>{item.display}</NavLink>
                                    </li>
                            ))}
                        </ul>
                    </div>
                    <div className="nav__icons">
                        <span className="fav__icon"><i class="ri-heart-line"></i>
                            <span className="badge">1</span>
                        </span>
                        <span className="cart__icon" onClick={navigateToCart}><i class="ri-shopping-bag-line"></i>
                            <span className="badge">{totalQuantity}</span>
                        </span>
                        <div className="profile">
                          <motion.img 
                            whileTap={{scale: 1.2}} 
                            src={ currentUser ? currentUser.photoURL : userIcon } 
                            alt=""
                            onClick={toggleProfileActions}
                        />
                        </div>
                        <div 
                            className="profile__actions" 
                            ref={profileActionRef}
                            onClick={toggleProfileActions}
                        >
                            {currentUser ? (
                                <span  style={{fontWeight:"500"}} onClick={logout} ><i style={{marginRight:"5px"}} class="ri-logout-box-line"></i>Logout</span>
                                )  : (
                                <div className="d-flex align-items-center justify-content-center flex-column">
                                    <Link to='/signup' style={{fontWeight:"500"}}><i style={{marginRight:"5px"}} class="ri-user-add-fill"></i>Signup</Link>
                                    <Link to='/login' style={{fontWeight:"500"}}><i style={{marginRight:"12px"}} class="ri-login-box-line"></i>Login</Link>
                                </div>
                            )}
                        </div>
                        <div className="mobile__menu">
                        <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
                    </div>
                    </div>     
                </div>
            </Row>
        </Container>
    </div>
}

export default Header;