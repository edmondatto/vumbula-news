import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import NewsArticle from "./NewsArticle";
import PropTypes from 'prop-types';

class NewsArticles extends Component {
  render(){
    return(
      <div className="col-md-9">
        <div className="container" id="news-content">
          <SearchBar />
          <NewsArticle />
        </div>
      </div>
    );
  }
}

NewsArticles.propTypes = {

};

export default NewsArticles;