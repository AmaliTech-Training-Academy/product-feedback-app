import React from 'react'
import './FeedbackDetails.css'


const FeedbackDetails = () => {
  return (
    <main>
        <section className='navigation'>
            
            <div><img src='./assets/shared/icon-arrow-left.svg'/>
             <span className='h4'>
                Go Back
                </span>
            </div>
            <button className='edit-button'>Edit Feedback</button>
         </section>

        <section className='dark-theme'>
            <button className='increase-theme'>
                <img src='./assets/shared/icon-arrow-up.svg' className='up-arrow'/>
                <p className='number'>99</p>
            </button>
            <div className='theme-decription'>
                <h3 className='title'>Add a dark theme option</h3>
                <p className='body-1'>It would help people with light sensitivities and who prefer dark mode.</p>
                <button className='feature-button'>Feature</button>
            </div>
            <div className='comment'>
                <img src='./assets/shared/icon-comments.svg' />
                <span>4</span>
            </div>
        </section>
       
    </main>
    
  )
}

export default FeedbackDetails