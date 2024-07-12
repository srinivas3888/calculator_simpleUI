let res=document.getElementById('res');
let btn=document.querySelectorAll(".btn");
btn.forEach(button => { button.classList.add('bg-white', 'border-none', 'text-black', 'rounded-xl', 'm-1.5') });

function display(d){
    if(d=='AC'){
        res.value="";
    }
    else if(d=='DE'){
        let o=res.value, t="";
        for(let i=0; i<o.length-1; i++){
            t += o[i];
        }
        res.value=t;
    }
    else if(d=='='){
        res.value = eval(res.value);
    }
    else{
    res.value += d;
    }
}