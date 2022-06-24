const btnLogin = document.getElementById('btnLogin') 
const btnRegister = document.getElementById('btnRegister')

//**********************Register
btnRegister.addEventListener('click',(event)=>{
    let name = document.getElementById('nameUser');  
    let email = document.getElementById('emailUser');
    let phone = document.getElementById('phoneUser') 
    let password = document.getElementById('passwordUser') 
    let confirmPassword = document.getElementById('confirmPassword')
    const dataRegister = {name: name.value, email: email.value, phone: phone.value, password: password.value}


    try{
        event.preventDefault();
        fetch('http://localhost:3001/api/v1/user/register', {
            method: 'POST',
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataRegister)
        })
        .then(res => res.json())
        .then(res=> {
                return console.log(res)
            }
        );
       
    }
    catch(error){console.log(error)}





})


//********************Login
btnLogin.addEventListener('click',(event)=>{
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    const dataLogin = {email: email.value,
            password: password.value 
            }
    try{
        event.preventDefault();
        fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataLogin)
        })
        .then(res => res.json())
        .then(res=> {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
            console.log(res)
            token = res.token
            localStorage.setItem("token", token)
            if(token) window.location.reload();
            }
        );
    }catch(error){console.log(error)} 

}) 



