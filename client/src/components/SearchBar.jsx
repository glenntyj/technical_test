import { Input } from 'rsuite';

const SearchBar = ({ data, onSearch }) => {

  const handleSearch = (search) => {
    const results = data.filter((item) =>
      Object.values(item).some((value) => value.toString().toLowerCase().includes(search.toLowerCase()))
    );
    onSearch(results);
  };

  return (
    <Input
      style={{width:224}}
      onChange={(search)=>handleSearch(search)}
      placeholder="Search..."
    />
  );
};

export default SearchBar;
