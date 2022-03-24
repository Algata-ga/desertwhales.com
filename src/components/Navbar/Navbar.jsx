import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import {GiHamburgerMenu} from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
    const [nav,setNav]= useState(false);
    const openclose = nav ? style.open : style.close;

    return (

        <header className={style.header}>
            <Container className ={style.dflex}>
                <div className={style.logo}>
                    <img src={logo} alt="logo" />
                </div>
                
                <div className={style.links + ' ' + openclose}>
                    <Link className={style.link} to="#">Home</Link>
                    <Link className={style.link} to="#About">About</Link>
                    <Link className={style.link} to="#Service">Services</Link>
                    <Link className={style.link} to="#Blog">Blogs</Link>
                </div>
                <div className={style.hamburger}>
                    <GiHamburgerMenu onClick={()=>{
                        if(nav==false){
                            setNav(true);
                        }
                        else{
                            setNav(false)
                        }
                    }}  />
                </div>
            </Container>
        </header>

    )
}

export default Navbar;