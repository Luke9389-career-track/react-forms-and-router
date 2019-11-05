import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ img, name, species }) => {

  return (
    <dl className={`${styles.Character}`}>
      <div id={`${styles.imgWrapper}`}>
        <img src={'../../../data/' + img} />
      </div>
      <div id={`${styles.txtWrapper}`}>
        <dt>Name</dt>
        <dd>{name}</dd>

        <dt>Species</dt>
        <dd>{species}</dd>
      </div>
    </dl>
  );
};

Character.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};

export default Character;
