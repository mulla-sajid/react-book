import Todo from "./component/Todo";
import AddBook from "./component/AddBook"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [data, setData] = useState([]);
  const [editBook, setEditBook] = useState(null);

// ✅ Add static data when app loads
  useEffect(() => {
    const sampleBooks = [
      {
        bookId: uuidv4(),
        bookName: "Atomic Habits",
        authorName: "James Clear",
        bookDesc: "A practical guide to building good habits and breaking bad ones.",
        isDone: false,
      },
      {
        bookId: uuidv4(),
        bookName: "The Alchemist",
        authorName: "Paulo Coelho",
        bookDesc: "A story about following your dreams and discovering your destiny.",
        isDone: false,
      },
      {
        bookId: uuidv4(),
        bookName: "Rich Dad Poor Dad",
        authorName: "Robert Kiyosaki",
        bookDesc: "Personal finance lessons about building wealth and assets.",
        isDone: true,
      },
    ];

    setData(sampleBooks);
  }, []);

  const addNewBook = (book) => {
     console.log("app",book);
    if (editBook) {
      console.log("edit-book",book);
      setData((prevData) =>
        prevData.map((b) =>
          b.bookId === editBook.bookId
            ? { ...b, bookName: book.bookName, authorName: book.authorName, bookDesc: book.bookDesc }
            : b
        )
      );
      setEditBook(null);
    } else {
      console.log(book);
      const newBook = { ...book, bookId: uuidv4(), isDone: false };
      setData((prev) => [...prev, newBook]);
    }
  };

  const handleDelete = (id) => setData((prev) => prev.filter((b) => b.bookId !== id));

  const handleDone = (id) =>
    setData((prev) =>
      prev.map((b) => (b.bookId === id ? { ...b, isDone: true } : b))
    );

  return (
    <Router>
      <Routes>
        {/* ✅ Default route redirects to /todo */}
        <Route path="/" element={<Navigate to="/todo" replace />} />
        <Route
          path="/add"
          element={<AddBook addNewBook={addNewBook} editBook={editBook} />}
        />
        <Route
          path="/todo"
          element={
            <Todo
              data={data}
              setEditBook={setEditBook}
              handleDelete={handleDelete}
              handleDone={handleDone}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App
