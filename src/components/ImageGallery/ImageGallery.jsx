import PropTypes from 'prop-types';

import { List } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ photos }) {
  return (
    <List>
      {photos.map(photo => {
        return (
          <ImageGalleryItem
            key={photo.id}
            url={photo.webformatURL}
            name={photo.tags}
          />
        );
      })}
    </List>
  );
}

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
