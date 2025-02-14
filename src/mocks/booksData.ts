// src/mocks/booksData.ts
import { Book } from "@/types/book";

export const booksData: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage:
      "data:image/jpeg;base64,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",
    price: 12000,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsOiB0ty4pRdmruWUqQ1SY5XvqLnwKRJvgFA&s",
    price: 15000,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTENlgwk8aw_hekz5GuecTnz0pMNoYKib2cfw&s",
    price: 13000,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Ncn8BAvACurh-KAFs4aSJ-doFR2TkzEOg&s",
    price: 11000,
  },
  {
    id: 5,
    title: "Moby-Dick",
    author: "Herman Melville",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4bsVGTsF-32Ku3r5pOVik8wyUxu1vs3C0Q&s",
    price: 14000,
  },
  {
    id: 6,
    title: "War and Peace",
    author: "Leo Tolstoy",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAN4xvt1h93zTvP8axVuNKy3VH5ZNBKOj-0g&s",
    price: 20000,
  },
  {
    id: 7,
    title: "The Odyssey",
    author: "Homer",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTENlgwk8aw_hekz5GuecTnz0pMNoYKib2cfw&s",
    price: 9000,
  },
  {
    id: 8,
    title: "Hamlet",
    author: "William Shakespeare",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78BrNxSfJ_VyKnmbBorhlHhnrnW0IPzbJbg&s",
    price: 8000,
  },
  {
    id: 9,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4bsVGTsF-32Ku3r5pOVik8wyUxu1vs3C0Q&s",
    price: 12000,
  },
  {
    id: 10,
    title: "Brave New World",
    author: "Aldous Huxley",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTENlgwk8aw_hekz5GuecTnz0pMNoYKib2cfw&s",
    price: 13000,
  },
  {
    id: 11,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAN4xvt1h93zTvP8axVuNKy3VH5ZNBKOj-0g&s",
    price: 25000,
  },
  {
    id: 12,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Ncn8BAvACurh-KAFs4aSJ-doFR2TkzEOg&s",
    price: 16000,
  },
  {
    id: 13,
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Ncn8BAvACurh-KAFs4aSJ-doFR2TkzEOg&s",
    price: 17000,
  },
  {
    id: 14,
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTENlgwk8aw_hekz5GuecTnz0pMNoYKib2cfw&s",
    price: 18000,
  },
  {
    id: 15,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Ncn8BAvACurh-KAFs4aSJ-doFR2TkzEOg&s",
    price: 19000,
  },
  {
    id: 16,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAN4xvt1h93zTvP8axVuNKy3VH5ZNBKOj-0g&s",
    price: 21000,
  },
  {
    id: 17,
    title: "Wuthering Heights",
    author: "Emily Brontë",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTENlgwk8aw_hekz5GuecTnz0pMNoYKib2cfw&s",
    price: 10000,
  },
  {
    id: 18,
    title: "Madame Bovary",
    author: "Gustave Flaubert",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78BrNxSfJ_VyKnmbBorhlHhnrnW0IPzbJbg&s",
    price: 14000,
  },
  {
    id: 19,
    title: "The Iliad",
    author: "Homer",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAN4xvt1h93zTvP8axVuNKy3VH5ZNBKOj-0g&s",
    price: 9000,
  },
  {
    id: 20,
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpb3obEl2wgUkDd_yQ6oKIF_uJTHn515E3g&s",
    price: 16000,
  },
];
