import React, {Component} from 'react';

class IdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      id: Date.now()
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  handleClick = (e) => {
    e.preventDefault();
    this.props.addIdea(this.state);
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