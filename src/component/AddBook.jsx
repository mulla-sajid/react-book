import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
export default function AddBook({ addNewBook }) {
    let [data, setData] = useState({ bookId: 0, bookName: "", authorName: "", bookDesc: "" });

    let handleInput = (e) => {
        setData((prevValue) => {
            return { ...prevValue, [e.target.name]: e.target.value }
        });
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        addNewBook(data);
        setData({ bookId: 0, bookName: "", authorName: "", bookDesc: "", isDone: false })
    }

    return (
        <div>
            <h1 className='text-center text-white py-3 mt-2 shadow-lg fw-bold' style={{ background: "#12c2e9", background: "-webkit-linear-gradient(to right, #12c2e9, #c471ed, #f64f59)", background: "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)" }} >Add Book Details</h1>
            <Form className='border border-2 rounded-2 border-warning p-2 text-white' style={{ background: "linear-gradient(to right, #2C5364, #203A43, #0F2027)" }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control type="text" placeholder="book name..." value={data.bookName} name="bookName" onChange={handleInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Book Author</Form.Label>
                    <Form.Control type="text" placeholder="book auth..." value={data.authorName} name="authorName" onChange={handleInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Book Description</Form.Label>
                    <Form.Control type="text" placeholder="book desc..." value={data.bookDesc} name="bookDesc" onChange={handleInput} />
                </Form.Group>
                <Button type='submit' variant="success" className='text-black fw-bold' style={{ background: "linear-gradient(to left, #f7797d, #FBD786, #C6FFDD)" }}>Add Book</Button>
            </Form>
        </div >
    )
}