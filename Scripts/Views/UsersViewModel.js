class UsersViewModel
{
    constructor()
    {
        this.Users = new Array();
        this.InputHandler = new InputDataHandler();
        this.EditingUser = null;

        this.TableHandler = new TableHandler(
            UsersTableContent,  //parentNode (dónde quiero que se genere la tabla)
            User,               //modelType (el tipo para las columnas)
            (user) => { this.OnSelectedUser(user); }, //onSelectedRow
            (user) => { this.OnDeletedUser(user); });  //onDeletedRow

            
        this.CreateDefaultData();
    }

    CreateDefaultData()
    {
        var user1 = new User();
        user1.Name = "Sauron";
        user1.Surname = "El oscuro";
        user1.BirthDate = new Date();
        user1.Email = "hello@kitty.mordor";

        var user2 = new User();
        user2.Name = "Trump";
        user2.Surname = "el tonto";
        user2.BirthDate = new Date();
        user2.Email = "fundmy@wall";

        this.AddUser(user1);
        this.AddUser(user2);
    }

    AddNewUser()
    {
        let user = new User();
        this.InputHandler.FillModel(user, UsersView);
        this.CleanUserForm();
        this.AddUser(user);
    }

    AddUser(user)
    {
        this.Users.push(user);
        this.TableHandler.AddRow(user);
    }

    UpdateUser()
    {        
        this.InputHandler.FillModel(this.EditingUser, UsersView);
        this.TableHandler.UpdateSelectedRow();

        this.CleanUserForm();
    }

    CleanUserForm()
    {
        this.InputHandler.CleanForm(UsersView);
        this.TableHandler.Clean();
        
        BtAddUser.classList.remove("BtInvisible");
        BtUpdateUser.classList.add("BtInvisible");
    }

    OnSelectedUser(user)
    {
        this.EditingUser = user;

        this.InputHandler.FillForm(user, UsersView);

        BtAddUser.classList.add("BtInvisible");
        BtUpdateUser.classList.remove("BtInvisible");
    }    

    OnDeletedUser(user)
    {
        var r = confirm("¿te atreves a borrar el usario!!??");
        if (r == true) 
        {
            console.log("acaba con él! jajajaa");
            let i = this.Users.findIndex((x)=>x === user);
            this.Users.splice(i, 1);

            // do validations
            this.TableHandler.DeleteRow(user);
        } 
        else 
        {
            console.log("You pressed Cancel! cobarde pecador");
        }        
    }
}