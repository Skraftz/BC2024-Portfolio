const reludum = document.getElementById("reludum");
const adventure = document.getElementById("adventure");
const quiz = document.getElementById("quiz");
const text = document.getElementById("text");

let set = reludum;
let boolen = true;

reludum.addEventListener("mouseover", function() {
    if (boolen && reludum.style.width == "30%") {
        wefwefwefwef(reludum);
    }
    text.innerHTML = "This is a site about the game developer Reludum and the games he's made.";
});


adventure.addEventListener("mouseover", function() {
    if (boolen && adventure.style.width == "30%") {
        wefwefwefwef(adventure);
    }
    text.innerHTML = "This is a choose-your-own-adventure with a custom script system.";
});


quiz.addEventListener("mouseover", function() {
    if (boolen && quiz.style.width == "30%") {
        wefwefwefwef(quiz);
    }
    text.innerHTML = "This is a quiz game that utilizes a json."
});


function wefwefwefwef(asfasfasfasf) {
    boolen = false
    asfasfasfasf.animate(
        [
            { transform: 'scale(1)' },
            { transform: 'scale(1.1)' },
            { transform: 'scale(1)' }
        ],
        {
            duration: 150,
            iterations: 1,
            direction: 'alternate'
        }
    );
    set.style.width = "30%";
    asfasfasfasf.style.width = "40%";
    set = asfasfasfasf;
    setTimeout(function(){boolen = true;}, 150);
}