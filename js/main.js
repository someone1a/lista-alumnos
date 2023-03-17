let add = () => {
    let nombre = document.getElementById("name").value
    let apellido = document.getElementById("lastname").value
    let edad = document.getElementById("age").value
    let email = document.getElementById("email").value
    let app = document.getElementById("app")
    let li = document.createElement('li')
    li.innerHTML= `${nombre}, ${apellido}, ${edad}, ${email}`
    app.appendChild(li)
}