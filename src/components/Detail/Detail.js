import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ match }) => {
  const { _id } = match.params;

  return (
    <h1>Detail {_id}</h1>
  );
};

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      _id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Detail;
