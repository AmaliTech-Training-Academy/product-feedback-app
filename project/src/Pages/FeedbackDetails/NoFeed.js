import React from 'react'
import err from "../../assets/suggestions/illustration-empty.svg"

const NoFeed = () => {
  return (
    <section className='no-feed'>
        <img src={err} />
        <h1 className='loading'>loading
            <span className='dots-container'>
                <div className='dot '></div>
                <div className='dot'></div>
                <div className='dot'></div>
            </span>
            </h1>
    </section>
  )
}

export default NoFeed