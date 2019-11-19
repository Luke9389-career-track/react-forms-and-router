import React from 'react';
import PropTypes from 'prop-types';
import styles from './Deck.css';

function Deck({ title, children }) {

  return (
    <section>
      <header>
        <h2>{title}</h2>
      </header>
      <div className={`${styles.Deck}`}>
        {children}
      </div>
      <span className={styles.arrow}>➭</span>
    </section>
  );
}

Deck.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Deck;
