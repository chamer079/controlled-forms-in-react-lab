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
        // console.log("Book was submitted. No longer navigate away from page.")
        
        // 
        setBooks({...books, newBooks })
        
        // Reset newBooks state to clear our form inputs
        setNewBooks({title: "", author: ""})
    }
    console.log("Books", books)
    // console.log("setBooks", setBooks)
    // console.log("Book added", newBooks)

    

    return(
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title: </label>
                    <input 
                        id="title"
                        type="text"
                        name="title"
                        placeholder="Add Book Title"
                        value={newBooks.title}
                        onChange={handleInputChange}
                    />
                    <input 
                        id="author"
                        type="text"
                        name="author"
                        placeholder="Add Author's Name"
                        value={newBooks.author}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {/* Book cards will display here */}
                {books.map((book, idx) => {
                    <h2 key={idx}>{book.title}</h2>
                })}
            </div>
        </div>
    )
}

export default Bookshelf