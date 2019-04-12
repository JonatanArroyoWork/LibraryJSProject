class TableHandler
{
    constructor(parentNode, modelType, onSelectedRow, onDeletedRow)
    {          
        this.SelectedRow = null;        
        this.OnSelectedRow = onSelectedRow;
        this.OnDeletedRow = onDeletedRow;

        var template = new modelType();        

        this.TableNode = document.createElement("TABLE");    
        parentNode.appendChild(this.TableNode);

        var header = this.TableNode.createTHead();
        
        this.TBody = document.createElement("tbody");
        this.TableNode.appendChild(this.TBody);
        
        var row = header.insertRow(0); 

        Object.keys(template).forEach(function(prop, index) 
        {
            // key: the name of the object key
            // index: the ordinal position of the key within the object
            var cell = row.insertCell();
            cell.innerHTML = "<b>" + prop + "</b>"; 
        });
    }

    AddRow(model)
    {
        let row = this.TBody.insertRow(); 
        row.Model = model;

        //for (let prop in model)
        Object.keys(model).forEach(function(prop, index) 
        {
            let cell = row.insertCell();
            cell.id = prop;
            cell.innerHTML = model[prop];
        });
        this.CreateButton();
    }

    CreateButton(ButtonType)
    {

    for (i in ButtonType){
        let btn = document.createElement("BUTTON");
        btn.innerHTML = ButtonType;
    
        let cellButton = row.insertCell();
        cellButton.appendChild(btn);
    }
    btn.onclick = () =>
    {
        this.SelectedRow = row;
        this.OnSelectedRow(model);
    };
    }


    UpdateSelectedRow()
    {
        let model = this.SelectedRow.Model;

        //for(let i in this.SelectedRow.childNodes)
        for (let i =0; i< this.SelectedRow.childNodes.length; i++)
        {
            let cell = this.SelectedRow.childNodes[i];

            if(model[cell.id])
                cell.innerHTML = model[cell.id];
        }   
        
        this.Clean();
    }

    DeleteRow(model)
    {
        var rows = Array.from(this.TBody.rows);
        let rowToDelete = rows.find((row) => row.Model === model);

        rowToDelete.parentNode.removeChild(rowToDelete);
    }

    Clean()
    {
        this.SelectedRow = null;
    }
}