import './UserItem.css';
import React, { Component } from 'react'

export class UserItem extends Component {
  render() {
    let {title1, title2, email, imageUrl} = this.props;
    return (
        
        <div className="card" style={{width: "18rem"}}>
          <div className="contain">
          <img src={imageUrl} class="card-img-top" alt="news"/>
            <h5 className="card-title">{title1} {title2}</h5>
            <p className="card-text">{email}</p>
            <a href={imageUrl} target='_blank' rel="noreferrer" className="btn-sec">Read More</a>
          </div>
        </div>
    )
  }
}

export default UserItem
