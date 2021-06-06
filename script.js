document.querySelector(".bluePhoneThumb").onclick = function () {
    document.querySelector(".iphone").src = "blue.png";
    document.getElementById("linkColor").style.background = "#14366b";
    const textColors = document.querySelectorAll(".textColor");
    textColors.forEach(function(textColor) {
        textColor.style.color = "#14366b";
    });
    
}

document.querySelector(".blackPhoneThumb").onclick = function () {
    document.querySelector(".iphone").src = "black.png";
    document.getElementById("linkColor").style.background = "#4e5580";
    const textColors = document.querySelectorAll(".textColor");
    textColors.forEach(function(textColor) {
        textColor.style.color = "#4e5580";
    });
}

document.querySelector(".whitePhoneThumb").onclick = function () {
    document.querySelector(".iphone").src = "white.png";
    document.getElementById("linkColor").style.background = "#972000";
    const textColors = document.querySelectorAll(".textColor");
    textColors.forEach(function(textColor) {
        textColor.style.color = "#972000";
    });
}