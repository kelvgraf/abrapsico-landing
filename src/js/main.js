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

