import React, { useState } from 'react';
import { Button, Form, Input, Rating } from "semantic-ui-react";

export const BookForm = ({ onNewBook }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState(0);

    return (
        <Form>
            <Form.Field>
                <Input 
                placeholder="Book Name"
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <Input 
                placeholder="Author"
                value={author}
                onChange={e => setAuthor(e.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <Rating 
                icon="star"
                rating={rating}
                maxRating={5}
                onRate={(_, data) => {
                    setRating(data.rating);
                }}
                />
            </Form.Field>
            <Form.Field>
                <Button 
                    onClick={async () => {
                    const book = { title, author, rating};
                    // const response = await fetch(`/api/add_book`, {
                    //     method: "POST",
                    //     headers: {
                    //         "Content-Type": "application/json"
                    //     },
                    //     body: JSON.stringify(book)
                    // });
                    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/add_book`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(book)
                    });

                    if (response.ok) {
                        onNewBook(book);
                        setTitle('');
                        setAuthor('');
                        setRating(0);
                    }

                }}>
                    Submit
                </Button>
            </Form.Field>
        </Form>
    );
}