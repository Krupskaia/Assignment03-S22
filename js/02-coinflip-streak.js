var coinFlip;

do {
    coinFlip = Math.round(Math.random());
    window.console.log(coinFlip);
    if (coinFlip) {
        window.console.log("Tails");
    } else {
        window.console.log("Heads");
    }
} while (!coinFlip);