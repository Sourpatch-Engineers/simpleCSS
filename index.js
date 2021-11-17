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
            document.querySelector('#textboxerror').value = 'uh oh';
        }
        catch
        {
            document.querySelector('#textboxerror').value = 'uh oh';
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