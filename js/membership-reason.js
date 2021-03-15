var textElem = document.getElementById("member-reasons");

function typeWord(word, current) {
    textElem.textContent = current;

    if (current.length == word.length) {
        return
    }
    
    current += word[current.length];
    setTimeout(function() {
        typeWord(word, current);
    }, 20);
}

window.onload = function() {
    let reasons = ["En stark gemenskap över klassgränser.",
                    "Gratis tillgång till roliga event.",
                    "Allmänt nice!"
    ];

    let n = reasons.length;
    typeWord(reasons[0], "");
    let index = 1;
    

    setInterval(function() {
        typeWord(reasons[index], "");
        index = (index + 1) % n;
    }, 5000);


}

var registerButton = document.getElementById("member-link-button");
registerButton.onclick = function() {
    window.location='http://www.google.com';
}
