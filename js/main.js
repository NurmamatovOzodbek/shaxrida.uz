// let slides = document.querySelectorAll(".slide")
// let btnPrev = document.querySelector(".prev__btn")
// let btnNext = document.querySelector(".next__btn")
// let count = 0
// // console.log(slides,btnNext,btnPrev)


// btnNext.addEventListener('click', () => {
//   // console.log("next")
//   if(count > slides.length - 2){
//     count = 0
// }
// else{
//     count++
// }
//     hide()
//     showAll(count)
//   // slides.forEach(slide => {
//   //   slide.classList.add('active')
//   // })
// })

// btnPrev.addEventListener('click', () => {
//   // console.log("prev")
//   if(count <= 0){
//     count = slides.length - 1
//   }
//   else{
//       count--
//   }
//     hide()
//     showAll(count)
// })
// function hide() {
//   slides.forEach((txtContent) =>{

//       txtContent.classList.remove('active')
//   })
// }
// function showAll(i = 0) {
//   slides[i].classList.add('active')
// }

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