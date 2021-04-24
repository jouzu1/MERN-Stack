import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../src/Pages/Home';
import User from '../src/Pages/User';
import About from '../src/Pages/About';
import NavigationBar from '../src/Component/NavigationBar';
import Layout from '../src/Component/Layout';

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Layout>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/user" component={User}></Route>
          <Route exact path="/about" component={About}></Route>
        </Layout>
      </Router>
    </>
  );
}

export default App;
