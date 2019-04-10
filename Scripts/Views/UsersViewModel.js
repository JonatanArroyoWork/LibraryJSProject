class UsersViewModel
{
    constructor()
    {
        this.Users = new Array();
        this.InputHandler = new InputDataHandler();
        this.EditingUser = null;

        this.TableHandler = new TableComponentHandler(
            UsersTableContent, //parentNode(dónde quiero que genere la tabla)
            User,               //modelType(el tipo para las colummas)
            (user) => { this.OnSelectedUser(user); }); //onSelectedRow   
    }

    AddNewUser()
    {
        let user = new User();
        this.InputHandler.FillModel(user, UsersView);
        this.Users.push(user);

        this.TableHandler.AddRow(user);
        this.CleanUserForm();

    }

    UpdateUser()
    {
        this.InputHandler.FillModel(this.EditingUser, UsersView);
        this.TableHandler.UpdateSelectedRow();

        this.CleanBookForm();
    }


    CleanUserForm()
    {
        this.InputHandler.CleanForm(UsersView);
        this.TableHandler.Clear();

        BtAddUser.classList.remove("BtInvisiblle");
        BtUpdateUser.classList.add("BtInvisible");
    }

    OnSelectedUser(user)
    {
        this.EditingUser = user;

        this.InputHandler.FillForm(user, UsersView);

        BtAddUser.classList.add("BtInvisiblle");
        BtUpdateUser.classList.remove("BtInvisible");
    }
}


