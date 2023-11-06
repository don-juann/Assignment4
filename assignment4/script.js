window.addEventListener("scroll", function () {
    let scrollToTopButton = document.querySelector(".scrollTop");

    if (window.pageYOffset > 600) {
         scrollToTopButton.style.display = "block";
    } else {
         scrollToTopButton.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({
         top: 0,
         behavior: "smooth"
    });
}

function getCurrentURL() {
  //snippet number 1
  const currentUrl = window.location.href;
  alert("Current URL: " + currentUrl);
}


const paperPlane = document.getElementById('paper-plane');
paperPlane.addEventListener('mouseover', launchPaperPlane);
function launchPaperPlane() {
     paperPlane.style.transform = `translate(${window.innerWidth}px, ${120}px)`;
     setTimeout(() => {
     paperPlane.remove();
     }, 2000);
}

function playAudio(){
     //snippet number 2
     const mySound = new Audio('src/advice.mp3');
     mySound.play();
}

document.getElementById("name").addEventListener("keypress", changeColorName);
function changeColorName() {
     document.getElementById("name").style.backgroundColor = "gray";
}

document.getElementById("email").addEventListener("keypress", changeColorEmail);
function changeColorEmail() {
     document.getElementById("email").style.backgroundColor = "gray";
}

document.getElementById("phone").addEventListener("keypress", changeColorPhone);
function changeColorPhone() {
     document.getElementById("phone").style.backgroundColor = "gray";
}   


document.getElementById('thebutton').addEventListener('click', displayData);

function displayData(){
     var thename = document.getElementById('thename');
     var theemail = document.getElementById('theemail');
     var thephone = document.getElementById('thephone');
     var fullname = document.getElementById('name').value;
     var namearray = fullname.split(' ');

     const Person = {
          firstName: namearray[0],
          lastName: namearray[1],
          Email: document.getElementById('email').value,
          Phone: document.getElementById('phone').value
     }

     if ( isOfType('string')(Person.firstName) && isOfType('string')(Person.lastName) &&
          !isEmpty(Person.firstName) && !isEmpty(Person.lastName)
        ) {
          thename.textContent = "Your name is " + Person.firstName + " and surname is " + Person.lastName;
        } else {
          thename.textContent = "Incorrect input. Try Again.";
        }
      
        if (isOfType('string')(Person.Email) && !isEmpty(Person.Email)) {
          theemail.textContent = "Your Email is " + Person.Email;
        } else {
          theemail.textContent = "Incorrect input. Try Again.";
        }
      
        if (isOfType('string')(Person.Phone) && !isEmpty(Person.Phone)) {
          thephone.textContent = "Your Phone is " + Person.Phone;
        } else {
          thephone.textContent = "Incorrect input. Try Again.";
        }
}

//snippet number 3
const isOfType = ((type) => (x) => {
     switch (type) {
       case 'string':
         return typeof x === 'string' || x instanceof String;
       case 'number':
         return typeof x === 'number' || x instanceof Number;
       case 'boolean':
         return typeof x === 'boolean' || x instanceof Boolean;
       case 'array':
         return Array.isArray(x);
       case 'object':
         return ({}).toString.call(x) === '[object Object]';
       default:
         return false;
     }
});

//snippet number 4
const isEmpty = (x) => {
     if (Array.isArray(x) || typeof x === 'string' || x instanceof String) {
       return x.length === 0;
     }
     if (x instanceof Map || x instanceof Set) {
       return x.size === 0;
     }
     if (({}).toString.call(x) === '[object Object]') {
       return Object.keys(x).length === 0;
     }
     return false;
};

//snippet number 5
function pickDS(){
     const ds = ["Randy Lao", "Alex S. Pentland", "Kyle McKiou", "Geoffrey Hinton"];
     var result = document.getElementById("randomDS");
     let maxNum = ds.length;
     let randomNum = Math.floor(Math.random() * maxNum);
     let num = randomNum % 4;

     result.textContent = "You Randomly Picked - " + ds[num];
}
