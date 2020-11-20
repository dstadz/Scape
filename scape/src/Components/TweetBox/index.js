import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

/**
 * Stream statuses filtered by keyword
 * number of tweets per second depends on topic popularity
 **/
client.stream('statuses/filter', {track: 'twitter'},  function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});

const TweetBox = () => {
  const [searchTerm, setsearchTerm] = useState('')
  const [tweets, setTweets] = useState([])

  const { register, handleSubmit, errors } = useForm()



  const config = {
    headers: {
      "Allowed":"*",
      "Access-Control-Allow-Origin": "localhost:3000",
      // "Access-Control-Request-Headers": "origin, x-requested-with",
      // "Access-Control-Request-Method": "POST",
      auth: {
        COMSUMER_KEY: process.env.REACT_APP_TWITTER_API_KEY, // This is the client_id
        CONSUMER_SECRET: process.env.REACT_APP_TWITTER_API_KEY_SECRET,
        TOKEN: process.env.REACT_APP_TWITTER_ACCESS_TOKEN,
        TOKEN_SECRET: process.env.REACT_APP_TWITTER_ACCESS_TOKEN_SECRET
      },
    }
  };


  const handleTermChange = e => { setsearchTerm(e.target.value) }


  const onSubmit = data => {
  //   data = {...data, completed:false}
  //   axios.get(`https://api.twitter.com/2/tweets/search/recent?query=${searchTerm}`)//, config)
  //   .then(res => {
  //     setTweets(res.data)
  //   })
  //   .catch(err => { console.log(err) })
  // }

//   axios.request({
//     url: "/oauth/token",
//     method: "get",
//     baseURL: `https://api.twitter.com/2/tweets/search/recent?query=${searchTerm}`,
//     auth: {
//       COMSUMER_KEY: process.env.REACT_APP_TWITTER_API_KEY, // This is the client_id
//       CONSUMER_SECRET: process.env.REACT_APP_TWITTER_API_KEY_SECRET,
//       TOKEN: process.env.REACT_APP_TWITTER_ACCESS_TOKEN,
//       TOKEN_SECRET: process.env.REACT_APP_TWITTER_ACCESS_TOKEN_SECRET
//     },
//     data: {
//       "grant_type": "client_credentials",
//       "scope": "public"
//     }
//   })
//   .then(res => { console.log(res.data) })
//   .catch(err => { console.log(err) })
// }





    const customHeaders = () => {


      axios
        .get(
          `https://api.twitter.com/2/tweets/search/recent?query=${searchTerm}`,
          config
        )
        .then(res => { console.log(res.data) })
        .catch(err => { console.log(err) })
    }
    customHeaders()
  }






  return (
    <div>
    <h6> Tell us where you want to go! </h6>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text'
        name="searchTerm"
        ref={register}
        value={searchTerm}
        onChange={handleTermChange}
        />
      
      <input type="submit" />

    </form>

      {tweets &&
      <ul>
        {tweets.map(t => (
          <li key={t}>
            {t.id}: {t.text}
          </li>
        ))}
      </ul>}
    </div>
  )
}

export default TweetBox
