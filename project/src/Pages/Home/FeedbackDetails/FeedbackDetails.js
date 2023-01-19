import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
import './FeedbackDetails.css'
import AddDarkTheme from './AddDarkTheme';


const FeedbackDetails = () => {
  return (
    <main>
        <section className='navigation'>
            
            <div className='back'>
                <img src='./assets/shared/icon-arrow-left.svg'/>
               <span className='h4'>
                  Go Back
               </span>
            </div>
            <button className='btn btn-primary button-text edit-button'>Edit Feedback</button>
         </section>

        {/* <section className='card dark-theme '>
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
        </section> */}

        <AddDarkTheme/>

        <section className='comment card'></section>

        <form className='card add-comment'>
           <div class="card-body">
              <label for="add-comment" class="form-label"><h3>Add comment</h3></label>
              <textarea type="text" class="form-control body-2" id="add-comment" placeholder="Type your comment here" 
              max='250'
              min = "200"
              step='250'/>
           </div>
           <div className='share-comment card-body body-2'>
            <p className='body-2'>250 Characters left</p>
            <button type="submit" className='btn post-comment button-text'>Post Comment</button>
           </div>
        </form>
       
    </main>
    
  )
}

export default FeedbackDetails