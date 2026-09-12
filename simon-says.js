let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");//<h2>Press any key to start</h2>

document.addEventListener("keypress", function () {//Whenever keyboard key is pressed...
    if (started == false) {
        console.log("Game is Started");
        started = true;//Now game is running.

        levelup(); //Now the first color is generated.
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}


function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 300);
}

function levelup() {
    userseq = [];

    level++;
    h2.innerText = `level ${level}`; //Shows Level 1

    let randIdx = Math.floor(Math.random() * 4); //chooses a random color
    let randcolor = btns[randIdx]; //
    let randbtn = document.querySelector(`.${randcolor}`);

    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkans(idx) {//passing the current lev we r playing 

    if (userseq[idx] == gameseq[idx]) { //check if they have same valkue to know wt user pressedd
        if (userseq.length == gameseq.length) {//It means to proceed only after the player completes the full sequence.
            // Compare yellow==yellow correct
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br>  Press any Key to Start the Game `;//if user donest press wt game has shown 
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = " white ";
        }, 150)
        reset();
    }
}

function btnpress() {
    // console.log(this);
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");

    userseq.push(usercolor); //push the color pressed by user into array

    checkans(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress); //Every click calls
}
function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}