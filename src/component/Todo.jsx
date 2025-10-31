import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export default function Todo({ data, setEditBook, handleDelete, handleDone }) {
    const navigate = useNavigate();
    return (
        <Container>
            {/* <div className="d-flex justify-content-between align-items-center mt-3">
                <h2 className="fw-bold text-white shadow-lg p-2 rounded"
                    style={{ background: "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)" }}>
                    Book Details
                </h2>
                <Button
                    onClick={() => navigate('/add')}
                    className="fw-bold"
                    style={{ background: "linear-gradient(to left, #f7797d, #FBD786, #C6FFDD)", color: "black" }}>
                    + Add Book
                </Button>
            </div> */}
            <div className='d-flex justify-content-between align-items-center mt-2 shadow-lg fw-bold text-white position-sticky mb-2 px-2'  style={{ background: "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)", zIndex: "1", top: "0" }} >
                <h2 className='py-3'>BookDetails!</h2>
                <Button
                    onClick={() => navigate('/add')}
                    className="fw-bold"
                    style={{ background: "linear-gradient(to left, #f7797d, #FBD786, #C6FFDD)", color: "black" }}>
                    + Add Book
                </Button>
            </div>

            {data.length === 0 ? (
                <h3 className="mt-4">No Books Added yet</h3>
            ) : (
                data.map((book) => (
                    <Card key={book.bookId} className="text-white mb-2"
                        style={book.isDone
                            ? { background: "linear-gradient(to left, #f7b733, #fc4a1a)" }
                            : { background: "linear-gradient(to right, #2C5364, #203A43, #0F2027)" }}>
                        <Card.Header className="fs-1 fw-bold">{book.bookName}</Card.Header>
                        <Card.Body>
                            <Card.Title className="fs-2">{book.authorName}</Card.Title>
                            <Card.Text className="fs-3">{book.bookDesc}</Card.Text>

                            <Button onClick={() => handleDelete(book.bookId)} className="me-2 text-black fw-bold"
                                style={{ background: "linear-gradient(to left, #f7797d, #FBD786, #C6FFDD)" }}>
                                Delete
                            </Button>

                            <Button onClick={() => handleDone(book.bookId)} className="me-2 text-black fw-bold"
                                style={{ background: "linear-gradient(to left, #f7797d, #FBD786, #C6FFDD)" }}>
                                Mark As Done
                            </Button>

                            <Button onClick={() => setEditBook(book) || navigate('/add')} className="text-black fw-bold"
                                style={{ background: "linear-gradient(to left, #f7797d, #FBD786, #C6FFDD)" }}>
                                Edit
                            </Button>
                        </Card.Body>
                    </Card>
                ))
            )}
        </Container>
    );
}