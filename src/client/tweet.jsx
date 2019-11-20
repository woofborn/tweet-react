import React from 'react';
import ReactDOM from 'react-dom';


class Tweet extends React.Component {
  render() {


    return (
      <div class = "jumbotron">
        <img src = {this.props.pic}/>
        <p> username:
        {this.props.name} </p>
        <p> tweet:
        {this.props.text} </p>


      </div>

    );
  }
}

export default Tweet;