import { Item, Img } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ url, name }) {
  return (
    <Item>
      <Img src={url} alt={name} />
    </Item>
  );
}
