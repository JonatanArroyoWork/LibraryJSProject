class LendsViewModel
{
    constructor()
    {
        this.UsersDDHandler = new DropDownHandler(App.UsersVM.Users, DDUsers, "Name");
        this.BooksDDHandler = new DropDownHandler(App.BooksVM.Books, DDBooks, "Title");



        this.TableHandler = new TableHandler(
            LendsTableContent,  //parentNode (dónde quiero que se genere la tabla)
            this.GetLendMetadata(),               //modelType (el tipo para las columnas)
            (lend) => { this.OnSelectedLend(lend); }, //onSelectedRow
            (lend) => { this.OnDeletedLend(lend); })
    }

    GetLendMetadata()
    {
        return class Lend
        {
            constructor()
            {
                this.Title = "";
                this.LendedOn = "";
                this.ExpiresOn = "";
            }
        }
    }

    ShowUsers()
    {
        this.UsersDDHandler.ShowOptions();
    }

    ShowBooks()
    {
        this.BooksDDHandler.ShowOptions();
    }

    OnSelectedLend(lend)
    {

    }

    OnDeletedLend(lend)
    {

    }
}