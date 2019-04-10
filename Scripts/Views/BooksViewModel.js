class BooksViewModel
{
    constructor()
    {
        this.Books = new Array();
        this.InputHandler = new InputDataHandler();
        this.EditingBook = null;

        this.TableHandler = new TableComponentHandler(
            BooksTableContent,  //parentNode (dónde quiero que se genere la tabla)
            Book,               //modelType (el tipo para las columnas)
            (book) => { this.OnSelectedBook(book); });  //onSelectedRow
    }

    AddNewBook()
    {
        let book = new Book();
        this.InputHandler.FillModel(book, BooksView);
        this.Books.push(book);

        this.TableHandler.AddRow(book);
        this.CleanBookForm();
    }

    UpdateBook()
    {        
        this.InputHandler.FillModel(this.EditingBook, BooksView);
        this.TableHandler.UpdateSelectedRow();

        this.CleanBookForm();
    }

    CleanBookForm()
    {
        this.InputHandler.CleanForm(BooksView);
        this.TableHandler.Clean();
        
        BtAddBook.classList.remove("BtInvisible");
        BtUpdateBook.classList.add("BtInvisible");
    }

    OnSelectedBook(book)
    {
        this.EditingBook = book;

        this.InputHandler.FillForm(book, BooksView);

        BtAddBook.classList.add("BtInvisible");
        BtUpdateBook.classList.remove("BtInvisible");
    }
}