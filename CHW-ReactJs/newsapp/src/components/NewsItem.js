import React, { Component } from 'react'
import './NewsItem.css'

export default class NewsItem extends Component {
  render() {

    let { title, description, imageUrl, url, author, time ,source} = this.props


    return (
      <div>
        {/* We pass style as an object */}

        <div className="card  " style={{ width: '18rem' }}>
          <span className='badge'>{source}</span>
          <img src={imageUrl ? imageUrl : "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"} className="card-img-top" alt=' Error' />

          <div className="card-body">

            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p>
              <small style={{ color: "red" }} className="card-text author"> <strong>{author}</strong>  {time}   </small>
            </p>
            {/* <p>
                <small style={{color:"red"}} className="card-text author">  </small>

                </p> */}

            <a href={url} rel="noreferrer" target="_blank" className="btn btn-primary btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
