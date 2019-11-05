import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCharacters, getCharacter } from '../services/airbenderApi';
import DeckOfCards from '../components/DeckOfCards/DeckOfCards';

export default class CharacterList extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        name: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  state = {
    count: 10,
    page: 1,
    characters: []
  };

  componentDidMount() {
    if(this.props.match.params.name) {
      getCharacter(this.props.match.params.name)
        .then(json => this.setState({ characters: json }));
    }
    else {
      getCharacters()
        .then(json => this.setState({ characters: json }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.page !== this.state.page) {
      getCharacters(this.state.count, this.state.page)
        .then(json => this.setState({ characters: json }));
    }
  }

  handleClickNext = () => {
    this.setState(state => {
      return {
        page: state.page + 1
      };
    });
  }

  handleClickPrev = () => {
    this.setState(state => {
      return {
        page: state.page - 1
      };
    });
  }


  render() {
    return (
      <>
        <button onClick={this.handleClickPrev}>PREV PAGE!</button>
        <button onClick={this.handleClickNext}>NEXT PAGE!</button>
        <DeckOfCards title='Characters' items={this.state.characters} />
      </>
    );
  }
}


