
let form=document.getElementById('form')

form.addEventListener('submit',function(event){
    event.preventDefault()

    let username= document.getElementById('username').value

    console.log(username)

    let password=document.getElementById('password').value
    console.log(password)

})