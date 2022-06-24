const btn = document.getElementById('btn') 

btn.addEventListener('click',(event)=>{
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    const data = {email: email.value,
            password: password.value 
            }


    event.preventDefault();
    fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res=> {
      console.log(res);
    });
    password.value = ""

} )
      
