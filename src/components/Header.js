import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'




class Header extends Component {
    render() {
        return (
            <div>
                <header class="header">
                    <div class="slogan">
                        <p class="RightToLeft">GECCI: Towards a Greener Future; United in Action&nbsp;&nbsp;&nbsp;</p>
                        <p class="RightToLeft slogan2">GECCI: Towards a Greener Future; United in Action&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    
                    <div class="header-icons">
                        <Link target="_blank" to="https://www.facebook.com/GreenEnvironmentandClimateChangeInitiative/"><i class="fab fa-facebook-f" style={{color: "var(--mainWhite)"}}></i></Link>
                        <Link target="_blank" to="https://www.linkedin.com/company/green-environment-and-climate-change-initiative-gecci/"><i class="fab fa-linkedin-in" style={{color: "var(--mainWhite)"}}></i></Link>
                        <Link target="_blank" to="https://twitter.com/GECC_Initiative"><i class="fab fa-x-twitter" style={{color: "var(--mainWhite)"}}></i></Link>
                        <Link target="_blank" to="https://www.instagram.com/gecc_initiative/"><i class="fab fa-instagram" style={{color: "var(--mainWhite)"}}></i></Link>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;
