import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({ title, content, image }) {

  return (
    <Link>
      <div>
        {title && <header><h3>{title}</h3></header>}
        <figure>
          {image && <img src={image} alt={title ? title : null} />}
        </figure>
        {content && <p>{content}</p>}
      </div>
    </Link>

  );
}

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
};

export default Card;
