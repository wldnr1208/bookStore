import { useState } from "react";
import styled from "@emotion/styled";
import Button from "@/components/atoms/Button";

interface BookSearchProps {
  onSearch: (title: string, author: string) => void;
}

const BookSearch = ({ onSearch }: BookSearchProps) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSearch = () => {
    onSearch(title, author);
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="제목으로 검색"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="저자로 검색"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Button onClick={handleSearch}>검색</Button>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export default BookSearch;
