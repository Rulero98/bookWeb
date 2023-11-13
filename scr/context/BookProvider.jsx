import React, { useEffect, useState } from 'react'
import { BookContext } from './bookContext'
import { books } from '../data/books'

export const BookProvider = ({ children }) => {

    /*  const [bookClicked, setBookClicked] = useState([])
    const [whoList, setWhoList] = useState(1)
    const deleteReadList = onDeleteReadList()
    const addReadList = onAddReadList()
*/
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
