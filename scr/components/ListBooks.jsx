import React, { useState } from 'react'
import { getClass } from '../helpers/getClass'

export const ListBooks = ({ books, HandleList = null, whoList = 1, bookClicked = "", type }) => {
    return (
        <div className="CB_container">
            <h1 className="w-100 text-center mb-5">List of books {type} ({books.length})</h1>
            {!books ? <p>Loading...</p> : books.map((book) => (
                <div key={book.book.ISBN}
                    className={`CB_card ${getClass(book, whoList, bookClicked)}`}
                    onClick={() => HandleList(book)}>
                    <img
                        src={book.book.cover}
                        alt={book.book.title}
                        height={"300px"}
                        width={"100px"}
                        className="CB_img"
                    />
                </div>
            ))}
        </div>
    )
}
