import React from "react";
import restauranfood from "./assets/restauranfood.jpg"

function Footer() {
    return (
        <footer>
            <img src={restauranfood} alt="food" width="100"></img>
            <nav>
                <h3>Doormat Navigation</h3>
                <ul>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Menu">Menu</a></li>
                    <li><a href="/Reservations">Reservations</a></li>
                    <li><a href="/Order-Online">Order Online</a></li>
                    <li><a href="/Login">Login</a></li>
                </ul>
            </nav>
            <nav>
                <h3>Contact</h3>
                <ul>
                    <li><a href="/Address">Address</a></li>
                    <li><a href="/Phone-Number">Phone Number</a></li>
                    <li><a href="/Email">Email</a></li>
                </ul>
            </nav>
            <nav>
                <h3>Social Media Links</h3>
                <ul>
                    <li><a href="/Facebook">Facebook</a></li>
                    <li><a href="/Twitter">Twitter</a></li>
                    <li><a href="/Instagram">Instagram</a></li>
                </ul>
            </nav>
        </footer>
    );
}


export default Footer;