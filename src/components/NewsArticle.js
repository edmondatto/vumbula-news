import React from 'react';
import PropTypes from 'prop-types';

// TODO Use props to dynamically render an image, article title, author, description, external link and source

const NewsArticle = props =>
  <div className="card card-outline-primary mb-3">
    <div className="card-block">
      <div className="row">
        <div className="col-md-3 text-right">
          <img src="https://placeimg.com/640/480/animals " width="100%" height="auto"/>
        </div>
        <div className="col-md-9">
          <h4 className="article-title">
            Vumbula React Breaks Records
          </h4>

          <p className="article-author">
            By Edmond Atto & John Kagga
          </p>

          <p className="article-body">
            The new React book titled Vumbula React has sealed its place in history by inspiring
            a new crop of developers.
            <span><a href="#" target="_blank"> Read more...</a></span>
          </p>
          <span className="article-source"><strong>SOURCE:</strong> Tech News </span>
        </div>
      </div>
    </div>
  </div>;

NewsArticle.propTypes = {

};

export default NewsArticle;