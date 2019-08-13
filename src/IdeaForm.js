import React, {Component} from 'react';
import './IdeaForm.css'

class IdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  handleClick = (e) => {
    const newIdea = {
      id: Date.now(),
      ...this.state
    }
    e.preventDefault();
    this.props.addIdea(newIdea);
    this.setState({
      title: "",
      description: ""
    })
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={(e) => this.handleChange(e)}/>
        <input type="text" placeholder="Description" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)}/>
        <button onClick={(e) => this.handleClick(e)}>Add Idea</button>
      </form>
    )
  }
}

export default IdeaForm