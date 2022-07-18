var coinFlip;
var i;
var amount = window.prompt("Plase enter a number between 1 to 10");
for (i = 1; i <= amount; i += 1) {
    coinFlip = Math.round(Math.random());
    if (coinFlip) {
        window.console.log("Tails");
    } else {
        window.console.log("Heads");
    }
}