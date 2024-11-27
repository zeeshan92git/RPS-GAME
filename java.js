let currenttheme = `light`;

function switchTheme() {
    if(currenttheme==='light'){
        document.body.classList.remove(`light-theme`);
        document.body.classList.add(`dark-theme`);
        currenttheme = 'dark';
        msg.style.backgroundColor = "#000000";
    }else{
        document.body.classList.remove(`dark-theme`);
        document.body.classList.add(`light-theme`);
        currenttheme = 'light';
    }
}


let userscore=0;
let compscore=0;

const msg = document.querySelector("#msg");
const userS = document.querySelector("#user-score");
const compS = document.querySelector("#comp-score");
const resetS = document.querySelector("#reset");

const choices = document.querySelectorAll(".choice");

resetS.addEventListener("click", ()=>{
    msg.innerText = "Let's Start! Play your turn";
    msg.style.backgroundColor = "#081b31";
    userS.innerText = 0;
    compS.innerText = 0;
    userscore = 0 ;
    compscore = 0;
});

const gencompchoice = () =>{
    const opt = ["rock", "scissor","paper"];
    const val = Math.floor(Math.random()*3);
    return opt[val];
}

const drawgame = () => {
    // console.log("Game draw.Play again.");
    msg.innerText = "Game draw.Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showwinner = (userwin,choice,compchoice) => {
    if(userwin){
        userscore++;
        userS.innerText = userscore;
        console.log("You win");
        msg.innerText = `You won! Your ${choice} beat ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compS.innerText = compscore;
        console.log("You lose");
        msg.innerText = `You lose! ${compchoice} beat your ${choice}`;
        msg.style.backgroundColor = "red";
    }
}
const playgame = (choice) =>{
    console.log("user-turn",choice);
    // generate computer choice
    const compchoice = gencompchoice();
    if(choice === compchoice){
        drawgame();
    }
    else{
        let username  = true;
        if(choice==="rock"){
            // paper scissor
            username = compchoice==="paper" ? false : true;
        }
        else if(choice==="paper"){
                // rock scissor
            username = compchoice==="scissor" ? false : true;
        }
        else{
            // paper rock
            username = compchoice==="rock" ? false : true;
        }
        showwinner(username,choice,compchoice);
    }
}

choices.forEach( (choice) =>{
    choice.addEventListener("click", ()=>{
        let userchoice= choice.getAttribute("id");
        playgame(userchoice);
    });
});

