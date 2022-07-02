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
            console.log(res)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Welcome ${res.name}`,
                text: res.information ,
                showConfirmButton: false,
                timer: 3000
            })
            token = res.token
            localStorage.setItem("token", token)
            if(token){
                //aca validamos si hay token y escondemos el registrar e iniciar con la clase .mostrar
                /* document.querySelectorAll(".mostrar").style.display="none" */
                
                
                setTimeout(()=>{window.location.reload()},2000)

                
                 
       
            }else{
                // de lo contrario quedara escondido el comentario y el cerrar sesion con la clase ocultar
                /* document.querySelectorAll(".ocultar").style.display="none" */
            }
            
            
        
        

        });
    }catch(error){console.log(error)} 

}) 
//cree un if si en el localstorage hay un token entonces va a esconder el iniciar sesion y registrarse
if(localStorage.length>0){
    document.querySelectorAll(".mostrar").style.display="none"

//si no hay token entonces el comentarios y cerrar sesion se van a esconder
}else{document.querySelectorAll(".ocultar").style.display="none"

}
//aca esta la funcion de cerrar sesion que quita el cerrar sesion y comentario y pone registrarse e iniciar sesion
const cerrar=()=>{
    document.querySelectorAll(".ocultar").style.display="none"
    document.querySelectorAll(".mostrar").style.display=""
    localStorage.removeItem("token")



}
esconder=document.getElementById("cerrar_sesion")
esconder.addEventListener("click",cerrar)




