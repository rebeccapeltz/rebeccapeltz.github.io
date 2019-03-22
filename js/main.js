
let runHighlighter = true
let highlighter = undefined
let counter = 0
function highlightSkills() {
  let devIcons = document.querySelectorAll(".dev-icons .list-inline-item i")
  highlighter = setInterval(function(){
    if (counter === devIcons.length) {
      counter = 0
    }
    if (counter === 0){
      last = devIcons.length - 1
    } else {
      last = counter - 1
    }

    devIcons[last].style.color = "#868e96" // gray
    devIcons[counter].style.color = "red"
    counter = counter + 1
  },1000)
}
//toggle classes
function switchClass(el, class1, class2){
  if (el.hasClass(class1)){
    el.removeClass(class1)
    el.addClassList(class2)
  } else {
    el.removeClass(class2)
    el.addClassList(class1)
  }

}
document.addEventListener("DOMContentLoaded",event =>{
  // highlighter = highlightSkills()
  let switchHighlighter = document.querySelector(".switch-highlighter")
 
  switchHighlighter.style.cursor = "hand" ///// ???
  switchHighlighter.addEventListener('click',event=>{
    console.log("highlighter switch clicked")
    // turn on intervals/turn off intervals
    // switchClass(switchHighlighter,"turn-on","turn-off")
    // if (switchHighlighter.style.color === "red") switchHighlighter.style.color = "lime" // toggle 
    // else switchHighlighter.style.color = "red"
  })
  
})