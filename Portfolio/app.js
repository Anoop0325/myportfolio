const questions = [{
    'que':'Which of the following is a markup language?',
    'a':'HTML',
    'b':'CSS',
    'c':'JavaScript',
    'd':'Java',
    'correct':'a'
   },

   {
    'que':'Which language is used for styling websites?',
    'a':'HTML',
    'b':'CSS',
    'c':'JavaScript',
    'd':'Java',
    'correct':'b'
   },

   {
    'que':'What is the full form of HTML?',
    'a':'Hyper Text Mark Language',
    'b':'Hyper Text Makeup Language',
    'c':'Hyper Text Markup Language',
    'd':'Hyper Text Machine Language',
    'correct':'c'
   },

   {
    'que':'The first version of HTML was written in ____?',
    'a':'1991',
    'b':'1994',
    'c':'1992',
    'd':'1993',
    'correct':'d'
   }
]
let index = 0;
let total = questions.length;
let right =0, 
    wrong =0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = questions[index]
    console.log(data)
    quesBox.innerText = ` ${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () =>{
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQestion();
    return;
}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () =>{
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h3> Thank You for playing the Quiz...</h3>
    <h2> ${right} / ${total} are correct </h2>
    `
}
//initial call
loadQestion();