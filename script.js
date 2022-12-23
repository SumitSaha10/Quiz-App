let question = [
    {
        'que':"What is HTML",
        'a':"Programming Language",
        'b':"Markup Language",
        'c':"Style Language",
        'd':"Scripting Language",
        'correct':'b'
    },
    {
        'que':"Who is the founder of JAVA",
        'a':"Dennis Ritchie",
        'b':"Guido van rossan",
        'c':"Charles Babage",
        'd':"James Gosline",
        'correct':'d'
    },
    {
        'que':"CSS stands for",
        'a':"Cascading Style Sheet",
        'b':"Common songs sheet",
        'c':"Charles Babage",
        'd':"James Gosline",
        'correct':'a'
    },
    {
        'que':"Who is the founder of C",
        'a':"Dennis Ritchie",
        'b':"Guido van rossan",
        'c':"Charles Babage",
        'd':"James Gosline",
        'correct':'a'
    }

]

let index = 0;

let right = 0;
let total = question.length;
let radios = document.querySelectorAll("input");

const  populateQuestion=(index)=>{
    title.innerHTML = question[index].que;
    option1.innerHTML = question[index].a;
    option2.innerHTML = question[index].b;
    option3.innerHTML = question[index].c;
    option4.innerHTML = question[index].d;
}

populateQuestion(index);


btn.addEventListener("click",()=>{
    
    
        if (radios[0].checked || radios[1].checked || radios[2].checked || radios[3].checked) {
            checkAnswer();
            index++;
            if (index==question.length) {
                container.innerHTML = `<h1>Your score is ${right} out of ${total}</h1><br>
                <p>Thanks for answering</p>`
            }
            populateQuestion(index);
            radios.forEach((e)=>{
                if (e.checked) {
                    e.checked = false;
                }
            })
            
        }
   
    else{

        alert("Select any option")
    }
    
})

const checkAnswer =()=>{
    
    radios.forEach((e)=>{
        if (e.checked && question[index].correct == e.id) {
            right++;
        }
    })
}