import React, { Component } from "react";

// input -> liked: true/false
// output -> raise onClick event and toggle the liked

// <i className="bi bi-heart"></i>
// <i className="bi bi-heart-fill"></i>

export default class Like extends Component {
  render() {
    let classes = "bi bi-heart";
    if(this.props.liked) classes += '-fill'
    return (
        <i onClick={this.props.onClick} style={{cursor: 'pointer'}} className={classes}></i>
    );
  }
}
