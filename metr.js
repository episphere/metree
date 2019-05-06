console.log('metr.js loaded')

metr=function(){
    // ini
    metr.div=document.getElementById('meTreeDiv')
    if(metr.div){
        console.log('meeTree UI div found, populating it ...')
        metr.loginUI()
        console.log('clicking in 1 sec ...')
        setTimeout(loginBt.onclick,1000)
    }
}

metr.loginUI=_=>{
    let parms=JSON.parse(localStorage.metree)
    parms.uname=parms.uname||''
    parms.passwd=parms.passwd||''
    metr.div.innerHTML=`<p>Username:<input id="uname" value="${parms.uname}"></p><p>Password: <input id="passwd" type="password" value="${parms.passwd}"></p><p><button id="loginBt">Login</button></p>`
    document.getElementById('loginBt').onclick=async _=>{
        //alert('where should I post this? \nShould I pass uname and passwd in POST body?')
        fetch('https://metree.familyhistory.duke.edu/v2/login',{
            method:"POST",
            mode:'no-cors',
            cache: 'no-cache',
            //referrer: "no-referrer",
            //redirect: "follow",
            credentials: "include",
            body:`username=${uname.value}&password=${passwd.value}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                //'Content-Type': 'application/json',
            }
        }).then(x=>{
            console.log(x)
            //debugger
        })

    }
}



window.onload=metr