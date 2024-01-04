const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//#xxxxxx
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    let RandomNumberHex = getRandomHex();
    document.body.style.backgroundColor = RandomNumberHex;
    color.textContent = RandomNumberHex;
});
function getRandomHex() {
    let hexInitial = "#";
    for (let i = 0; i < 6; i++) {
        let indexRandomHex = Math.floor(Math.random() * hex.length);
        hexInitial += hex[indexRandomHex];
    }
    return hexInitial;
}
