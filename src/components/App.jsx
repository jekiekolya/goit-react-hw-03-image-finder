import React, { Component } from 'react';
import { Box } from './Box';

export class App extends Component {
  state = {};

  render() {
    return <Box bg="mainBg" color="text" padding="30px"></Box>;
  }
}
