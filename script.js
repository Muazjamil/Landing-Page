const togglebtn = document.querySelector('.toggle-btn')
const togglebtnIcon = document.querySelector('.toggle-btn i')
const dropdwn = document.querySelector('.drop-dwn')

togglebtn.onclick = function(){
    dropdwn.classList.toggle('open')
    const isOpen = dropdwn.classList.contains('open')

    togglebtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
