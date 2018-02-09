import React from 'react';
import PropTypes from 'prop-types';


const Credits = (props) =>

  <div className="container mt-5">
    <div className="row">
      <div className="col align-self-end text-center">
        <p className="credits">
          Built with ❤️ by <a href={`https://twitter.com/${props.authorTwitterHandle}`} target="_blank">{props.authorName} </a>
          and powered by <a href="https://newsapi.org"> NewsAPI</a>
        </p>
      </div>
    </div>
  </div>;

Credits.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorTwitterHandle: PropTypes.string.isRequired
};

export default Credits;