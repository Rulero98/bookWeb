import React, { useContext, useEffect, useState } from 'react'
import { BookContext } from '../context/bookContext'
import { ListBooks } from './ListBooks'

export const SearchBook = () => {

    const {
        booksAvailable,
        setBooksAvailable,
        readList,
        setReadList } = useContext(BookContext)

    const [listFiltered, setListFiltered] = useState(booksAvailable)
    const [bookClicked, setBookClicked] = useState()
    const [whoList, setWhoList] = useState()

    useEffect(() => {
        const dataListAvailableSaved = localStorage.getItem('listFiltered')
        const dataReadListSaved = localStorage.getItem('readList')

        if (dataListAvailableSaved) setListFiltered(JSON.parse(dataListAvailableSaved))
        if (dataReadListSaved) setReadList(JSON.parse(dataReadListSaved))
    }, []);

    useEffect(() => {
        console.log(readList)
        localStorage.setItem('readList', JSON.stringify(readList))
        localStorage.setItem('listFiltered', JSON.stringify(listFiltered))
    }, [whoList])

    const onAddReadList = (item) => {
        setWhoList(1)
        setBookClicked(item.book.ISBN)
        setTimeout(() => {
            setWhoList(0)
            setReadList([...readList, item])
            setBooksAvailable(booksAvailable.filter((book) => book !== item))
            setListFiltered(listFiltered.filter((book) => book !== item))
        }, 650);
    }
    const onDeleteReadList = (item) => {
        setWhoList(1)
        setBookClicked(item.book.ISBN)
        setTimeout(() => {
            setWhoList(0)
            setReadList(readList.filter((book) => book != item))
            setBooksAvailable([...booksAvailable, item])
            setListFiltered([...listFiltered, item])
        }, 650);
    }

    const onFilteredList = ({ target }) => {
        setListFiltered(booksAvailable.filter(obj => obj.book.genre === target.value))
        if (target.value === "Select genre") setListFiltered(booksAvailable)
    }

    return (
        <>
            <select onChange={onFilteredList} >

                <option>Select genre</option>
                <option>Terror</option>
                <option>Fantasía</option>
                <option>Ciencia ficción</option>
                <option>Zombies</option>
            </select>

            <ListBooks books={listFiltered} HandleList={onAddReadList} whoList={whoList} bookClicked={bookClicked} type={'available'} />

            <ListBooks books={readList} HandleList={onDeleteReadList} whoList={whoList} bookClicked={bookClicked} type={'to read'} />
        </>
    )
}
