console.log('works')
const linkContact = document.querySelector('#link-contacto');
const divContacto = document.querySelector('.email-insta');

linkContact.addEventListener('click', mostrarContacto)

function mostrarContacto(){
    if (divContacto.style.top === "50px") {
        divContacto.style.top = "250px";
    } else {
        divContacto.style.top = "50px";
    }
}
    



    