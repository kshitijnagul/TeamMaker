import React, { Component } from 'react';
import './App.css';

import Team from './Team';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      actualTitle: '',
      name: '',
      teamName: [],
      title2: '',
      actualTitle2: '',
      name2: '',
      teamName2: []

    }
  }

  changeHandler = (event) => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  }

  submitHandler = () => {
    const a = this.state.teamName;
    a.push(this.state.name);
    this.setState({ teamName: a });
    console.log(this.state.teamName, this.state.name);
  }

  changeHandler2 = (event) => {
    this.setState({ name2: event.target.value });
    console.log(this.state.name2);
  }

  submitHandler2 = () => {
    const a = this.state.teamName2;
    a.push(this.state.name2);
    this.setState({ teamName2: a });
  }

  render() {
    return (
      <div>
        <div className='container '>Team Maker</div>
        <div className='member1'>
          <div style={{ 'margin-top': '20px' }} > Team member</div>
          <input type='text' style={{ 'margin-right': '10px' }} value={this.state.value} onChange={this.changeHandler} placeholder='enter member' />
          <input style={{ 'margin-bottom': '20px' }} onClick={this.submitHandler} type='button' value='save' />
          <br />
          <div > Team Name</div>
          <input type='text' style={{ 'margin-right': '10px' }} onChange={(e) => this.setState({ title: e.target.value })} placeholder='enter Team name' />
          <input type='button' value='save' onClick={() => this.setState({ actualTitle: this.state.title })} />
          <Team title={this.state.actualTitle} teamName={this.state.teamName} />
        </div>
        <div className='member2'>
          <div style={{ 'margin-top': '20px' }}> Team member</div>
          <input style={{ 'margin-right': '10px' }} type='text' onChange={this.changeHandler2} placeholder='enter member' />
          <input style={{ 'margin-bottom': '20px' }} onClick={this.submitHandler2} type='button' value='save' />
          <div > Team Name</div>
          <input type='text' style={{ 'margin-right': '10px' }} onChange={(e) => this.setState({ title2: e.target.value })} placeholder='enter Team name' />
          <input type='button' value='save' onClick={() => this.setState({ actualTitle2: this.state.title2 })} />
          <Team title={this.state.actualTitle2} teamName={this.state.teamName2} />
        </div>
      </div >
    );
  }
}

export default App;
