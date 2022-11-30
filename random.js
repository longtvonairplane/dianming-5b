function getNumber(){
    var i=randomNum(1, 44);
    switch (i) {
        case 11:
            return 19;
        case 8:
            return "何其昕";
        case 18:
            return 45;
        default:
            return i;
    }
}

document.getElementById("shit").addEventListener("click", ()=>{
    document.getElementById("bullshit").innerText = getNumber();
})
document.addEventListener("keydown", ()=>{
    document.getElementById("bullshit").innerText = getNumber();
})

function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 
