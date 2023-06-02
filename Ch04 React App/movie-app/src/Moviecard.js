import { Component } from "react";

class MovieCard extends Component {
    constructor() {
        //construtor of suoer class is called
        super()
        this.state = {
            title:"The Avangers",
            plot:"Supernatural powers shown in movie",
            price:"Rs. 199",
            rating:8.9
        }

    }

    render() {

        //destructing the object
        const {title,plot,price,rating}=this.state
        // the above is done so that u dont have to use "this.state.title" 

        return (
            <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img alt="poster" src="https://c8.alamy.com/comp/FXEAGB/avengers-assemble-2012-directed-by-joss-whedon-and-starring-robert-FXEAGB.jpg"/>


                </div>
                <div className="right">
                    <div className="title">{this.state.title}</div>
                    <div className="plot"> {this.state.plot}</div>
                    <div className="price">{price}</div>
                    <div className="footer">
                        <div className="rating">{this.state.rating}
                        </div>
                        <div className="star-dis">
                            <img alt="decrease" src="https://t3.ftcdn.net/jpg/04/22/93/56/240_F_422935625_gTnXZMO6EZZgjOvFDVNMfUFosiMNIppp.jpg " className="str-btn"/>

                            <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars"/>

                            <img alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png " className="str-btn"/>
                            <span>0</span>
                        </div>
                        <div className="favourite-btn"> Favourite
                        </div>
                        <div className="cart-btn">Add to Cart
                        </div>
                    </div>

                </div>

            </div>

         </div>

        )
         
    }
}

export default MovieCard;