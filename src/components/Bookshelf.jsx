import { useState } from "react"

const Bookshelf = () => {
    const [books, setBooks] = useState([])
    // console.log(books)
    const [newBooks, setNewBooks] = useState({
        title: "",
        author: ""
    })
    // console.log(newBooks)

    //This function updates the form’s state as the user types into the input fields
    const handleInputChange = (e) => {
        console.log(e.target.name)

        setNewBooks({...newBooks, [e.target.name] : e.target.value})
    }

    // This function manages the submission of the form, adding a new book to the list and resetting the input fields.
    const handleSubmit = (e) => {
        e.preventDefault()

        setBooks({...books})
        setBooks("")
    }


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