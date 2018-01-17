import React, { Component } from 'react';
import { HuePicker, CirclePicker } from 'react-color';
import {Navbar, NavItem, Icon, Table} from 'react-materialize';
import windowSize from 'react-window-size';
import './App.css';


class App extends Component {
  handleColorChange = (color) => {
    console.log(color.hex);
    console.log(this.props.windowWidth);
  };
  render() {
    return (   
        <div className="App">
          <Navbar brand='IOT Christmas' className="teal darken-4" right>
            <NavItem href='get-started.html'>Getting started</NavItem>
            <NavItem href='components.html'>Components</NavItem>
          </Navbar>

          <Table>
            <thead>
              <tr>
                <th data-field="id">Presets</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><CirclePicker
                width={this.props.windowWidth}px
                height="20px"
                onChangeComplete={ this.handleColorChange } /></td>
              </tr>
            </tbody>
          </Table>

          <Table>
            <thead>
              <tr>
                <th data-field="id">Custom Colors</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>            
                <HuePicker
                width={this.props.windowWidth}px
                height="20px"
                onChangeComplete={ this.handleColorChange } /></td>
              </tr>
            </tbody>
          </Table>
        </div>
    );
  }
}

export default windowSize(App);