function toggleNav() {
    var nav = document.getElementById("nav");
    if (nav.className === "nav") {
        nav.className += " responsive";
    }
    else {
        nav.className = "nav";
    }
}

function showBook(x) {
    // console.log(x.childNodes[1].childNodes);
    var img = x.childNodes[1].childNodes[1];
    var article = x.childNodes[1].childNodes[3];
    var book = x.childNodes[1].childNodes[5];

    img.classList.add("hide");
    article.classList.add("hide");
    book.classList.remove("hide");
    book.classList.add("fadeIn");
}

function hideBook(x) {
    // console.log(x);
    var img = x.childNodes[1].childNodes[1];
    var article = x.childNodes[1].childNodes[3];
    var book = x.childNodes[1].childNodes[5];
    img.classList.remove("hide");
    article.classList.remove("hide");
    book.classList.add("hide");
    img.classList.add("fadeIn");
    article.classList.add("fadeIn");
}