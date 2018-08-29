console.log('metr.js leaded');

metr=function(){
    // UI
    metr.div=document.body.querySelector('#meTreeDiv')
    if(metr.div){
        metr.div.innerHTML='<a href="https://github.com/episphere/metree" target="_blank"><img src="FHH_logo.png" height="25px"></a> is coming'
    }


}

metr.date=Date()

window.onload=metr