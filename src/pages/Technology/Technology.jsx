import React, { Component } from 'react'
import './Technology.css'
import Data from '../../data.json'
import TechMobile from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import TechDesk from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import SpacePortLandscape from '../../assets/technology/image-spaceport-landscape.jpg'
import SpacePortPortrait from '../../assets/technology/image-spaceport-portrait.jpg'
import SpaceCapsuleLandscape from '../../assets/technology/image-space-capsule-landscape.jpg'
import SpaceCapsulePortrait from '../../assets/technology/image-space-capsule-portrait.jpg'

export default class Technology extends Component {

    constructor() {
        super();
        this.state = {
            technologies: [],
            technology: {},
        }
        this.circle__handler = this.circle__handler.bind(this);
    }

    componentDidMount() {
        this.setState((prevState) => {
            return {
                technologies: Data.technology,
                technology: Data.technology[0],
            }
        })
    }


    circle__handler(e) {
        const targett = e.target;

        if (targett.tagName == "LI") {

            const lis = document.querySelectorAll('.circle__parent li')
            lis.forEach((li) => {
                li.classList.remove('filled__circle')
            })

            targett.classList.add('filled__circle')

            this.setState((prevState) => {
                return {
                    technology: prevState.technologies[targett.innerText - 1],
                }
            })

        }
    }

    render() {
        return (
            <div id="technology">
                <div className="main__tech">
                    <p className="tech__heading"><span>03</span>Space launch 101</p>

                    <div className="wrapper">
                        <div className="wrapper__left">
                            <div className="left__circles">
                                <ul className='circle__parent' onClick={this.circle__handler} >
                                    <li className='filled__circle' >1</li>
                                    <li>2</li>
                                    <li>3</li>
                                </ul>
                            </div>

                            <div className="wrapper__content">
                                <p>The Terminology...</p>
                                <h1 className=' content__name' >{this.state.technology.name}</h1>
                                <h1 className="content__description">{this.state.technology.description}</h1>
                            </div>
                        </div>

                        <div className="wrapper__right">
                            <img src={
                                window.innerWidth > 768 ? this.state.technology.name == "Launch vehicle" ? TechDesk :
                                    this.state.technology.name == "Spaceport" ? SpacePortPortrait :
                                        this.state.technology.name == "Space capsule" ? SpaceCapsulePortrait : ""
                                    :
                                    this.state.technology.name == "Launch vehicle" ? TechMobile :
                                        this.state.technology.name == "Spaceport" ? SpacePortLandscape :
                                            this.state.technology.name == "Space capsule" ? SpaceCapsuleLandscape : ""

                            } alt="" />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
