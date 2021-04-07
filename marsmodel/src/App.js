//import './App.css';

import React from 'react';
import './App.css';

import AppData from './components/apiService';
import EsriMap from './components/esriMap';
import RoverData from './components/apiServiceRover';
//import  './warpspeed.min.js';
import WarpSpeed from './warpspeed'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import TopNavbar from './nav/top-navbar.component';

//setDefaultOptions({ css: true });

class Apps extends React.PureComponent {
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "./warpspeed.js";
    script.async = true;
    script.type = 'text/javascript';
    script.innerHTML = "document.write('var x=new WarpSpeed('canvas')')";
    //document.body.appendChild(script);
    const x=new WarpSpeed("canvas");
}

  render() {

    const options = {
      url: 'https://js.arcgis.com/4.18/'
    };
    

   /*<div >
        
        <div className="App">
        <AppData></AppData>
        <RoverData></RoverData>
        <EsriMap></EsriMap>
        </div>
      </div>
    );*/ 
    return (
       <Router>
        <div id="router-container">
          <canvas id="canvas" class="canvcls" style={{height : '100%',width : '100%',position:'absolute'}}></canvas>
          <TopNavbar id="top-navbar"/> 
            <Switch>
              <Route path="/" exact component={AppData} />
              <Route path="/roverData" component={RoverData} />
              <Route path="/marsMap" exact component={EsriMap} />
            </Switch>
        </div>
      </Router>
    );
      
  }
}

export default Apps;