function handleHamburger() {
    var x = document.getElementById("nav_div");
    if (x.className === "opened") {
        x.className = "empty";
    } else {
        x.className = "opened";
    }

}
function main() {
    var x = document.getElementById("nav_div");
    if (x.childElementCount > 1) {
        x.className = "empty";
    }
}

window.onload = main;