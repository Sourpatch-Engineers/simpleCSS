function ButtClick(){
    try{
        text = document.querySelector('#textbox').value;
    }
    catch{
        text = "";
    }
    try{
        prevErrorText = document.querySelector('#textboxerror').value;
    }
    catch{
        prevErrorText = "";
    }

    if (text == "" && prevErrorText == "") {
        try{
            document.querySelector('#textbox').id = 'textboxerror';
            document.querySelector('#textboxerror').value = '';
            document.querySelector('#textboxerror').placeholder = 'uh oh';
        }
        catch
        {
            document.querySelector('#textboxerror').value = '';
            document.querySelector('#textboxerror').placeholder = 'uh oh';
        }
        
    }

    else {
        try{
            document.querySelector('#textboxerror').id = 'textbox';
        }
        catch
        {
            x = 0;
        }
    }
    
}

function AddMember(event){
    if (event.keyCode == 13) {
        var input = document.createElement("input");
        input.setAttribute('id', 'textbox');
        input.setAttribute('type', 'text');
        input.setAttribute('onkeyup', 'AddMember(event)');
        var parent = document.querySelector(".entryfield");
        parent.appendChild(input);
        linebreak = document.createElement("br");
        parent.appendChild(linebreak);
    }
}