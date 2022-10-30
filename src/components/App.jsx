import React, { Component } from 'react';

import { fetchPhoto } from 'api/fetch-photo';
import { Searchbar } from './index';

import { Box } from './App.styled';

export class App extends Component {
  state = {
    photos: [],
  };

  async componentDidMount() {
    const page = 1;
    const q = 'cat';
    const response = await fetchPhoto(q, page);
    console.log(response.data.hits);
  }

  render() {
    return (
      <Box>
        <Searchbar />
      </Box>
    );
  }
}
