

    import React, { Component } from 'react'
    import { useState } from 'react';
    import DisplayRover from './roverDisplay'
    import Calendar from 'react-calendar';
    import 'react-calendar/dist/Calendar.css';
    import './Roverdatas.css';
    import './designs.scss';
    //import './images';

    class RoverData extends Component {
        constructor(props){
           super(props);
           this.onDropdownSelected = this.onDropdownSelected.bind(this);
           this.onCameraDropdownSelected = this.onCameraDropdownSelected.bind(this);
           this.fetchimagePath= this.fetchimagePath(this);
          
        }
        state = {
        roversdata: [],currentRover: [],cameras:[], currentRover :'',landingDate: new Date('2010-02-10'),
        selectedDate: '',
        showCalender: false
        }

    componentDidMount() {
         var API_key = "ZQjfcpCNtznB6aNuP99C5vaW6mRouJsIqVjGkuZP";
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key='+API_key)
        .then(res => res.json())
        .then((dat) => {
          console.log(dat.rovers)
          this.setState({roversdata: dat.rovers})
          console.log(this.state.roversdata)
        })
        .catch(console.log)
      }

    createSelectItems() {
     let items = [];         
     for (let i = 0; i < this.state.roversdata.length; i++) { 
       if (this.state.roversdata.length===0){
         console.log("-------------stalling----------------")
       }
          if (this.state.roversdata.length!==0){  

            console.log(this.state.roversdata[i].name);      
              
            items.push(<option key={i} value={this.state.roversdata[i].name}>{this.state.roversdata[i].name}</option>); 
          }
     }
     return items;
    }  

    onCameraDropdownSelected(){
    let items = [];         
     for (let i = 0; i < this.state.roversdata.length; i++) { 
       if (this.state.roversdata.length===0){
         console.log("-------------stalling----------------")
       }
          if (this.state.roversdata.length!==0){  

            console.log(this.state.roversdata[i].name);      
              
            items.push(this.state.roversdata[i].name); 
          }
     }
     return items;
    }
     fetchimagePath(src){
            console.log(src+".jpg")
            //return 
          }
  
    onDropdownSelected(e) {
      this.setState({currentRover: e}) 
      let temp=[];
      let cams = this.state.roversdata.filter(x=>x.name ==e)[0].cameras;
      let date = this.state.roversdata.filter(x=>x.name ==e)[0].landing_date;
      console.log(date);
      this.setState({landingDate: new Date(date)}) 
      this.setState({showCalender:true})
      this.setState({cameras: cams});
    }
    
    /*componentDidUpdate(){
      var date = this.state.landingDate;
      var ISODate = date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate();
      this.setState({selectedDate:ISODate});
      console.log(ISODate);
    }*/

    render() {
        if (this.state.roversdata.length===0){
            return null;
        }
        const isSelected = this.state.showCalender;
        let cal;
        if (isSelected) {
          cal = <>
          <div style={{margin: 'auto',width:'50%'}}>
          <Calendar onChange={(e)=>{console.log();
            var date = this.state.landingDate;
            var ISODate = date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate();
            this.setState({selectedDate:ISODate});
            this.setState({landingDate:e}) }}
            defaultActiveStartDate = {this.state.landingDate}
            />
            </div>
            <DisplayRover roverdata={this.state.cameras} currentrover ={this.state.currentRover} dateSelected={this.state.selectedDate}/></>;
        }
        return (
          <div class="rovercls">
            <div>
            <div style={{display:'flex', margin: '33px 0px 0px 50px', overflowY:'auto'}}>
            {this.onCameraDropdownSelected().map((d,index) => (
                <div>
                <img src = {require('./images/'+d+'.jpg').default}  key = {index} height="150px" width="150px"   style={{padding:'40px', borderRadius: '50%'/*, height:'auto',width:'100%',maxWidth:'200px'*/}}>
                </img>
                <div class="btnn" key = {index} value= {d} style={{padding: '20px',borderRadius: '50%', margin: '1% 2% 3% 5%'}} 
                onClick={() => {this.onDropdownSelected(d)}}>{d}</div>
                </div>
            ))}
            </div>
            </div>
            
          
            <div showCal={isSelected}>
            {cal}
            </div >
          </div>
            
        )
      }
    }
    export default RoverData