console.log('metr.js leaded');

metr=function(){
    // UI
    metr.div=document.body.querySelector('#meTreeDiv')
    if(metr.div){
        var h = '<a href="https://github.com/episphere/metree" target="_blank"><img src="FHH_logo.png" height="40px"></a> <p style="color:green">coming soon ...</p>'
        h +='API status <input>'
        //h +='<textarea style="background-color:black"></textarea>'
        metr.div.innerHTML=h
    }


}

metr.date=Date()

window.onload=metr