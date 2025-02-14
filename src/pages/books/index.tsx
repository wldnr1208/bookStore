import BookList from "@/components/organisms/BookList";
import BookSearch from "@/components/organisms/BookSearch";
import { useState } from "react";
import styled from "@emotion/styled";

const BooksPage = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");

  const handleSearch = (title: string, author: string) => {
    setSearchTitle(title);
    setSearchAuthor(author);
  };

  return (
    <MainContainer>
      <h1>📚 책 목록</h1>
      <BookSearch onSearch={handleSearch} />
      <BookList searchTitle={searchTitle} searchAuthor={searchAuthor} />
    </MainContainer>
  );
};

export default BooksPage;

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;
