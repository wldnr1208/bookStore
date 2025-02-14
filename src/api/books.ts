import { useQuery } from "@tanstack/react-query";
import { Book } from "@/types/book";
import { booksData } from "@/mocks/booksData";

const fetchBooks = async (page: number): Promise<Book[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const startIndex = (page - 1) * 10;
  const paginatedBooks = booksData.slice(startIndex, startIndex + 10);
  return paginatedBooks;
};

export const useBooks = (page: number) => {
  return useQuery({
    queryKey: ["books", page],
    queryFn: () => fetchBooks(page),
    placeholderData: (previousData) => previousData ?? [], // 이전 데이터 유지
  });
};
