
const allQuestion__icon = document.querySelectorAll('.question__icon');
const allAnswers = document.querySelectorAll('.answer');
const allQuestions = document.querySelectorAll('.question');

allQuestions.forEach((question , indice )=> {
    question.addEventListener( 'click' , ()=> {
        allAnswers[indice].classList.toggle('active');

        if(allAnswers[indice].className === 'answer active'){
            console.log('verificacion nombre de clase activa');
            allQuestion__icon[indice].setAttribute( 'src' , 'assets/images/icon-minus.svg');
        }
        else {
            allQuestion__icon[indice].setAttribute( 'src' , 'assets/images/icon-plus.svg');
        }

    });
    
});



// const showAnswer = ()=>{
//     answer.classList.toggle('active');

//     if(answer.className === 'answer active'){
//         question__icon.setAttribute( 'src' , 'assets/images/icon-minus.svg');
//     }
//     else {
//         question__icon.setAttribute( 'src' , 'assets/images/icon-plus.svg');
//     }
    
// }

// question.addEventListener( 'click' , showAnswer );
