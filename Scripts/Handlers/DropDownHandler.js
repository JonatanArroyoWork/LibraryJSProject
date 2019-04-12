class DropDownHandler
{
    constructor(options, control, displayProperty)
    {
        this.Options = options;
        this.Control = control;
        this.DisplayProperty = displayProperty;
    }

    LoadOptions()
    {
        this.Control.innerHTML = "";

        for (let i in this.Options)
        {
            var option = this.Options[i];

            var label = document.createElement("LABEL");
            label.innerHTML = option[this.DisplayProperty];
            label.Model = option;

            this.Control.appendChild(label);
        }
    }

    ShowOptions()
    {
        this.LoadOptions();
        this.Control.classList.toggle("show");
    }
}