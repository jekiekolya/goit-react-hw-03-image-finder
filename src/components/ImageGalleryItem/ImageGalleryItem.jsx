import PropTypes from 'prop-types';

import { Item, Img } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ url, name }) {
  return (
    <Item>
      <Img src={url} alt={name} />
    </Item>
  );
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
