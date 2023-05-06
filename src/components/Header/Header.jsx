import React, { useEffect } from 'react';
import './Header.css';
import logo from '../../assets/shared/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import classnames from 'classnames';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    state = {
        sliding: false
    }

    slidingChangeHandle = () => {
        this.setState((prevState) => {
            return {
                sliding: !prevState.sliding
            }
        })
    }


    render() {

        return (
            <>
                <nav id='nav'>
                    <div className="main__nav__parent">
                        <div className="nav__left__child">
                            <img src={logo} alt="" style={{ marginLeft: "1.2rem" }} />
                        </div>
                        <div className="nav__right__child__mobile">
                            <GiHamburgerMenu onClick={this.slidingChangeHandle} style={{ fontSize: "2em", marginRight: "1.2rem" }} />

                            <div className={classnames("nav__mobile", { "nav__mobile__sliding": this.state.sliding })}>
                                <div className="first__box">
                                    <RxCross2 onClick={this.slidingChangeHandle} />
                                </div>

                                <div className="second__box">
                                    <ul className='nav__links'>
                                        <li className="nav__items">
                                            <p>00</p>
                                            <Link to="/" onClick={this.slidingChangeHandle} >HOME</Link>
                                        </li>
                                        <li className="nav__items">
                                            <p>01</p>
                                            <Link to="/destination" onClick={this.slidingChangeHandle} >DESTINATION</Link>
                                        </li>
                                        <li className="nav__items">
                                            <p>02</p>
                                            <Link to="/crew" onClick={this.slidingChangeHandle} >CREW</Link>
                                        </li>
                                        <li className="nav__items">
                                            <p>04</p>
                                            <Link to="/technology" onClick={this.slidingChangeHandle} >TECHNOLOGY</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="nav__right__child">
                            <ul className='nav__links'>
                                <li className="nav__items">
                                    <p>00</p>
                                    <Link to="/">HOME</Link>
                                </li>
                                <li className="nav__items">
                                    <p>01</p>
                                    <Link to="/destination">DESTINATION</Link>
                                </li>
                                <li className="nav__items">
                                    <p>02</p>
                                    <Link to="/crew">CREW</Link>
                                </li>
                                <li className="nav__items">
                                    <p>04</p>
                                    <Link to="/technology">TECHNOLOGY</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


            </>
        )
    }
}

export default Header;
