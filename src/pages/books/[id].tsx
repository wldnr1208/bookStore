import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import styled from "@emotion/styled";
import Link from "next/link";
import Button from "@/components/atoms/Button";
import { useState } from "react";
import { booksData } from "@/mocks/booksData";
import { Book } from "@/types/book";

const fetchBook = async (id: number): Promise<Book> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const book = booksData.find((b) => b.id === id);
  if (!book) {
    throw new Error("책을 찾을 수 없습니다.");
  }
  return book;
};

const BookDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const bookId = Number(id);

  const {
    data: book,
    isLoading,
    error,
  } = useQuery<Book, Error>({
    queryKey: ["book", bookId],
    queryFn: () => fetchBook(bookId),
    enabled: !!bookId,
  });

  const [quantity, setQuantity] = useState<number>(1);

  const handleDecrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleRemove = () => {
    if (confirm("이 책을 삭제하시겠습니까?")) {
      alert("책이 삭제되었습니다.");
      router.push("/books");
    }
  };

  if (isLoading) return <p>로딩 중...</p>;
  if (error)
    return (
      <p>
        에러 발생: {error instanceof Error ? error.message : "알 수 없는 에러"}
      </p>
    );
  if (!book) return <p>책 정보를 찾을 수 없습니다.</p>;

  return (
    <Container>
      <Link href="/books" passHref legacyBehavior>
        <BackLink>목록으로 돌아가기</BackLink>
      </Link>
      <DetailCard>
        <CoverImage src={book.coverImage} alt={book.title} />
        <Info>
          <Title>{book.title}</Title>
          <Author>{book.author}</Author>
          <InventorySection>
            <InventoryLabel>재고 수량:</InventoryLabel>
            <QuantityControls>
              <Button onClick={handleDecrement}>-</Button>
              <QuantityDisplay>{quantity}</QuantityDisplay>
              <Button onClick={handleIncrement}>+</Button>
            </QuantityControls>
          </InventorySection>
          <Button onClick={handleRemove}>책 제거</Button>
        </Info>
      </DetailCard>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f8f9fa;
`;

const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  margin-bottom: 30px;
  color: #555;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #0070f3;
  }

  &:before {
    content: "←";
    margin-right: 8px;
  }
`;

const DetailCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CoverImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.2;
`;

const Author = styled.p`
  font-size: 20px;
  color: #666;
  margin: 0;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
`;

const Price = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: #0070f3;
  margin: 0;

  &:before {
    content: "판매가: ";
    font-size: 16px;
    font-weight: normal;
    color: #666;
  }
`;

const InventorySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InventoryLabel = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #333;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const QuantityDisplay = styled.span`
  min-width: 50px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding: 8px;
  background-color: #e2e8f0;
  border-radius: 4px;
`;

export default BookDetailPage;
