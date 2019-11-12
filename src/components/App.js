import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CharacterList from '../containers/CharacterList';
import DetailView from '../containers/DetailView';
import Home from '../containers/Home';


export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list/:name" component={CharacterList} />
        <Route path="/detail/:id" component={DetailView} />
        <Route path="/" render={()=> <h1>Not Found</h1>} />
      </Switch>
      <Footer />
    </Router>
  );
}
