
export const getClass = (book, whoList, bookClicked) => {
    if (bookClicked === book.book.ISBN)
        return whoList == 1 ? "CB_card_animation-out" : " CB_card_animation-in"
    return ""
}

