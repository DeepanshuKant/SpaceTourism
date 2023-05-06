import React from 'react';
import './Crew.css';
import Data from '../../data.json';
import Img from '../../assets/crew/image-douglas-hurley.png';
import Img2 from '../../assets/crew/image-mark-shuttleworth.png';
import Img3 from '../../assets/crew/image-victor-glover.png';
import Img4 from '../../assets/crew/image-anousheh-ansari.png';



class Crew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            crews: [],
            crew: {},
            imgg: ""
        }

        this.handlername = this.handlerName.bind(this);
    }

    componentDidMount() {
        this.setState((prevState) => {
            return {
                crews: Data.crew,
                crew: Data.crew[0],
                imgg: Data.crew[0].images.png
            }
        })
    }

    componentDidUpdate() {
        console.log(`${this.state.imgg}`)
    }




    handlerName(value) {
        this.setState((prevState) => {
            return {
                crew: this.state.crews.filter((crew) => crew.id == value.dataset.idNumber)[0],
                imgg: `../.${this.state.crews.filter((crew) => crew.id == value.dataset.idNumber)[0].images.png}`
            }
        })
        const lis = document.querySelectorAll('.dots ul li');

        lis.forEach((li) => {
            li.classList.remove('active__person')
        })

        lis.forEach((li) => {
            if (li.dataset.idNumber === value.dataset.idNumber) {
                li.classList.add('active__person')
            }
        })


    }


    render() {

        return (
            <>
                <div id="crew">
                    {/* <Header /> */}
                    <div className="main__parent__crew">
                        <div className="crew__main__heading">
                            <p><span>02</span>Meet your crew</p>
                        </div>

                        <div className="all__content">
                            <div className="container__1">
                                <img src={
                                    this.state.crew.id == 1 ? Img :
                                        this.state.crew.id == 2 ? Img2 :
                                            this.state.crew.id == 3 ? Img3 :
                                                this.state.crew.id == 4 ? Img4 : ""

                                } alt="" />
                            </div>

                            <div className="container__2">
                                <div className="dots">
                                    <ul>
                                        <li data-id-number="1" className='active__person' onClick={(e) => this.handlerName(e.target)}  ></li>
                                        <li data-id-number="2" onClick={(e) => this.handlerName(e.target)}  ></li>
                                        <li data-id-number="3" onClick={(e) => this.handlerName(e.target)}  ></li>
                                        <li data-id-number="4" onClick={(e) => this.handlerName(e.target)}  ></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <div className="content__1">
                                        <p>{this.state.crew.role}</p>
                                        <p className='name' >{this.state.crew.name}</p>
                                        <h1>{this.state.crew.bio}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}


export default Crew;