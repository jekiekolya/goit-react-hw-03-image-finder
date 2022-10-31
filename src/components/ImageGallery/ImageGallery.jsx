import { List } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ photos }) {
  return (
    <List>
      {photos.map(photo => {
        return (
          <ImageGalleryItem
            key={photo.id.toString()}
            url={photo.webformatURL}
            name={photo.tags}
          />
        );
      })}
    </List>
  );
}
