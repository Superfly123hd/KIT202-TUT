console.log('Hello from script.js');


// Activity 2: Write your code for each task below.
// Task 1
let kangaroos_average1 = (75+112+100+90)/4;
let gumtrees_average1 = (93+57+84+143)/4;
const act2_task1 = document.getElementById("activity2-task1");

console.log(kangaroos_average1);
console.log(gumtrees_average1);


if(kangaroos_average1 > gumtrees_average1)
{
    act2_task1.innerHTML = "Kangaroos"; //for the case that kangaroos wins
} else if (kangaroos_average1 < gumtrees_average1) 
{
    act2_task1.innerHTML = "Gumtrees"; //for the case that gumtrees wins
} else {
    act2_task1.innerHTML = "Both team win the trophy"; //draw case
}

// Task 2
let kangaroos_average2 = (83+79+158+80)/4;
let gumtrees_average2 = (35+59+78+115)/4;
const act2_task2 = document.getElementById("activity2-task2");

console.log(kangaroos_average2);
console.log(gumtrees_average2);

if(kangaroos_average2 > gumtrees_average1 && kangaroos_average2 >=100)
{
    act2_task2.innerHTML = "Kangaroos"; //for the case that kangaroos wins
} else if (kangaroos_average2 < gumtrees_average2 && gumtrees_average2 >=100) 
{
    act2_task2.innerHTML = "Gumtrees"; //for the case that gumtrees wins
} else {
    act2_task2.innerHTML = "Both team win the trophy"; //draw case
}
// Task 3
let kangaroos_average3 = (76+80+110+134)/4;
let gumtrees_average3 = (143+99+132+135)/4;
const act2_task3 = document.getElementById("activity2-task3");

console.log(kangaroos_average3);
console.log(gumtrees_average3);

if(kangaroos_average3 > gumtrees_average3 && kangaroos_average3 >=100)
{
    act2_task3.innerHTML = "Kangaroos"; //for the case that kangaroos wins
} else if (kangaroos_average3 < gumtrees_average3 && gumtrees_average3 >=100) 
{
    act2_task3.innerHTML = "Gumtrees"; //for the case that gumtrees wins
} else if (kangaroos_average3==gumtrees_average3 && kangaroos_average3 >=100){
    act2_task3.innerHTML = "Both team win the trophy"; //draw case
} else {
    act2_task3.innerHTML = "no winner"; //no one wins
}
// Task 4
function calculateResultAverage(result1, result2, result3, result4, result5) {
    return (result1+result2+result3+result4+result5)/5
}
let kangaroos_average4 = calculateResultAverage(85,25,64,85,45);
let gumtrees_average4 = calculateResultAverage(178,112,150,135,57);
const act2_task4 = document.getElementById("activity2-task4");

console.log(kangaroos_average4);
console.log(gumtrees_average4);

function determineWinner(avgTeam1, avgTeam2) {
    let result =NaN;
    if (avgTeam1>=avgTeam2*2) {
        result = "Kangoroos win! ("+(avgTeam1) + "vs."+avgTeam2 +")";
    } else if (avgTeam2>=avgTeam1*2) {
        result = "Gumtrees win! ("+ avgTeam2 + "vs."+ avgTeam1 +")";
    } else {
        result = "no winner";
    }
    return result;
}
act2_task4.innerHTML = determineWinner(kangaroos_average4,gumtrees_average4);

// Activity 3: Write your code for each task below.
// Task 1
function calculateTax(income) {
    let tax_amount = 0;
    if (income <= 60000) {
        tax_amount = income*0.26;
    } else if (income <= 90000) {
        tax_amount = income*0.33
    } else {
        tax_amount = income*0.39
    } return tax_amount;
}
console.log(calculateTax(45000))

// Task 2



// Activity 4: Write your code below.

