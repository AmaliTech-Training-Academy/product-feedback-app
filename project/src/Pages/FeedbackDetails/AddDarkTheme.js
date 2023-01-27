import React from 'react'
import './FeedbackDetails.css'

const AddDarkTheme = () => {
  return (
    <section className=' dark-theme '>
    <button className='increase-theme '>
        <img src='./assets/shared/icon-arrow-up.svg' className='up-arrow'/>
        <p className='number'>99</p>
    </button>
    <div className='theme-decription'>
        <h3 className='card-title'>Add a dark theme option</h3>
        <p className='body-1 card-text'>It would help people with light sensitivities and who prefer dark mode.</p>
        <button className='feature-button'>Feature</button>
    </div>
    <div className='comment-tag '>
        <img src='./assets/shared/icon-comments.svg' />
        <span>4</span>
    </div>
</section>
  )
}

export default AddDarkTheme