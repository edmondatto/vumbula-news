import React, { Component } from 'react';
import '../styles/App.css';
import Header from "../components/Header";
import NavigationDrawer from "../components/NavigationDrawer";
import NewsArticles from "../components/NewsArticles";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // TODO Add properties to hold data fetched from NewsAPI, and an isLoading boolean
    };
  }

  // TODO Write a function toggleLoading that keeps track of whether the news articles have loaded or not

  // TODO Use a component lifecycle method to fetch news when the application is first loaded

  // TODO Write a function fetchData that fetches News from the NewsAPI using axios depending on the category chosen by the user


  // TODO Write a function performSearch that executes a search operation on the NewsAPI using the axios library

  render() {
    return (
      <React.Fragment>
        <Header/>
        <div className="row">
          <NavigationDrawer />
          <NewsArticles />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
