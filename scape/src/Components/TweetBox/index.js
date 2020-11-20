import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'


const TweetBox = () => {
  const [searchTerm, setsearchTerm] = useState('')
  const [tweets, setTweets] = useState([])

  const { register, handleSubmit, errors } = useForm()

  const config = { headers: {
    "Allowed":"*",
    "Access-Control-Allow-Origin": "localhost:3000",//"https://goalgetter.netlify.app",
    "Access-Control-Request-Headers": "origin, x-requested-with",
    "Access-Control-Request-Method": "POST"
  } }

  const handleTermChange = e => { setsearchTerm(e.target.value) }


  const onSubmit = data => {
    data = {...data, completed:false}
    axios.post(`https://api.twitter.com/2/tweets/search/recent?query=${searchTerm}`)//, config)
    .then(res => {
      setTweets(res.data)
    })
    .catch(err => { console.log(err) })
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
