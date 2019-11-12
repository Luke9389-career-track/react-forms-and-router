import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSpecificCharacter } from '../services/airbenderApi';

export default class DetailView extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  state = {
    name: '',
    image: '',
    gender: '',
    hair: '',
    affiliation: ''
  };

  componentDidMount() {
    getSpecificCharacter(this.props.match.params.id)
      .then(res => {
        return res;
      })
      .then(json => {
        this.setState({ name: json.name });
        this.setState({ image: json.photoUrl });
        this.setState({ gender: json.gender });
        this.setState({ hair: json.hair });
        this.setState({ affiliation: json.affiliation });
      });
  }

  render() {
    return (
      <>
        <h1>{`${this.state.name}`}</h1>
        <img src={this.state.image} alt={this.state.name ? this.state.name : null} />
        <p>Gender: {`${this.state.gender}`}</p>
        <p>Hair: {`${this.state.hair}`}</p>
        <p>Affiliation: {`${this.state.affiliation}`}</p>
      </>
    );
  }
}
// name, image, gender, hair, affiliation
