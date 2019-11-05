import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Deck from '../Deck/Deck';

function DeckOfCards({ title, items }) {
  console.log(items);
  return (
    <>
      <Deck title={title}>
        {items.map(({ _id, name, photoUrl }) => (
          <Card _id={_id} key={_id} title={name ? name : _id} image={photoUrl}/>
        ))}
      </Deck>
    </>
  );
}

DeckOfCards.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object)
};

export default DeckOfCards;




