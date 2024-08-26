import logo from '../logo.png';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'



class NavBar extends Component {
    state = {
        isMenuOpen: false,
        activeDropdowns: []
    };

    menuRef = React.createRef();

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    toggleMenu = () => {
        this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }));
    }

    handleTransitionEnd = (e) => {
        if (e.target === this.menuRef.current) {
            e.target.style.transition = '';
        }
    }

    toggleDropdown = (index, e, isSubDropdown = false) => {
        e.stopPropagation(); // Prevent the click from bubbling up
        this.setState(prevState => {
            let newActiveDropdowns;
            if (prevState.activeDropdowns.includes(index)) {
                // If the clicked dropdown is already active, remove it
                newActiveDropdowns = prevState.activeDropdowns.filter(i => i !== index);
            } else {
                if (isSubDropdown) {
                    // If it's a sub-dropdown, add it to the active dropdowns without removing others
                    newActiveDropdowns = [...prevState.activeDropdowns, index];
                } else {
                    // If it's a top-level dropdown, replace all active dropdowns with this one
                    newActiveDropdowns = [index];
                }
            }
            return { activeDropdowns: newActiveDropdowns };
        });
    }

    handleClickOutside = (e) => {
        if (this.menuRef.current && !this.menuRef.current.contains(e.target)) {
            this.setState({ activeDropdowns: [] });
        }
    }

    render() {
        const { isMenuOpen, activeDropdowns } = this.state;

        return (
            <header className="header-nav">
                <div className="container">
                    <div className="logo nav-logo">
                        <Link to='/'><img src={logo} alt="logo" /></Link>
                    </div>
                    <nav 
                        ref={this.menuRef}
                        className={`menu ${isMenuOpen ? 'open' : ''}`}
                        style={{ transition: isMenuOpen ? 'transform 0.5s ease' : '' }}
                        onTransitionEnd={this.handleTransitionEnd}
                    >
                        <div className="head">
                            <div className="logo"><Link to='/'><img src={logo} alt="logo" /></Link></div>
                            <button type="button" className="close-menu-btn" onClick={this.toggleMenu}></button>
                        </div>
                        <ul>
                            <li><Link to="/">HOME</Link></li>
                            <li className={`dropdown who-we-are ${activeDropdowns.includes('who-we-are') ? 'active' : ''}`}>
                                <Link to="#" onClick={(e) => this.toggleDropdown('who-we-are', e)}>WHO WE ARE</Link>
                                <i className="fa fa-angle-down" onClick={(e) => this.toggleDropdown('who-we-are', e)}></i>
                                <ul className="tab">
                                    <li><Link to="#about"><span>ABOUT US</span></Link></li>
                                    <li><Link to="/Team"><span>OUR TEAM</span></Link></li>
                                </ul>
                            </li>
                            {/* PROJECT TAB */}
                            <li className={`dropdown project-tab ${activeDropdowns.includes('projects') ? 'active' : ''}`}>
                                <Link to="#" onClick={(e) => this.toggleDropdown('projects', e)}>PROJECTS</Link>
                                <i className="fa fa-angle-down" onClick={(e) => this.toggleDropdown('projects', e)}></i>
                                <ul className="tab">
                                    {/* ECOSYSTEM RESTORATION TAB */}
                                    <li className="sub-drodown dropdown"><Link to="/Projects/Eco-Restoration-for-Climate-Action"><span>ECOSYSTEM RESTORATION</span></Link></li>
                                    {/* ENVIRONMENTAL EDUCATION TAB */}
                                    <li className={`dropdown ${activeDropdowns.includes('env-education') ? 'active' : ''}`}>
                                        <Link to="Environmental-Education" onClick={(e) => this.toggleDropdown('env-education', e, true)}><span>ENVIRONMENTAL EDUCATION</span></Link>
                                        <i className="fa fa-angle-down" onClick={(e) => this.toggleDropdown('env-education', e, true)}></i>
                                        <ul className="tab tab-right">
                                            <li className="dropdown"><Link to="/Projects/WorldForestDay-2022"><span>WORLD FOREST DAY</span></Link></li>
                                            <li className="dropdown"><Link to="/Projects/WorldEnvironmentDay-2024"><span>WORLD ENVIRONMENT DAY</span></Link></li>
                                            <li className="dropdown"><Link to="/Projects/WorldEarthDay-2024"><span>WORLD EARTH DAY</span></Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><Link to="/CommunityEngagement"><span>COMMUNITY ENGAGEMENT</span></Link></li>
                                    <li className="dropdown"><Link to="/Nature-Lab-Project"><span>NATURE LAB PROJECT</span></Link></li>
                                    <li className="dropdown"><Link to="/Projects/GreenHangout"><span>GREEN HANGOUT</span></Link></li>
                                    <li className="dropdown"><Link to="/Climate-Bootcamp"><span>CLIMATE BOOTCAMP</span></Link></li>
                                    <li className="dropdown"><Link to="/Projects/YouthClimatePolicy"><span>YOUTH CLIMATE POLICY TRAINING</span></Link></li>
                                </ul>
                            </li>
                            <li><Link to="./blog">BLOG</Link></li>
                            <li className={`dropdown get-involved ${activeDropdowns.includes('get-involved') ? 'active' : ''}`}>
                                <Link to="#" onClick={(e) => this.toggleDropdown('get-involved', e)}>GET INVOLVED</Link>
                                <i className="fa fa-angle-down" onClick={(e) => this.toggleDropdown('get-involved', e)}></i>
                                <ul className="tab">
                                    <li><Link to="/Membership"><span>BECOME A MEMBER</span></Link></li>
                                    <li><Link to="/Volunteer"><span>VOLUNTEER</span></Link></li>
                                    <li><Link to="/Events"><span>EVENTS</span></Link></li>
                                </ul>
                            </li>
                            <li><Link to="/Contact">CONTACT</Link></li>
                            <button type="button" className="nav-btn nav-donate-btn">
                                <a href="https://flutterwave.com/donate/fopgfyqstegl" target="_blank" rel="noopener noreferrer">
                                    <span aria-hidden="true"></span>DONATE
                                </a>
                            </button>
                        </ul>
                    </nav>
                    <div className="header-right">
                        <button type="button" className="open-menu-btn" onClick={this.toggleMenu}>
                            <span className="line line-1"></span>
                            <span className="line line-2"></span>
                            <span className="line line-3"></span>
                        </button>
                    </div>
                </div>
            </header>
        );
    }
}

export default NavBar;