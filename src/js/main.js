function openMenu(){
    if (document.querySelector('.header--container_container--navegation').style.display === 'flex'){
        document.querySelector('.header--container_container--navegation').style.display = 'none'
    }
    else{
        document.querySelector('.header--container_container--navegation').style.display = 'flex'
        document.getElementById('menu-hamburguer').style.display = 'none'
        document.getElementById('close-hamburguer').style.display = 'flex'
    }
}
function closeMenu(){
    if (document.querySelector('.header--container_container--navegation').style.display === 'flex'){
        document.querySelector('.header--container_container--navegation').style.display = 'none'
        document.getElementById('menu-hamburguer').style.display = 'flex'
        document.getElementById('close-hamburguer').style.display = 'none'
    }
}