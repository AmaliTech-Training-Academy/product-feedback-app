import React from 'react'
import {
    Container
} from './EmptyCommentStyles'

function EmptyComment() {
  return (
    <Container>
        <img src='/assets/suggestions/illustration-empty.svg' />
        <span className='h1'>Sorry, there are no comments!</span>
    </Container>
  )
}

export default EmptyComment