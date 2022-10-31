import {
  Header,
  Form,
  SearchButton,
  ButtonLabel,
  InputField,
} from './Searchbar.styled';

export default function Searchbar({ handelSubmit }) {
  return (
    <Header>
      <Form onSubmit={handelSubmit}>
        <SearchButton type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </SearchButton>

        <InputField
          name="query"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
}
