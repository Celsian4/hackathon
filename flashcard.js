let generalCards = [
   {
      front: "Algorithm",
      back: "A set of instructions that solves a problem"
   },
   {
      front: "Binary",
      back: "A number system that uses only 0s and 1s. It is the basis for all computers."
   },
   {
      front: "Code",
      back: "A set of instructions that solves a problem, or an algorithm, written in a way that the computer can understand."
   },
   {
      front: "Coding Language",
      back: "A language that is used to write code. Examples include JavaScript, Python, and C++."
   },
   {
      front: "Function",
      back: "A set of instructions that can be called upon to perform a task. Some functions are premade, and others you can code youself."
   },
   {
      front: "Program",
      back: "A set of instructions that solves a problem. It is written in a coding language."
   },
   {
      front: "Software",
      back: "Software are the programs that run on your computer and tell it what to do. Examples include Microsoft Word, Google Chrome, and Spotify."
   },
   {
      front: "Hardware",
      back: "Hardware are the physical parts of a computer. Examples include the keyboard, mouse, and monitor."
   },
   {
      front: "IDE",
      back: "An IDE is an Integrated Development Environment. It is a program that is used to write code. Examples include Visual Studio Code, PyCharm, and Xcode."
   },
   {
      front: "Function",
      back: "A set of instructions that can be called upon to perform a task. Some functions are premade, and others you can code youself."
   },
   {
      front: "Bug",
      back: "A mistake in the code that causes the program to not work as intended. Often called a 'glitch' or 'error'."
   },
]

let dataCards = [
   {
      front: "Data",
      back: "Data is information that is stored in a computer. It can be numbers, text, images, or other types of information."
   },
   {
      front: "Data Type",
      back: "A data type is the specific kind of data being stored. It can be text, charaters, numbers, or other types."
   },
   {
      front: "String",
      back: "A string is a data type that is used to store text. It is often surrounded by quotation marks."
   },
   {
      front: "Boolean",
      back: "A boolean is a data type that is used to store true or false values. It is equivalent to a 1 or a 0 in binary."
   },
   {
      front: "Integer",
      back: "A integer is a data type that is used to store whole numbers. 1, 2, and 928 are all examples of integers."
   },
   {
      front: "Char",
      back: "A char is a data type that is used to store a single character. It is often surrounded by single or double quotation marks."
   },
   {
      front: "Data Collection",
      back: "A Data Collection is the way a program stores data. Some common forms are as a list, an array, or a dictionary."
   },
   {
      front: "List",
      back: "A list is a data collection that stores data in a specific order. It is often used to store a list of items. It is very similar to an array."
   },
   {
      front: "Array",
      back: "An array is a data collection that stores data in a specific order. It is often used to store a list of items. It is very similar to a list."
   },
   {
      front: "Dictionary",
      back: "A dictionary is a data collection that stores data by a key, which can be a string, number, or other data types."
   },
   {
      front: "Variable",
      back: "A variable is a way to store data in a program. It is a name that is used to refer to a specific piece of data."
   },
]

let javaCards = [
   {
      front: "Java",
      back: "Java is a coding language that is used to write programs. It is a very common lanaguage used in a variety of applications."
   },
   {
      front: "Object",
      back: "An object is a a way to organize data and functions. It can be used to represent a real world object, such as a person or a car."
   },
   {
      front: "Class",
      back: "A class is a blueprint for an object. It is used to define the properties of an object and what it can do."
   },
   {
      front: "Subclass",
      back: "A subclass is a class that has the same properties of another class. It is a way to extend the functionality of a class and add a bit on to it."
   },
   {
      front: "Object Oriented Programming",
      back: "Object Oriented Programming is a way of writing code that is based on objects. It is a common way to write code in Java."
   },
   {
      front: "Inheritance",
      back: "Inheritance is when a subclass inherits the properties of a class. It gives the subclass all the sames methods and variables."
   },
   {
      front: "Encapsulation",
      back: "Encapsulation is when a class hides data from the user or other programs. It is a way to protect data from being changed."
   },
   {
      front: "Exception",
      back: "An exception is an error that occurs when a program is running. It is a way to handle errors in Java."
   },
   {
      front: "Method",
      back: "A method is a function that is part of a class. It is used to perform a specific task."
   },
   {
      front: "Package",
      back: "A package is a collection of code. Many packages exist which are used to add functionality to a program."
   }
]

let htmlCssCards = [
   {
      front: "Webpage",
      back: "A webpage is a document that is displayed in a web browser. It is written in HTML and CSS."
   },
   {
      front: "HTML",
      back: "HTML (HyperText Markup Language) is a coding language that is used to write web pages. It is used to define the structure of a web page."
   },
   {
      front: "CSS",
      back: "CSS is a coding language that is used to write web pages. It is used to define the style of a web page."
   },
   {
      front: "Stylesheet",
      back: "A stylesheet is a file that contains CSS code."
   },
   {
      front: "Tag",
      back: "A tag is a piece of code that is used to define the structure of a web page. It is surrounded by angle brackets."
   },
]

if(localStorage.getItem("TOPIC") == "generalCoding") {
   cards = [...generalCards];
   length = generalCards.length;
   progress = document.getElementById("generalProgress");
}
if(localStorage.getItem("TOPIC") == "dataTerms") {
   cards = [...dataCards];
   length = dataCards.length;
   progress = document.getElementById("dataProgress");
}
if(localStorage.getItem("TOPIC") == "javaTerms") {
   cards = [...javaCards];
   length = javaCards.length;
   progress = document.getElementById("javaProgress");
}
if(localStorage.getItem("TOPIC") == "htmlCss") {
   cards = [...htmlCssCards];
   length = htmlCssCards.length;
   progress = document.getElementById("htmlCssProgress");}

let currentCard = 1,
   carousel = document.querySelector(".flashcard-carousel"),
   next = document.querySelector(".next"),
   prev = document.querySelector(".prev");
   trained = document.querySelector(".learned");

renderCards();

function renderCards() {
carousel.style.width = `${cards.length}00vw`;
cards.map(el => {
   let div = document.createElement("div");
   div.classList.add("card");
   let front = document.createElement("div");
   front.classList.add("front");
   let back = document.createElement("div");
   back.classList.add("back");
   front.textContent = el.front;
   back.textContent = el.back;
   div.appendChild(front);
   div.appendChild(back);
   div.addEventListener("click", function(e) {
      e.target.parentNode.classList.toggle("active");
   });
   carousel.appendChild(div);
});
}

function removeAllChildNodes(parent) {
while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
}
}

next.addEventListener("click", function(e) {
   if (currentCard >= cards.length) {currentCard=0;}
   currentCard++;
   cardFly();
});

prev.addEventListener("click", function(e) {
   if (currentCard - 1 <= 0) {currentCard = cards.length -1 ;}
   currentCard--;
   cardFly();
});

trained.addEventListener("click", function(e) {
   if(currentCard == cards.length-1) {
      cards.pop()
      currentCard--;
   }
   else {
      cards[currentCard-1] = cards.pop()
   }

   if(cards.length == 1) {
      cards.pop()
      cards.add({
         front: "You're done!",
         back: "You've learned all the cards in this deck. You can go back and choose a different topic."
      });
   }
   
   removeAllChildNodes(carousel);
   renderCards();
});

function cardFly() {
   carousel.style.transform = `translateX(-${currentCard - 1}00vw)`;
}

function updateProgress() {
   progress.style.width = (Math.ceil(100, ((length-cards.length)/length)*100)).toString + "%";
}
 