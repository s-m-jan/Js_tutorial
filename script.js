walk()
// run01();
// run02();
// move();
//function declaration

function walk(){
    console.log("walk")
}

//function expression (anonymous & names)
 
let run01 = function(){
    console.log("run01")
};

let run02 = function run(){
    console.log("run02")
};

run02();
run01();
let move = run01;
move();