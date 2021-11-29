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
        document.querySelector('#textbox').value='enter was pressed';
    }
}