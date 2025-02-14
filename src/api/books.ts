import { useQuery } from "@tanstack/react-query";
import { Book } from "../types/book";
import { booksData } from "@/mocks/booksData";

const fetchBooks = async (
  page: number,
  title: string,
  author: string
): Promise<Book[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  let filteredBooks = booksData;
  if (title) {
    filteredBooks = filteredBooks.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
  }
  if (author) {
    filteredBooks = filteredBooks.filter((book) =>
      book.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  const startIndex = (page - 1) * 10;
  return filteredBooks.slice(startIndex, startIndex + 10);
};
export const useBooks = (page: number, title: string, author: string) => {
  return useQuery({
    queryKey: ["books", page, title, author],
    queryFn: () => fetchBooks(page, title, author),
    placeholderData: (previousData) => previousData ?? [], // 이전 데이터 유지
  });
};
