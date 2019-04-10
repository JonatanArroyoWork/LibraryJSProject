class CrazyBooksApp
{    
    constructor()
    {
        this.MenuVM = null;
        this.BooksVM = null;
    }

    Start()
    {
        this.MenuVM = new MenuViewModel();
        this.MenuVM.ShowView(MenusViews.Books);
    }

    ShowView(menuView)
    {
        if (this.MenuVM != null)
        {
            this.MenuVM.ShowView(menuView);
        }
    }
}

var App = new CrazyBooksApp();

window.onload = function(event)
{
    App.Start();
};