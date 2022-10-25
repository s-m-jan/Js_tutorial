// function sum(a,b){
//     console.log(arguments)
//     return a + b;
// }

function sum(a,b){
    console.log(arguments);
    let total = 0;
    for(let element of arguments){
        total += element;
    };
    return total;
}



console.log(sum(3,4,7,3,8,99));



