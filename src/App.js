import React, { Component } from 'react';
import './App.css';
import Header from './Components/header'
import ListItem from './Components/blogListItem'
import { Carousel } from 'react-responsive-carousel';
import {data} from './data/testData'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header className="App-header"></Header>
        <article className="App-intro">
          <div>
          <h4></h4>
          <ListItem content={data} tagName="featured"/>
          </div>
          <div>
          <h4></h4>
          <ListItem content={data} tagName="headline"/>
          </div>
        </article>
      </div>
    );
  }
}

export default App;
