import { Component } from "react";
import './Moviecard.css'

class Moviecard extends Component {
    
 
    // handleFav = () => {
    //     if (this.state.favourite) {

    //         this.setState({ favourite: false })
           
    //     }
    //     else {
    //         this.setState({ favourite: true })
            

    //     }
    // }
    // handleAddToCart = () => {
    //     if (this.state.addToCart) {

    //         this.setState({ addToCart: false })
           
    //     }
    //     else {
    //         this.setState({ addToCart: true })
            

    //     }
    // }

    render() {

        

         console.log('Props',this.props);

         //exracting Movie and starHandler from props
         const {movie,starHandler,addToCartHandler,addToFavHandler } = this.props
         console.log('this is movie',movie);
         

         //extracting property from movie
         const {title,plot,price,rating,stars,addToCart,favourite}=movie

          

 
        
        // the above is done so that u dont have to use "this.state.title" 

        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src="https://c8.alamy.com/comp/FXEAGB/avengers-assemble-2012-directed-by-joss-whedon-and-starring-robert-FXEAGB.jpg" />


                    </div>
                    <div className="right">
                        <div className="title">{ title}</div>
                        <div className="plot"> {plot}</div>
                        <div className="price">{price}</div>
                        <div className="footer">
                            <div className="rating">{rating}
                            </div>
                            <div className="star-dis">
                                <img alt="decrease" src="https://t3.ftcdn.net/jpg/04/22/93/56/240_F_422935625_gTnXZMO6EZZgjOvFDVNMfUFosiMNIppp.jpg " className="str-btn" onClick={() => {  starHandler( movie,"minus") }} />

                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars" />

                                <img alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png " className="str-btn" onClick={() => { starHandler( movie,"plus")   }} />
                                <span>{stars}</span>
                            </div>
                            <div className={ ! favourite ? "un-favourite-btn btn":"favourite-btn btn"}   onClick={ ()=>{addToFavHandler(movie)}} > { favourite ? "Unfavourite" : "Favourite"}
                            </div>
                            <div className={ ! addToCart ? "un-favourite-btn btn":"favourite-btn btn"} onClick={()=>{addToCartHandler(movie)}} > { addToCart ? "Remove" : "Add to Cart"}
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



        