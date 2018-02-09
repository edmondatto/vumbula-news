import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Credits from "./Credits";

class NavigationDrawer extends Component {

  // TODO Add an OnClick Event handler that triggers data fetching from NewsAPI and toggles IsLoading in App.js

  render(){
    return(
      <aside className="col-md-3">
        <div className="container">
          <h3 id="aside-header">Choose a category</h3>
        </div>
        <nav className="nav flex-column">
          <a
            className="nav-link"
            name="general"
            href="#"
            // TODO Add an onClick attribute that triggers the OnClick event handler
          >
            General
          </a>
          <a
            className="nav-link"
            href="#"
            name="business"
            // TODO Add an onClick attribute that triggers the OnClick event handler
          >
            Business
          </a>
          <a
            className="nav-link"
            href="#"
            name="entertainment"
            // TODO Add an onClick attribute that triggers the OnClick event handler
          >
            Entertainment
          </a>
          <a
            className="nav-link"
            href="#"
            name="health"
            // TODO Add an onClick attribute that triggers the OnClick event handler
          >
            Health
          </a>
          <a
            className="nav-link"
            href="#"
            name="science"
            // TODO Add an onClick attribute that triggers the OnClick event handler
          >
            Science
          </a>
          <a
            className="nav-link"
            href="#"
            name="sports"
            // TODO Add an onClick attribute that triggers the OnClick event handler
          >
            Sports
          </a>
          <a
            className="nav-link"
            href="#"
            name="technology"
            // TODO Add an onClick attribute that triggers the OnClick event handler
          >
            Technology
          </a>
        </nav>
        <Credits authorName="Edmond Atto" authorTwitterHandle="edmondatto"/>
      </aside>
    );
  }
}

NavigationDrawer.propTypes = {
  // TODO Add propTypes for the NAvigationDrawer Component
};

export default NavigationDrawer;
