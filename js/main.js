
// TAB
let resourcesBlock = document.querySelector('.resources-content')
let resources = document.querySelectorAll('.resource')
let resourceImages = document.querySelectorAll('.resources .images img')

function hide(){
    resources.forEach((value, index) => {
        value.classList.remove('active')
        resourceImages[index].classList.remove('active')
    })
}
function show(tab, index){
    tab.classList.add('active')
    resourceImages[index].classList.add('active')
}

resourcesBlock.addEventListener('mouseover', (e) => {
    resources.forEach((tab, index) => {
        if(e.target === tab){
            hide()
            show(tab, index)
        }
    })
})