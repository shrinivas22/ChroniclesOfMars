//https://api.nasa.gov/planetary/apod?api_key=U3ixc9Y71YQaeFNlzK997zd73mujRMcwunlj630s
    import React, { Component } from 'react'
    import Display from './display'
    import './displaydata.css';

    class AppData extends Component {
        state = {
        dailydata: []
      }
     componentDidMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=U3ixc9Y71YQaeFNlzK997zd73mujRMcwunlj630s')
        .then(res => res.json())
        .then((data) => {
          console.log(data)
          this.setState({ dailydata: data })
        })
        .catch(console.log)
      }
      render() {
        return (
          <div class='displaycls'>
          <Display data={this.state.dailydata} />
          </div>
        )
      }
    }
    export default AppData
