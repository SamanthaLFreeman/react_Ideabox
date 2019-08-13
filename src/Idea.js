import React from 'react'
import './Idea.css'

const Idea = ({idea}) => {
  return (
    <section className="card">
      <h2>{idea.title}</h2>
      <p>{idea.description}</p>
    </section>
  )
}

export default Idea