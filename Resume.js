var navManuAcrTag=document.querySelectorAll('.horizontal-list a');

for(var i=0;i<navManuAcrTag.length;i++)
{
    navManuAcrTag[i].addEventListener('click',function(event){
        event.preventDefault();
        var slectorid=this.textContent.trim().toLowerCase();
        var targetslectorid=document.getElementById(slectorid);
        var targetsectoncordinates=targetslectorid.getBoundingClientRect();
        var interval=setInterval(function(){
          var targetsectoncordinates=targetslectorid.getBoundingClientRect();
        
          if(targetsectoncordinates.top<=0)
                  {
                    clearInterval(interval);
                    return;
                  }
                window.scrollBy(0,50);
                }, 20);
        
    });

}