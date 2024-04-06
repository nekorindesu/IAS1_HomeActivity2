// MAGNO, KATHERINE D. || BSIT 3-1 || HOME ACTIVITY #2 || IAS1
function validateAndRedirect(){
    var secretcode = document.getElementById("secret").value;

    if (!secretcode.trim()) {
        alert("Please enter a secret code!");
        return;
    }

    if(secretcode == 'angcutekohehe'){
        window.location.href="with.html";
    }
    else{
        window.location.href="without.html";
    }
}

function redirect(){
    window.location.href="without.html";
}

function redirect1(){
    window.location.href="treasure.html";
}

function revealPicture(id) {
    var gridItem = document.querySelectorAll('.grid-item')[id - 1];
    if (id === 5) {
        gridItem.style.backgroundImage = 'url("kittykang.gif")';
    } else {
        gridItem.style.backgroundImage = 'url("picture' + id + '.jpg")';
    }
}