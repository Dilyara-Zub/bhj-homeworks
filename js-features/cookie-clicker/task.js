const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

cookie.onclick = () => {
    clickerCounter.textContent++;

    if(clickerCounter.textContent % 2 === 0) {
        cookie.width = 200;
    } else {
        cookie.width = 150;
    }
}
