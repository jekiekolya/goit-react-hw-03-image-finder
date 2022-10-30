// import BsSearch from 'react-icons/bs';

import {
  Header,
  Form,
  SearchButton,
  ButtonLabel,
  InputField,
} from './Searchbar.styled';

export default function Searchbar() {
  return (
    <Header>
      {/* <BsSearch /> */}
      <Form>
        <SearchButton type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </SearchButton>

        <InputField
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
}
