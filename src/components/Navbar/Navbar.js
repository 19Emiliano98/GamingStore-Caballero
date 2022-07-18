import React from "react";
import { Link } from "react-router-dom";

import CartWidget from '../Navbar/CartWidget'
/* Styles */
import "./Navbar.css"

const Navbar = () => {

const categories = [
    {
        id: 1,
        path: '/',
        name: 'Home'
    },
    {
        id: 2,
        path: '/category/Mothers',
        name: 'Mothers'
    },
    {
        id: 3,
        path: '/category/Cpus',
        name: 'Cpus'
    },
    {
        id: 4,
        path: '/category/Gpus',
        name: 'Gpus'
    },
    {
        id: 5,
        path: '/category/Discos',
        name: 'Discos'
    },
]    

    return(
    <>
        <header>
            <nav>
            <h1>G S</h1>
                <ul>
                    {categories.map((cat) => (
                        <Link to={cat.path} key={cat.id}>{cat.name}</Link>
                    ))}
                </ul>
                <CartWidget />
            </nav>
        </header>
    </>    
    ) 
}


export default Navbar