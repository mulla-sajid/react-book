import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import AddBook from './AddBook';
import { v4 as uuidv4 } from 'uuid';

export default function Todo() {
    let [data, setData] = useState([{ bookId: uuidv4(), bookName: "Hardy Boys", authorName: "Sam Flex", bookDesc: "Best adventure book", isDone: false }])

    let addNewBook = (book) => {
        const newBook = { ...book, bookId: uuidv4() };
        setData((preVal) => {
            return [...preVal, newBook];
        })
    }

    let handleDelete = (id) => {
        setData((prevData) => prevData.filter((book) => book.bookId !== id));
    }

    let handleDone = (id) => {
        setData(data.map((book) =>
            book.bookId === id ? { ...book, isDone: true } : book
        ));
    }

    

    return (<div>
        <Container>
            <AddBook addNewBook={addNewBook}></AddBook>

            <h2 className='text-center py-3 mt-2 shadow-lg fw-bold text-white position-sticky mb-2' style={{ background: "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)", zIndex: "1", top: "0" }} >BookDetails!</h2>
            {data.length == 0 ? (
                <h3>No Books Added yet</h3>
            ) : (
                data.map((book) => (
                    <Card key={book.bookId} className='text-white mb-2' style={book.isDone ? { background: "linear-gradient(to left, #f7b733, #fc4a1a)" }
                        : { background: "linear-gradient(to right, #2C5364, #203A43, #0F2027)" }}>
                        <Card.Header className='fs-1 fw-bold'>{book.bookName}</Card.Header>
                        <Card.Body>
                            <Card.Title className='fs-2'>{book.authorName}</Card.Title>
                            <Card.Text className='fs-3'>
                                {book.bookDesc}
                            </Card.Text>
                            <div ><Button type='submit' onClick={() => handleDelete(book.bookId)} variant="danger" className='me-1 text-black fw-bold' style={{ background: "linear-gradient(to left, #f7797d, #FBD786, #C6FFDD)" }}>Delete</Button>

                                <Button type='submit' onClick={() => handleDone(book.bookId)} variant="danger" className='me-1 text-black fw-bold' style={{ background: "linear-gradient(to left, #f7797d, #FBD786, #C6FFDD)" }}>Mark As Done</Button>
                            {book.isDone ? <Button type='submit' onClick={() => handleDone(book.bookId)} variant="danger" className='text-black fw-bold' style={{ background: "linear-gradient(to left, #f7797d, #FBD786, #C6FFDD)" }}>Update Book</Button> : "" }

                        </div>

                    </Card.Body>
                    </Card>
        ))

            )}


    </Container>

    </div >
    )
}