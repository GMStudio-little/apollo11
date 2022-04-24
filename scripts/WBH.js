function Test(name) {
    switch (name) {
        case 0:
            document.getElementById('women').style.display = "none";
            document.getElementById('kid').style.display = "none";
            document.getElementById('men').style.display = "flex";
            document.getElementById('womenText').style.color = "grey";
            document.getElementById('womenText').style.fontWeight = "normal";
            document.getElementById('kidText').style.color = "grey";
            document.getElementById('kidText').style.fontWeight = "normal";
            document.getElementById('menText').style.color = "black";
            document.getElementById('menText').style.fontWeight = "bold";
            break;
        case 1:
            document.getElementById('men').style.display = "none";
            document.getElementById('kid').style.display = "none";
            document.getElementById('women').style.display = "flex";
            document.getElementById('menText').style.color = "grey";
            document.getElementById('menText').style.fontWeight = "normal";
            document.getElementById('kidText').style.color = "grey";
            document.getElementById('kidText').style.fontWeight = "normal";
            document.getElementById('womenText').style.color = "black";
            document.getElementById('womenText').style.fontWeight = "bold";
            break;
        case 2:
            document.getElementById('women').style.display = "none";
            document.getElementById('men').style.display = "none";
            document.getElementById('kid').style.display = "flex";
            document.getElementById('womenText').style.color = "grey";
            document.getElementById('womenText').style.fontWeight = "normal";
            document.getElementById('menText').style.color = "grey";
            document.getElementById('menText').style.fontWeight = "normal";
            document.getElementById('kidText').style.color = "black";
            document.getElementById('kidText').style.fontWeight = "bold";
            break;
    }
}

function ClickSignIn() {
    document.getElementById("main").style.display = "none";
    document.getElementById("signIn").style.display = "flex";1
}