class TableComponentHandler
{
    constructor(parentNode, modelType, onSelectedRow)
    {          
        this.SelectedRow = null;        
        this.OnSelectedRow = onSelectedRow;
//modelType le estoy pasando una clase del tipo Book o User
        var template = new modelType();        

        this.TableNode = document.createElement("TABLE");    
        parentNode.appendChild(this.TableNode);

        var header = this.TableNode.createTHead();
        
        this.TBody = document.createElement("tbody");
        this.TableNode.appendChild(this.TBody);
        
        var row = header.insertRow(0); 

        for (var prop in template)
        {
            var cell = row.insertCell();
            cell.innerHTML = "<b>" + prop + "</b>";
        }
    }

    AddRow(model)
    {
        let row = this.TBody.insertRow(); 
        row.Model = model;

        for (let prop in model)
        {
            let cell = row.insertCell();
            cell.id = prop;
            cell.innerHTML = model[prop];
        }

        let btnEdit = document.createElement("BUTTON");
        btnEdit.innerHTML = "Edit";
    
        let cell = row.insertCell();
        cell.appendChild(btnEdit);

        btnEdit.onclick = () =>
        {
            this.SelectedRow = row;
            this.OnSelectedRow(model);
        };
    }

    UpdateSelectedRow()
    {
        let model = this.SelectedRow.Model;

        for(let i in this.SelectedRow.childNodes)
        {
            let cell = this.SelectedRow.childNodes[i];

            if(model[cell.id])
                cell.innerHTML = model[cell.id];
        }   
        
        this.Clean();
    }

    Clean()
    {
        this.SelectedRow = null;
    }
}