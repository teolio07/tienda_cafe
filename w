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
        fetch('https://tiendacafe.herokuapp.com/api/v1/user/register', {
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
            console.log(res)
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
        fetch('https://tiendacafe.herokuapp.com/api/v1/user/login', {
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
            console.log(res + 'desde frontend')
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
            sessionStorage.setItem("token", token)
            sessionStorage.setItem("nameUser",nameUser)
            
            if(token){
                setTimeout(()=>{window.location.reload()},2000)
            }            

        });
    }catch(error){console.log(error)} 

}) 


            //change when logging in
let token = sessionStorage.getItem('token')
let nameUser = sessionStorage.getItem('nameUser')
if(token){ 
    document.getElementById('cerrar_sesion').style.display = 'block'
    document.getElementById('comentarios').style.display = 'block'
    document.getElementById('iniciar_sesion').style.display = 'none'
    document.getElementById('registrarse').style.display = 'none'
    document.getElementById('usuarioLogueado').innerHTML =  

    alert('hay token')

}else{
    document.getElementById('cerrar_sesion').style.display = 'none'
    document.getElementById('comentarios').style.display = 'none'
    document.getElementById('iniciar_sesion').style.display = 'block'
    document.getElementById('registrarse').style.display = 'block'
    alert('no hay token')
}



