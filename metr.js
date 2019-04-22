console.log('metr.js loaded')

metr=function(){
    // ini
    metr.div=document.getElementById('meTreeDiv')
    if(metr.div){
        console.log('meeTree UI div found, populating it ...')
        metr.loginUI()
    }

    // V2 -- Nickie, this is the new bit, from here downward

    metr.div2=document.body.querySelector('#meTreeDiv2')
    if(metr.div2){
        metr.div2.innerHTML=' Login with <button id="loginV2" style="color:blue;background-color:yellow;font-size:large">V2 API</button>'
        loginV2.onclick=function(){
            location.href='https://metree.familyhistory.duke.edu/v2/login?what_goes_here?'
        }
        
    }


}

metr.loginUI=_=>{
    metr.div.innerHTML='<p>Username:<input id="uname"></p><p>Password: <input type="password"></p><p><button id="loginBt">Login</button></p>'
    document.getElementById('loginBt').onclick=async _=>{
        alert('where should I post this? \nShould I pass uname and passwd in POST body?')
        let apiUrl = ''

        /*
        fetch(`url`,{
            method:"POST",
            mode:"no-cors",
            body=`uname=${uname.value}&passwd=${passwd.value}`
        })
        */
    }
}



window.onload=metr