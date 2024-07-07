let result=document.getElementById('res');

window.addEventListener('load', function(){
    let loader=document.getElementById('loader');
    let content=document.getElementsByClassName('main');
    loader.style.display="none";
    content.style.opacity="1";
});

function display(d){
    if(d=='AC'){
        result.value="";
    }
    else if(d=='DE'){
        let o=result.value, t="";
        for(let i=0; i<o.length-1; i++){
            t += o[i];
        }
        result.value=t;
    }
    else if(d=='='){
        result.value = eval(result.value);
    }
    else{
    result.value += d;
    }
}