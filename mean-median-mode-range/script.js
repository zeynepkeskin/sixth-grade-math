var numbers = [1, 2, 3];


function addToList() {
    let num = parseInt(document.getElementById("num").value);
    numbers.push(num);
    numbers.sort((a, b) => a - b);
    document.getElementById("list").innerHTML = "";
    for (let i = 0; i < numbers.length; i++) {
        document.getElementById("list").innerHTML += "<li> " + numbers[i] + " </li>";
    }
}

function clearList(){
    document.getElementById("list").innerHTML = "";
    numbers = [];
}

function removeFromList() {
    const listElement = document.getElementById("list");
    const lastLiElement = listElement.lastElementChild;
    listElement.removeChild(lastLiElement);
    numbers.pop()
}

function mean() {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    document.getElementById("result").innerHTML = total / numbers.length;

}

function median() {
    let medianIndex = Math.floor(numbers.length / 2);
    if (numbers.length % 2 == 0) {
        document.getElementById("result").innerHTML = (numbers[medianIndex] + numbers[medianIndex - 1]) / 2;
    }
    else {
        document.getElementById("result").innerHTML = numbers[medianIndex];
    }
}

function mode() {
    let frequency = {};
    for(let i = 0; i<numbers.length; i++){
        if(frequency[numbers[i]] === undefined){
            frequency[numbers[i]] = 1;
        }
        else {
            frequency[numbers[i]] += 1;
        }
    }

    let largest = numbers[0];
    let others = "";
    for(let num in frequency){
        if(frequency[num] > frequency[largest]) largest = num;
    }
    if(numbers.length=== Object.keys(frequency).length){
        largest = "none";
    }
    else{
        for(let num in frequency){
            if(frequency[num]===frequency[largest] && num != largest){
                others += ", " + num; 
            }
        }
    }

    document.getElementById("result").innerHTML = largest + others;
}

function range() {
    const result = numbers[numbers.length - 1] - numbers[0];
    document.getElementById("result").innerHTML = result;
}