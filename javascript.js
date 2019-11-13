// Select DOM objects by id
const container = document.querySelector('#container');

let btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

let btn2 = document.querySelector('#btn2');
btn2.addEventListener ('click', () => {
    alert("HELLO WORLD!!!");
});

//Using named functions for events is highly recommended
function alertFunction() {
    alert("YAY!  YOU DID IT!!");
};

let btn3 = document.querySelector('#btn3');
btn3.addEventListener ('click', alertFunction);

//Event listener target details passed with function
let btn4 = document.querySelector('#btn4');
btn4.addEventListener ('click', function(e){
    console.log(e.target)
    e.target.style.background = 'blue';
});

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "This is the glorious text-content!"

const redP = document.createElement('p');
redP.classList.add('red-p');
redP.textContent = "Hey I'm red!"
redP.style.color = "red";

const blueH3 = document.createElement('h3');
blueH3.classList.add('blue-h3');
blueH3.textContent = "I'm a blue H3!";
blueH3.style.color = "blue";

const innerH1 = document.createElement('h1');
innerH1.classList.add('inner-h1');
innerH1.textContent = "I'm inside a div!";

const innerP = document.createElement('p');
innerP.classList.add('inner-p');
innerP.textContent = "Me too!";

const secondDiv = document.createElement('div');
secondDiv.setAttribute('style','border: 5px solid black; background-color: pink; border-radius: 10px; padding: 10px 10px 10px 10px');
secondDiv.classList.add('second-div');
secondDiv.appendChild(innerH1);
secondDiv.appendChild(innerP);

container.appendChild(content);
container.appendChild(redP);
container.appendChild(blueH3);
container.appendChild(secondDiv);
