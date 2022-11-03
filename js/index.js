var userNameInput = document.getElementById('userNameInput');
var userEmailInput = document.getElementById('userEmailInput');
var userPasswordInput = document.getElementById('userPasswordInput');
var fillAlert = document.getElementById('fillAlert');
var loginAlert = document.getElementById('loginAlert');
var logoutUser = document.getElementById('logoutUser');
var finishSignUp = document.getElementById('finishSignUp');
var data = document.getElementById('data');
var welcomeUserName = document.getElementById('welcomeUserName');
var userInfo = [] ;


if(localStorage.getItem("userInfo") !=null){
    userInfo = JSON.parse(localStorage.getItem('userInfo'))
 }
 function userData(){
    if (userNameInput.value =='' | userEmailInput.value =='' | userPasswordInput=='') {
        return false
    
    } else {
        return true
        
    }
}
 
function signUpUser(){
    if (userData()==false) {
        finishSignUp.classList.replace('d-block','d-none');

    } else {
        finishSignUp.classList.replace('d-none','d-block');

        var user = {
            name : userNameInput.value ,
            email : userEmailInput.value ,
            password : userPasswordInput.value ,
        
        }
        
        userInfo.push(user);
        localStorage.setItem('user', JSON.stringify(userInfo))
        console.log(userInfo);
        finishSignUp.classList.replace('d-none','d-block');
    }
    userData()
    clearForm()

}

var data = localStorage.getItem("user")
function signInUser() {
    if(localStorage.getItem('user') != null){

    userInfo = JSON.parse(localStorage.getItem('user'));

    for (var i = 0; i < userInfo.length; i++) {
        console.log(userInfo[i])


        if (userInfo[i].email== userEmailInput.value && userInfo[i].password == userPasswordInput.value)
        { console.log('login'); 
        loginAlert.classList.replace('d-block','d-none');

           window.location.href = 'welcome.html';
           console.log(userInfo[i].name);
            data = 'welcome'+userInfo[i].name ;
            document.getElementById('welcomeUserName').innerHTML =data ;
        
        }
         else{
            console.log('error');
            loginAlert.classList.replace('d-none','d-block');
         }
    }
}

}



function logOut(){
    window.location.href = 'index.html';
    
    

}

    function clearForm() {
        userNameInput.value = '' ;
        userEmailInput.value = '' ;
        userPasswordInput.value = '' ;
     
     }



userEmailInput.onkeyup = function (){
    var emailRejex = /^[a-z]{1,5}@(yahoo|gmail|ymail)\.com$/i;

    if (emailRejex.test(userEmailInput.value)) {
        userEmailInput.classList.add('is-valid');
        userEmailInput.classList.remove('is-invalid');
        emailAlert.classList.replace('d-block','d-none')

    } else {

        userEmailInput.classList.add('is-invalid');
        userEmailInput.classList.remove('is-valid');
        emailAlert.classList.replace('d-none','d-block')
    }
    
}
userNameInput.onkeyup = function ()
{
    var nameRejex = /^[A-Z]/;

    if (nameRejex.test(userNameInput.value)) {
        userNameInput.classList.add('is-valid');
        userNameInput.classList.remove('is-invalid');
        nameAlert.classList.replace('d-block','d-none')

    } else {

        userNameInput.classList.add('is-invalid');
        userNameInput.classList.remove('is-valid');
        nameAlert.classList.replace('d-none','d-block')
    }
    
    
}

userPasswordInput.onkeyup = function ()
{
    var passRejex = /[0-9]{5}/;

    if (passRejex.test(userPasswordInput.value)) {
        userPasswordInput.classList.add('is-valid');
        userPasswordInput.classList.remove('is-invalid');
        passAlert.classList.replace('d-block','d-none')

    } else {

        userPasswordInput.classList.add('is-invalid');
        userPasswordInput.classList.remove('is-valid');
        passAlert.classList.replace('d-none','d-block')
    }
    
    
}

// function welcomeUserName(){
    
    
//     document.getElementById('welcomeUserName').innerHTML ='welcome'+ data;
// }
// var data = 'welcome';

// document.getElementById('welcomeUserName').innerHTML = data;



//  data='welcome'
//  welcomeUserName.innerHTML = data;

 
//  for (var i = 0; i < userInfo.length; i++) {
//     newData = data+userInfo[i].name;
//     console.log(newData);
//     welcomeUserName.innerHTML = newData;

// }


// if(localStorage.getItem('user') != null){
//     userInfo = JSON.parse(localStorage.getItem('user'));
//     // signUpUser()
//     signInUser()
    
//     }      

                // var welcomeUserName = '';
    // for (var i = 0; i < userInfo.length; i++) {
    //     welcomeUserName='welcome'+ userNameInput.value 
    

    // }
    // document.getElementById('welcomeUserName').innerHTML = userNameInput ;

       