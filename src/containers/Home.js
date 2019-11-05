import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCharacter } from '../services/airbenderApi';
import DeckOfCards from '../components/DeckOfCards/DeckOfCards';

export default class CharacterList extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    characters: [],
    name: ''
  };

  componentDidMount() {
    getCharacter()
      .then(json => this.setState({ characters: json }));
  }

  handleClickRand = () => {
    getCharacter()
      .then(json => this.setState({ characters: json }));
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push(`/list/${this.state.name}`);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <>
        <DeckOfCards title='Random Character' items={this.state.characters} />
        <button onClick={this.handleClickRand}>New Character</button>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <button>Go</button>
        </form>
      </>
    );
  }
}


