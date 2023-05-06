import React from 'react';
import './Home.css';


import Header from '../../components/Header/Header';
class Home extends React.Component {



    render() {
        return (
            <>
                <div id="home">
                    {/* <Header /> */}
                    <div className="home__main__parent">
                        <div className="home__left">
                            <p className='home__left__main__para' >So, you want to travel to</p>
                            <h1>Space</h1>
                            <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                        </div>
                        <div className="home__right">
                            <div className="home__right__circle" onClick={() => window.location.href = "/destination"} >
                                <p>Explore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;