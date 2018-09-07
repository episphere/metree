console.log('metr.js leaded');

metr=function(){
    // UI
    metr.div=document.body.querySelector('#meTreeDiv')
    if(metr.div){
        var h = '<a href="https://github.com/episphere/metree" target="_blank"><img src="fhh_metreelogo.png" height="40px"></a> <p style="color:green">coming soon ...</p>'
        h +='<button id="testAPIbutton">test API</button> <input id="testAPIinput" size="70" value="http://test.metree.lgs.littlegreensoftware.com:8888/family/load">'
        h +='<div id="testResults"></div>'
        metr.div.innerHTML=h
        // events
        var testAPIbutton=metr.div.querySelector('#testAPIbutton')
        testAPIbutton.onclick=function(){
            var testAPIinput=metr.div.querySelector('#testAPIinput')
            var url=testAPIinput.value
            metr.get(url,function(x){
                var testResults=metr.div.querySelector('#testResults')
                testResults.innerHTML='<pre>'+JSON.stringify(x,null,3)+'</pre>'
            })
            //debugger
        }

    }
}

metr.fun={}
metr.tCall={} // time to callback

metr.get=function(url,fun){
    var id = Math.random().toString().slice(2)
    fun=fun||console.log
    fun2=function(x){
        metr.tCall[id]=false // stop timout
        fun(x)
    }
    var s = document.createElement('script')
    s.id='fun_'+id
    s.src=url+'?callback=metr.fun['+id+']'
    metr.fun[id]=fun2
    metr.tCall[id]=true
    setTimeout(function(){
       if(metr.tCall[id]){
           fun({error:'your session timed out, you need to <a href="" target="_blank">login again</a>'})
           var testResults=metr.div.querySelector('#testResults')
           ifr=document.createElement('iframe')
           ifr.src='http://test.metree.lgs.littlegreensoftware.com:8888/login'
           ifr.width="100%"
           ifr.height=500
           testResults.appendChild(ifr)
       }
    },2000)
    document.head.appendChild(s)
}

metr.date=Date()

window.onload=metr