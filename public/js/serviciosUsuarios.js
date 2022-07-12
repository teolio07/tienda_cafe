let btnLogin = document.getElementById('btnLogin') 
let btnRegister = document.getElementById('btnRegister')
var vali = true
            

//**********************Register
btnRegister.addEventListener('click',(event)=>{
    let avatarUrl = document.getElementById('avatarUser')
    let name = document.getElementById('nameUser');  
    let email = document.getElementById('emailUser');
    let phone = document.getElementById('phoneUser') 
    let password = document.getElementById('passwordUser') 
    let confirmPassword = document.getElementById('confirmPassword')
    const dataRegister = {avatarUrl: avatarUrl.src, name: name.value, email: email.value, phone: phone.value, password: password.value}


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
            if(res.error) return (                
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Something went wrong ',
                    text: res.message || res.error ,
                    showConfirmButton: false,
                    timer: 3000
                })
            ) 
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `welcome ${res.name}`,
                text: 'El registro fue un exito',
                showConfirmButton: false,
                timer: 3000
            })
            if(res.name){ 
                setTimeout(()=>{ 
                    window.location.reload() 
                },1000)
            }           
        });
       
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
// https://tiendacafe.herokuapp.com/api/v1/user/login
        fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataLogin)
        })
        .then(res => res.json())
        .then(res=> {
            if(res.error) return (                
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Something went wrong ',
                    text: res.message || res.error ,
                    showConfirmButton: false,
                    timer: 3000
                })
            ) 
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Welcome ${res.name}`,
                text: res.information ,
                showConfirmButton: false,
                timer: 3000
            })
            let token = res.token
            let nameUser = res.name
            let avatar = res.avatarUrl
            console.log(res)
            sessionStorage.setItem("token", token)
            sessionStorage.setItem("nameUser",nameUser)
            sessionStorage.setItem("avatarUrl", avatar)
 
            if(token){
                setTimeout(()=>{window.location.reload()},2000)
            }            
        });
    }catch(error){console.log(error)} 

}) 


            
let cerrar_sesion = document.getElementById('cerrar_sesion')
let iniciar_sesion = document.getElementById('iniciar_sesion')
let registrarse = document.getElementById('registrarse')
let comentarios = document.getElementById('comentarios')
let token = sessionStorage.getItem('token')
let nameUser = sessionStorage.getItem('nameUser')
let imageAvatar = document.getElementById('imageAvatar')


if(token){ 
    let avatarUrl = sessionStorage.getItem('avatarUrl')
    cerrar_sesion.style.display = 'block'
    comentarios.style.display = 'block'
    iniciar_sesion.style.display = 'none'
    registrarse.style.display = 'none'
    document.getElementById('usuarioLogueado').innerHTML = nameUser 
    imageAvatar.style.width = '100px'
    imageAvatar.style.width = '100px'
    imageAvatar.style.borderRadius = '20px'
    imageAvatar.src = avatarUrl



}else{
    cerrar_sesion.style.display = 'none'
    comentarios.style.display = 'none'
    iniciar_sesion.style.display = 'block'
    registrarse.style.display = 'block'
}

// **********************  Close Login
cerrar_sesion.addEventListener('click',(event)=>{

    sessionStorage.removeItem('token') 
    sessionStorage.removeItem('nameUser')
    sessionStorage.removeItem('avatarUrl')
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Sesion cerrada',
        showConfirmButton: false,
        timer: 3000
    })
    setTimeout(()=>{window.location.reload()},2000)

})

