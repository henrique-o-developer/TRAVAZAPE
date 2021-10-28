function enviarScript(scriptText){
    const lines = scriptText.split("\n"); 

    let i = 0;       

    setInterval(() => { 
        if(i >= lines.length) return

        if(lines[i].trim() != ''){ 
            console.log(lines[i]); 
    
            window.InputEvent = window.Event || window.InputEvent;
    
            const event = new InputEvent('input', { bubbles: true });
    
            const textbox = document.querySelector('#main div._13NKt');
    
            textbox.textContent = lines[i];
    
            textbox.dispatchEvent(event);
    
            document.querySelector("#main span[data-testid=send]").click();                   

        }
        i++;
    }, 500)
}

function generateRandomString(number, compriment) {
    var string = ""

    for (var i = 0; i < number; i++) {
        var str = ""
        for (var j = 0; j < compriment; j++) {
            str += String.fromCharCode(Math.floor(Math.random() * 65535))
        }

        str += `\n`

        string += str
    }

    return string
}

enviarScript(generateRandomString(3, 50))

// mude de 3 para o numero de lihas do travazap 
// mude de 50 para o numero de algarismos de cada linha do travazap
