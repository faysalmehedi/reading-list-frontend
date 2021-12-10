import React from 'react';
import { List, Header, Rating } from "semantic-ui-react";

export const Books = ({ books }) => {
    return (
        <List>
            {books.map(book => {
                return (
                    <List.Item key={book.title}>
                        <Header as='h2' color='violet'>{book.title}</Header>
                        <Header as='h4'>{book.author}</Header>
                        <Rating rating={book.rating} maxRating={5} disabled/>
                    </List.Item>
                );
            })}
        </List>
    );
}