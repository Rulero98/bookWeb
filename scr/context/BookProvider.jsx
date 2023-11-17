import React, { useEffect, useState } from 'react'
import { BookContext } from './bookContext'
import { books } from '../data/books'

export const BookProvider = ({ children }) => {

    const [booksAvailable, setBooksAvailable] = useState(books)
    const [readList, setReadList] = useState([])

    return (
        <BookContext.Provider
            value={{
                booksAvailable,
                setBooksAvailable,
                readList,
                setReadList
            }}>

            {children}
        </BookContext.Provider>
    )
}
