import React from 'react';
import ReactDOM from 'react-dom';
import tweets from './tweets.js'
import Tweet from './tweet.jsx'


class App extends React.Component {
  render() {

    console.log("AAAAAAAAAAAA")
    console.log(tweets[0].entities.media[0]["media_url"])

    let tweetItems = tweets.map(item => {
        return <Tweet name={item["user"]["name"]} text = {item["text"]} pic = {item["user"]["profile_image_url"]}/>
                    });
    console.log(tweetItems)




    return (
      <div>
        {tweetItems}
      </div>

    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");