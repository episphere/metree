console.log('metr.js loaded')

metr=function(){
    // ini
    metr.div=document.getElementById('meTreeDiv')
    if(metr.div){
        console.log('meeTree UI div found, populating it ...')
        metr.loginUI()
    }
}

metr.loginUI=_=>{
    let auth = JSON.parse(localStorage.metree)
    auth.uname=auth.uname||''
    auth.passwd=auth.passwd||''
    metr.div.innerHTML=`<p>Username: <input id="uname" value="${auth.uname}"></p><p>Password: <input id="passwd" type="password" value="${auth.passwd}"></p><p><button id="loginBt">Login</button></p>`
    document.getElementById('loginBt').onclick=async _=>{
        //alert('Where should I POST this? \nShould I pass uname and passwd in POST body?')
        let url = 'https://metree.familyhistory.duke.edu/v2/login'
        let json = {
            "username":uname.value,
            "password":passwd.value
        }

        fetch(url,{
            method:"POST",
            mode:"no-cors",
            headers:{
                "Content-Type":"application/x-www-form-urlencoded",
                "Accept": "*/*",
                "Cache-Control": "no-cache",
                "Connection": "keep-alive"
            },
            body:JSON.stringify(json)
        }).then(x=>{
            debugger
        })
        
    }
}



window.onload=metr