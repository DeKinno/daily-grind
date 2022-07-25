
//alert("It's working");

    /*
    - One unique image, with appropriate 
    and matching content in the alt tag. 
    - A paragraph or two of content that 
    describes the daily item (paragraph 
    must include the name of the highlighted weekday)
    - A unique color that supports the image 
    and paragraph of content
    Here are the items we need to change for each coffee:
    - image - src of pic
    - alt - alt tag of pic
    - description - a paragraph of content about the cofee 
    - name - a color representing the cofee
    - we may also use the folllowing, but not part of the coffee itself
    - today - current day of the week
    */


    function coffeeTemplate(coffee){
        let myReturn = "";

        myReturn += 
        `
            <p>
                <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee-cup"/>
                <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}!
            </p>
        
        
        `;


        return myReturn;
    }



let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

//let myPic = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){       // data available? show data from url
    myDay = urlParams.get("day");

}
//converts to integer.
myDay = parseInt(myDay);

switch(myDay){

    case 0:
        today = "Sunday";
        coffee = {
        color: "green",
        name: "Frappaccino",
        pic: "images/frappaccino.jpg",
        alt: "A picture of a Frappaccino",
        day: "Sunday",
        desc: `I love Frappaccino's!`
        };
        
    break;

    case 1:
        today = "Monday";
        coffee = {
        color: "black",
        name: "Cold Brew",
        pic: "images/cold-brew.jpg",
        alt: "A picture of a cold brew",
        day: "Monday",
        desc: `I love cold brew!`
        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
        color: "brown",
        name: "Mocha",
        pic: "images/mocha.jpg",
        alt: "A picture of a Mocha",
        day: "Tuesday",
        desc: `I love Mocha!`
        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
        color: "pink",
        name: "Bubble tea",
        pic: "images/bubble-tea.jpg",
        alt: "A picture of a bubble tea",
        day: "Wednesday",
        desc: `I like me some Bubble Tea!`
        };
    break;

    case 4:
        today = "Thursday";
        coffee = {
        color: "Burgundy",
        name: "Caramel latte",
        pic: "images/caramel-latte.jpg",
        alt: "A picture of a caramel latte",
        day: "Thursday",
        desc: `I love caramel lattes!`
        };
    break;

    case 5:
        today = "Friday";
        coffee = {
        color: "blue",
        name: "Drip",
        pic: "images/drip.jpg",
        alt: "A picture of a drip coffee",
        day: "Friday",
        desc: `I love drip coffee!`
        };
    break;

    case 6:
        today = "Saturday";
        coffee = {
        color: "orange",
        name: "Pumpkin Spice Latte",
        pic: "images/pumpkin-spice-latte.jpg",
        alt: "A picture of a pumpkin spce latte",
        day: "Saturday",
        desc: `I love pumpkin spce latte!`
        };
    break;

   default: 
   today = "Something went wrong!";
   
   }
//    coffeeData = coffeeTemplate(coffee);
//    alert(coffeeData);

   //load coffee data to page 
   document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

   document.querySelector("html").style.backgroundColor = coffee.color;

   console.log(coffee);

