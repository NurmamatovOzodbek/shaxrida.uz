let slides = document.querySelectorAll(".slide")
let btnPrev = document.querySelector(".prev__btn")
let btnNext = document.querySelector(".next__btn")
let count = 0
// console.log(slides,btnNext,btnPrev)


btnNext.addEventListener('click', () => {
  // console.log("next")
  if(count > slides.length - 2){
    count = 0
}
else{
    count++
}
    hide()
    showAll(count)
  // slides.forEach(slide => {
  //   slide.classList.add('active')
  // })
})

btnPrev.addEventListener('click', () => {
  // console.log("prev")
  if(count <= 0){
    count = slides.length - 1
  }
  else{
      count--
  }
    hide()
    showAll(count)
})
function hide() {
  slides.forEach((txtContent) =>{
    
      txtContent.classList.remove('active')
  })
}
function showAll(i = 0) {
  slides[i].classList.add('active')
}