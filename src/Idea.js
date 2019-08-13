import React from 'react'
import './Idea.css'

const Idea = ({idea, deleteIdea}) => {
  return (
    <section className="card">
      <h2>{idea.title}</h2>
      <p>{idea.description}</p>
      <button onClick={() => deleteIdea(idea.id)}>delete</button>
    </section>
  )
}

export default Idea