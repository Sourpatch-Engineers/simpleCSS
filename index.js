function ButtClick(){
    textList = document.querySelectorAll('.textbox');
    
    for (let i = 0; i < textList.length; i++) {
        if (textList[i].value == "")
        {
            textList[i].id = 'textboxerror';
            textList[i].placeholder = 'cant enter empty field';
            textList[i].value = '';
        }

        else if (textList[i].id == 'textboxerror')
        {
            textList[i].id = 'textbox';
            textList[i].placeholder = 'enter text here'; 
        }
    }
    
}

function AddMember(event){
    if (event.keyCode == 13) {
        var input = document.createElement("input");
        input.setAttribute('id', 'textbox');
        input.setAttribute('type', 'text');
        input.setAttribute('class', 'center textbox');
        input.setAttribute('onkeyup', 'AddMember(event)');
        var parent = document.querySelector(".entryfield");
        parent.appendChild(input);
        linebreak = document.createElement("br");
        parent.appendChild(linebreak);
    }
}