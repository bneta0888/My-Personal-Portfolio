// Tab functionality
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabName) {
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-tab");
    }

    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active-link");
    }

    document.getElementById(tabName).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}

// Add event listeners to tab links
for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener("click", function() {
        var tabName = this.textContent.toLowerCase();
        opentab(tabName);
    });
}

// Side menu functionality
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// Form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbyR3Ip--XTzu4YC1u2RkWYKvPz70qIC3ZsIp3scAbT4CKHV0K8ymbOHuRBWwqehbuQO/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function(){
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});