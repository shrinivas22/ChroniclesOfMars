

    import React, { Component } from 'react'
    import { useState } from 'react';
    import './designs.scss'
    //import HorizontalGallery from 'react-dynamic-carousel'
    //import DisplayRover from './roverDisplay'
    //import Carousel from 'react-img-carousel';
    //require('react-img-carousel/lib/carousel.css');
    //import Carousel from 'react-img-carousel';
    //import Carousel from 'react-elastic-carousel';
    import Carousel from 'react-bootstrap/Carousel';
    import 'react-calendar/dist/Calendar.css';


    class DisplayRover extends Component {
      constructor(props){
           super(props);
           this.handleClick = this.handleClick.bind(this);
        }
       
        state = {
        imagessdata: [], cameraSelected: false
      }
      handleClick(e) {
        const camera=e;
        console.log(camera);
         var API_key = "U3ixc9Y71YQaeFNlzK997zd73mujRMcwunlj630s";
         var rover = this.props.currentrover;
         var earthDate = this.props.dateSelected;
         console.log(earthDate);
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/'+rover+'/photos?earth_date='+earthDate+'&camera='+camera+'&api_key='+API_key)
        .then(res => res.json())
        .then((dat) => {
          console.log(dat)
          this.setState({imagesdata: dat})
          if (this.state.imagesdata.length !==0){
            this.setState({cameraSelected:true})
          }
          console.log(this.state.imagesdata)
        })
        .catch(console.log)
      }

    //const DisplayRover = ({ roverdata }) => {
        
      render(){
          console.log(this.props.roverdata, this.props.currentrover);
          const isSelected = this.state.cameraSelected;
        let carouseles;
        if (isSelected) {
          carouseles = 
          //<HorizontalGallery tiles=
          <Carousel>
            
            {this.state.imagesdata.photos.map((a,index) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              key = {index} 
              src={a.img_src}
              height='auto'
              width='25%'
            />
          </Carousel.Item>
            ))}
          </Carousel>
          /*<Carousel viewportWidth="400px" cellPadding={ 5 }>
            {this.state.imagesdata.photos.map((a,index) => (
                <img key = {index} src={a.img_src}/>
            ))}
          </Carousel>*/
          /*elementWidth={250}
          fadeDistance={100}
          minPadding={20}
          />*/
          ;
        } 
      return (
        <div>
          <center><h1>Cameras</h1></center>
          
            <div>
              <div style={{display: 'flex' , padding: '20px'}} >
                {this.props.roverdata.map((d,index) => (
                <div key = {index} style={{padding: '20px'}} >
                <div class="btnn"  value= {d.name} onClick={() => this.handleClick(d.name)}>{d.name}</div>
                </div>
                ))}
              </div>
              <div isSelectedCam={isSelected}>
            {carouseles}
          </div>
            </div>
          
          
          
        </div>
      )
          }
   // };
  }
    export default DisplayRover
    //<!-- <img src={d.hdurl} width="50%" height="50%"></img> -->