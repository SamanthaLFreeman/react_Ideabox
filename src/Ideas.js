import React from 'react'
import Idea from './Idea'
import './Ideas.css'

const Ideas = (props) => {
  const ideaCards = props.ideas.map(idea => <Idea idea={idea} key={idea.id}/>)
  return (
    <main className="card-container">
      {ideaCards}
    </main>
  )
}

export default Ideas