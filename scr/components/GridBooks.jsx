import { BookProvider } from "../context/BookProvider"
import { CardBook } from "./CardBook"
import { SearchBook } from "./SearchBook"


import './styles.css'

export const GridBooks = () => {
    return (
        <BookProvider>
            
            <CardBook />
        </BookProvider>
    )
}
