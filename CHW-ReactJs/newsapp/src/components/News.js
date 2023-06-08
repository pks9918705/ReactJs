import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import PropTypes from 'prop-types'
import './News.css'; // Import the CSS file

// GMT toGMTstring
// put author name on the lower part of card
//    u can use batch to show the source : z-inndex and shift the badge to left
//TODO  use a common function to get the next page , prev page and first-time load page
//TODO Add a search box for query ...if query not found then display "Not found"
//TODO top healdines from general category and other categories
//TODO read about the lifecycle of the component
//TODO Infinite scrolling








export default class News extends Component {

    static defaultProps = {
        country:"in",
        pageSize:8,
        category: 'genral',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor(props) {
        super(props)
        console.log('this is News constructor');
        //state are changable but props are read only
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        //jab bhi news.js call hoga toh hm Title change krnge
         function capitalizeFirstLetter(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
          }
        document.title=capitalizeFirstLetter(this.props.category)


    }

    async componentDidMount() {
        console.log('cdm');
     
    // let url=`https://newsapi.org/v2/top-headlines?&apiKey=2355bf1c286343348af606a12119fd83=1&pageSize=10`
     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2355bf1c286343348af606a12119fd83`
        let data = await fetch(url)
        let parsedData = await data.json(data)
        console.log(parsedData)
        this.setState({ articles: parsedData.articles,
        totalResults:parsedData.totalResults,
         
     })

    }

    handleNextBtn = async () => {
        console.log('next is clicked');

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2355bf1c286343348af606a12119fd83&page=${this.state.page + 1}&pageSize=10`

        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json(data)
        // console.log(parsedData)


        this.setState(
            {
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false

            }
        )
          
    }
    handlePrevBtn = async () => {
        console.log('prev is clicked');

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2355bf1c286343348af606a12119fd83&page=${this.state.page - 1}&pageSize=10`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json(data)
        // console.log(parsedData)


        this.setState(
            {
                page: this.state.page - 1,
                articles: parsedData.articles,
                loading: false
            }
        )

    }

    render() {
        return (
            <div className='container my-3 text-center'>
               

                {this.state.loading && <Loader/>}

                <div className='container d-flex justify-content-between'>
                    <button   disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevBtn}>&larr; Prev</button>

                    <h1 className='text-center'>Today's Top News {`(${this.state.totalResults})`}</h1>

                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-dark" onClick={this.handleNextBtn}>Next &rarr;</button>

                </div>


                <div className="row my-5 ">
                    {this.state.articles.map((article) => {

                        return <div className="col-md-4 my-3  ">
                            <NewsItem key={article.url} title={article.title?article.title.slice(0, 45):"Blank hai bhai"} description={article.content?article.content.slice(0, 45):"Blank hai bhai"} imageUrl={article.urlToImage} url={article.url} author={article.author} time={(new Date(article.publishedAt)).toUTCString()} source={article.source.name}/>

                        </div>
                    })}


                </div>


            </div>
        )
    }
}
