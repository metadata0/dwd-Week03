var request = new XMLHttpRequest();
var displayText = "";

function callRandomFact(){
    request.open("GET", "https://uselessfacts.jsph.pl/api/v2/facts/random", true);

    request.onload = function() {
        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400){
            // console.log(data.text);
            displayText = data.text;
            push();
        }
        else {
            // console.log(error);
            displayText = "error";
        }
    }
    request.send();
}

callRandomFact();

var bannerText = "";

function push(){
    // console.log(displayText);

    var temp = document.getElementById("randomFact");
    temp.innerHTML = displayText;
}


//https://plainenglish.io/blog/how-to-get-the-id-of-the-clicked-element-in-the-javascript-click-handler-8ca398d848d6

const buttonOnClick = (event) => {
    if (event.target.nodeName === 'BUTTON') {
        bannerText = event.target.innerHTML;
        callBanner(bannerText);
        callRandomFact();

        console.log(bannerText);
    }
}

const animationEnd = (event) => {
    event.target.parentNode.removeChild(this);
}

window.addEventListener('click', buttonOnClick);

window.addEventListener('animationend', animationEnd);

//create floating banner
function callBanner(content) {
    let targetElement = document.querySelector('#floatingBanner');
    
    //create element + textnode
    let bannerElement = document.createElement("div");
    let textNode = document.createTextNode(content);


    //Add banner class to bannerElement, and append textnode
    bannerElement.classList.add("banner");

    bannerElement.appendChild(textNode);

    // console.log(bannerElement);
    if (bannerElement !== undefined){
        targetElement.appendChild(bannerElement);
    }
    return

}
