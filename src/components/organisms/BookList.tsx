import { useState } from "react";
import styled from "@emotion/styled";
import BookCard from "../molecules/BookCard";
import Pagination from "../molecules/Pagination";
import { useBooks } from "@/api/books";

const BookList = () => {
  const [page, setPage] = useState(1);
  const { data: books, isLoading, error } = useBooks(page);

  if (isLoading) return <LoadingText>로딩 중...</LoadingText>;
  if (error) return <ErrorText>책 목록을 불러오는 데 실패했습니다.</ErrorText>;

  return (
    <ListContainer>
      <GridLayout>
        {books?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </GridLayout>
      <Pagination currentPage={page} onPageChange={setPage} />
    </ListContainer>
  );
};

const ListContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`;

const LoadingText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: 1.1rem;
  color: #666;
`;

const ErrorText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: 1.1rem;
  color: #ff4444;
  background-color: #fff1f1;
  border-radius: 8px;
  padding: 20px;
`;

export default BookList;
