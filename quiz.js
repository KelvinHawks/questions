const btn = document.querySelector(".add")
const paraDiv = document.querySelector('.para-div')


btn.addEventListener("click", function(){
        //const question = e.currentTarget.parentElement
        //console.log(question);
        paraDiv.classList.toggle("show-text")
})

//const questions = document.querySelector('para-div')