import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCharacter } from '../services/airbenderApi';

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

  render() {
    return (
      <Detail />
    );
  }
}