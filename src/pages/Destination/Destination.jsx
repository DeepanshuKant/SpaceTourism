import React from 'react';
import './Destination.css';
import data from '../../data.json';
import moon from '../../assets/destination/image_moon.png'
import mars from "../../assets/destination/image-mars.png"
import europa from "../../assets/destination/image-europa.png"
import titan from "../../assets/destination/image-titan.png"

class Destination extends React.PureComponent {


    constructor(props) {
        super(props);
        this.state = {
            planets: [],
            planet: {},
            img: ""
        }

        // this.setState((prevState) => {
        //     return {
        //         planets: data.destinations,
        //         planet: data.destinations[0],
        //         img: data.destinations[0].images.png
        //     }
        // })
    }



    componentDidMount() {
        this.setState((prevState) => {
            return {
                planets: data.destinations,
                planet: data.destinations[0],
                img: data.destinations[0].images.png
            }
        })
    }

    // componentDidUpdate() {
    //     console.log(this.state.planet.images.png)
    //     console.log(this.state.img)
    // }

    handlerName = (value, target) => {

        const getSpeceficPlanet = this.state.planets.filter((planett) => planett.name.toLowerCase() === value.toLowerCase());
        this.setState((prevState) => {
            return {
                planet: getSpeceficPlanet[0],
                img: getSpeceficPlanet[0].images.png
            }
        })

        const lis = document.querySelectorAll('.planet__types li')
        lis.forEach((planet) => {
            planet.classList.remove('active__planet')
        })

        target.classList.add('active__planet')

    }

    render() {
        return (
            <>
                <div id="destination">
                    {/* <Header /> */}
                    <div className="main__parent">
                        <div className="box__1">
                            <p><span>01</span>pick your destination</p>
                            <img src={
                                this.state.planet.name === "Moon" ? moon :
                                    this.state.planet.name === "Mars" ? mars :
                                        this.state.planet.name === "Europa" ? europa :
                                            this.state.planet.name === "Titan" ? titan : ""
                            } alt="" height="200px" width="200px" />
                        </div>

                        <div className="box__2">
                            <div className="planets">
                                <ul className="planet__types">
                                    <li className="planet__items active__planet" onClick={(e) => this.handlerName(e.target.innerText, e.target)} >Moon</li>
                                    <li className="planet__items" onClick={(e) => this.handlerName(e.target.innerText, e.target)} >Mars</li>
                                    <li className="planet__items" onClick={(e) => this.handlerName(e.target.innerText, e.target)} >Europa</li>
                                    <li className="planet__items" onClick={(e) => this.handlerName(e.target.innerText, e.target)} >Titan</li>
                                </ul>
                            </div>

                            <h1>{this.state.planet.name}</h1>
                            <p>{this.state.planet.description}</p>

                            <div className="box__3">
                                <h1>
                                    <span>Avg. Distance</span>
                                    {this.state.planet.distance}
                                </h1>

                                <h1>
                                    <span>Est. Travel Time</span>
                                    {this.state.planet.travel}
                                </h1>
                            </div>
                        </div>


                    </div>
                </div>
            </>
        )
    }


};




export default Destination;




