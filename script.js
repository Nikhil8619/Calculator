let ip = document.getElementById('inputBox');
let btns = document.querySelectorAll('button');

let str = "";
let arr = Array.from(btns);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            str = eval(str);
            ip.value = str;
        }

        else if(e.target.innerHTML == 'AC'){
            str = "";
            ip.value = str;
        }
        else if(e.target.innerHTML == 'DEL'){
            str = str.substring(0, str.length-1);
            ip.value = str;
        }
        else{
            str =str+ e.target.innerHTML;
            ip.value = str;
        }
        
    })
})
