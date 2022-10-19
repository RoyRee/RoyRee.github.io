import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Homepage from 'components/Homepage';
import AOS from 'aos';
import { isMobile } from 'react-device-detect';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import Aboutus from 'pages/Aboutus';
import Contact from 'pages/Contact';
import News from 'pages/News';
import 'aos/dist/aos.css';
import './common.css';
import './fonts.css';

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      AOS.init({
        offset: isMobile ? 10 : 100,
      });
      AOS.refresh();
    }, 1500);
  }

  render() {
    return (
      <Router hashType="noslash" basename={process.env.BASE_PATH}>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Homepage}>
          </Route>
          <Route exact path="/news" component={News}>
          </Route>
          <Route exact path="/aboutus" component={Aboutus}>
          </Route>
          <Route exact path="/contact" component={Contact}>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App;
