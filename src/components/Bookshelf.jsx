import { useState } from "react"

const Bookshelf = () => {
    const [books, setBook] = useState([])
    // console.log(books)
    const [newBooks, setNewBooks] = useState({
        title: "",
        author: ""
    })
    // console.log(newBooks)



    return(
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                {/* Form will go here */}
            </div>
            <div className="bookCardsDiv">
                {/* Book cards will display here */}
            </div>
        </div>
    )
}

export default Bookshelf