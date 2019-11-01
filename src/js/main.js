

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

let underlineItemIdentity = document.getElementById('li--underlineItemIdentity')
let underlineIdentity = document.getElementById('underlineIdentity')

let underlineItemServises = document.getElementById('li--underlineItemServises')
let underlineServises = document.getElementById('underlineServises');

let underlineItemSchedule = document.getElementById('li--underlineItemSchedule')
let underlineSchedule = document.getElementById('underlineSchedule');

let underlineItemContact = document.getElementById('li--underlineItemContact')
let underlineContact = document.getElementById('underlineContact');

// console.log(underlineItemIdentity)
underlineItemIdentity.addEventListener('mouseover', function(){
    // console.log(underlineIdentity)
    underlineIdentity.setAttribute('class', 'box--list_iten--listUnderline')
})
underlineItemIdentity.addEventListener('mouseout', function(){
    underlineIdentity.setAttribute('class', 'box--list_iten--listUnderlineNone')
})
// ---------------- --------------------
underlineItemServises.addEventListener('mouseover', function(){
    // console.log(underlineServises)
    underlineServises.setAttribute('class', 'box--list_iten--listUnderline')
})
underlineItemServises.addEventListener('mouseout', function(){
    underlineServises.setAttribute('class', 'box--list_iten--listUnderlineNone')
})
// ----------------- --------------------
underlineItemSchedule.addEventListener('mouseover', function(){
    // console.log(underlineSchedule)
    underlineSchedule.setAttribute('class', 'box--list_iten--listUnderline')
})
underlineItemSchedule.addEventListener('mouseout', function(){
    underlineSchedule.setAttribute('class', 'box--list_iten--listUnderlineNone')
})
// ----------------- --------------------
underlineItemContact.addEventListener('mouseover', function(){
    // console.log(underlineContact)
    underlineContact.setAttribute('class', 'box--list_iten--listUnderline')
})
underlineItemContact.addEventListener('mouseout', function(){
    underlineContact.setAttribute('class', 'box--list_iten--listUnderlineNone')
})

function handleText(item) {
    const text = document.getElementById('texto');
    function init () {
        switch (item) {
        case 'first-text':
            return 'Se você perceber que seus pensamentos o impedem de viver a vida normalmete. Por exemplo, você pensa constantemente sobre situações catastróficas, fica obcecado com uma ideia ou expectativa ruim. A terapia psicológica emprega técnicas muito úteis para resolver estes problemas.';
        case 'second-text':
            return '222222222222';
        case 'third-text':
            return '33333333333';
        case 'fourth-text':
            return '44444444444';
        case 'fifth-text':
            return '555555555555';
        }
    }

    text.innerHTML = init();
}
