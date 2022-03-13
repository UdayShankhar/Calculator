let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"))
console.log(buttons);
buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
                case '=':
                    try{
                        display.innerText=eval(display.innerText)
                    }catch{
                        alert("Error")
                    }
                    break;
            case '--':
                display.innerText=display.innerText.slice(0,-1);
                break;
       default:
           display.innerHTML += e.target.innerText
   }
    });
});



