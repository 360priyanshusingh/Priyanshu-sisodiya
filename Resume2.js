var progresbar=document.querySelectorAll('.skil-progress div');
var seclectskill=document.getElementById('skills-containar')
var animationbardone=false;
function insitianbar(){
    for(var bar of progresbar){
        bar.style.width=0+'%';
   }
   
}


window.addEventListener('scroll',checkscrollbar);

insitianbar();
function scrollbar(){

    for(let bar of progresbar){
        let targetvalue=bar.getAttribute('data-value');
        let currentvalur=0;
        let interval=setInterval(function(){
            if(currentvalur>targetvalue){
                clearInterval(interval);
                return 
            }
            currentvalur++;
            bar.style.width = currentvalur +'%';
        },1);
    }
   

}
function checkscrollbar()
{
    var cordinator=seclectskill.getBoundingClientRect();
    if(cordinator.top<=window.innerHeight && !animationbardone)
    {
        animationbardone=true;
        scrollbar();
    }
    else if(cordinator.top > window.innerHeight){
        animationbardone=false;
        insitianbar();
    }
}


