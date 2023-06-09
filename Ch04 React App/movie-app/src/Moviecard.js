import { Component } from "react";
import './Moviecard.css'

class Moviecard extends Component {
    constructor() {
        //construtor of suoer class is called
        super()
        this.state = {
            title: "The Avangers",
            plot: "Supernatural powers shown in movie",
            price: "Rs. 199",
            rating: 8.9,
            stars: 0,
            favourite: false,
             addToCart: false

        }
        //?below is the code to bind globally
        // this.addStar=this.addStar.bind(this)

    }
    // let numberOfstars=0;
    // increase star handler



    //? function inside class
    addStar = () => {

        //arrow function bind automatically
        // this.state.stars+=0.5;
        // console.log('*** stars',this.state.stars);
        //above re-rendering will not happen

        //form 1- using setState
        // this.setState({
        //     stars: this.state.stars+0.5
        // })
        // this.setState({object})


    }

    starHandler = (str) => {

        // console.log('Clicked');


        // console.log('clicked',str);
        if (str === "plus") {
            if (this.state.stars >= 5) { return }
            //handle plus click
            this.setState((prevState) => {
                return {
                    stars: prevState.stars + 0.5
                }
            })
        }
        else {
            //handle minus click
            if (this.state.stars <= 0) { return }
            this.setState((prevState) => {
                return {
                    stars: prevState.stars - 0.5
                }
            })
        }

    }

    handleFav = () => {
        if (this.state.favourite) {

            this.setState({ favourite: false })
           
        }
        else {
            this.setState({ favourite: true })
            

        }
    }
    handleAddToCart = () => {
        if (this.state.addToCart) {

            this.setState({ addToCart: false })
           
        }
        else {
            this.setState({ addToCart: true })
            

        }
    }

    render() {


        //destructing the object
        const { title, plot, price, rating, stars } = this.state
        // the above is done so that u dont have to use "this.state.title" 

        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src="https://c8.alamy.com/comp/FXEAGB/avengers-assemble-2012-directed-by-joss-whedon-and-starring-robert-FXEAGB.jpg" />


                    </div>
                    <div className="right">
                        <div className="title">{this.state.title}</div>
                        <div className="plot"> {plot}</div>
                        <div className="price">{price}</div>
                        <div className="footer">
                            <div className="rating">{rating}
                            </div>
                            <div className="star-dis">
                                <img alt="decrease" src="https://t3.ftcdn.net/jpg/04/22/93/56/240_F_422935625_gTnXZMO6EZZgjOvFDVNMfUFosiMNIppp.jpg " className="str-btn" onClick={() => { this.starHandler("minus") }} />

                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars" />

                                <img alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png " className="str-btn" onClick={() => { this.starHandler("plus") }} />
                                <span>{stars}</span>
                            </div>
                            <div className={ !this.state.favourite ? "un-favourite-btn btn":"favourite-btn btn"}   onClick={this.handleFav} > {this.state.favourite ? "Unfavourite" : "Favourite"}
                            </div>
                            <div className={ !this.state.addToCart ? "un-favourite-btn btn":"favourite-btn btn"}   onClick={this.handleAddToCart} > {this.state.addToCart ? "Remove" : "Add to Cart"}
                            </div>
                             
                        </div>

                    </div>

                </div>

            </div>

        )

    }
}

export default Moviecard;

//! Binding can be done in 3 ways
// 1. using arrow functions
// 2. using .bind() at the time passing refference
// 3. using .bind() globally in the constructor   


// two ways to use setState
        //form 1- using setState
        // this.setState({
        //     stars: this.state.stars+0.5
        // })
        // this.setState({object})

        //form 2 -using arrow function to set
        // this.setState((prevState)=>{
        //     return {
        //         stars:prevState.stars+0.5
        //     }
        // })



        About.defaultProps={
            name:"Monobaen",
            info:{
                since:1980,
                moto :"crypto is the future"
            }
        }

        export default function App(){
            return <About  />
        }