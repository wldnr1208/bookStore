import { Book } from "@/types/book";
import styled from "@emotion/styled";
import Link from "next/link";

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  return (
    <Link href={`/books/${book.id}`} passHref legacyBehavior>
      <CardLink>
        <ImageContainer>
          <BookImage src={book.coverImage} alt={book.title} />
        </ImageContainer>
        <ContentContainer>
          <Title>{book.title}</Title>
          <Author>{book.author}</Author>
          <Price>{book.price.toLocaleString()} 원</Price>
        </ContentContainer>
      </CardLink>
    </Link>
  );
};

const CardLink = styled.a`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  display: block;
  color: inherit;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 140%;
  overflow: hidden;
`;

const BookImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Author = styled.p`
  margin: 0 0 8px 0;
  font-size: 0.9rem;
  color: #666;
`;

const Price = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: #4a5af7;
`;

export default BookCard;
