import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ThreeDots } from 'react-loader-spinner';

import { fetchPhoto } from 'api/fetch-photo';
import { Searchbar, ImageGallery, Button } from './index';

import { Box } from './Box';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    photos: [],
    totalItems: 0,
    spinner: false,
  };

  // componentDidMount() {
  //   fetchPhoto(this.state.query, this.state.page)
  //     .then(r => {
  //       this.setState(() => {
  //         return {
  //           photos: [...this.state.photos, ...r.data.hits],
  //           totalItems: r.data.total,
  //         };
  //       });
  //     })
  //     .catch(error => {
  //       Notify.failure(`We have a problem!`);
  //     });
  // }

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      fetchPhoto(this.state.query, this.state.page)
        .then(r => {
          if (r.data.hits.length === 0) {
            Notify.failure(`We didn't find anything!`);
          }
          this.setState(prevState => {
            return {
              photos: [...prevState.photos, ...r.data.hits],
              totalItems: r.data.total,
              spinner: false,
            };
          });
        })
        .catch(error => {
          Notify.failure(`We have a problem!`);
        });
    }
  }

  handelSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.query.value;

    if (searchQuery !== this.state.query) {
      this.setState(() => {
        return {
          page: 1,
          query: searchQuery,
          photos: [],
          totalItems: 0,
          spinner: true,
        };
      });
    } else {
      Notify.failure(`Put something else!`);
    }
  };

  loadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1, spinner: true };
    });
  };

  render() {
    const { handelSubmit, loadMore } = this;
    const { photos, totalItems, page, spinner } = this.state;

    return (
      <Container>
        <Searchbar handelSubmit={handelSubmit} />
        <ImageGallery photos={photos} />
        {totalItems > page * 12 && !spinner && (
          <Box display="flex" justifyContent="center">
            <Button labelName="Load more" handleClick={loadMore} />
          </Box>
        )}

        {spinner && (
          <Box display="flex" justifyContent="center">
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#3f51b5"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              visible={true}
            />
          </Box>
        )}
      </Container>
    );
  }
}
