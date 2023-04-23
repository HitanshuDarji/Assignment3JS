/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let cost = 35;
let fullDayCost = 35;
let halfDayCost = 20;
let dayCounter = 0;
let Monday = document.getElementById("monday");
let Tuesday = document.getElementById("tuesday");
let Wednesday = document.getElementById("wednesday");
let Thursday = document.getElementById("thursday");
let Friday = document.getElementById("friday");
let full = document.getElementById("full");
let half = document.getElementById("half");
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function active(element) {
    element.classList.add("clicked");
    dayCounter+=1;
    recalculate();
}


Monday.addEventListener("click", function() {
    active(Monday);
});
Tuesday.addEventListener("click", function() {
    active(Tuesday);
});
Wednesday.addEventListener("click", function() {
    active(Wednesday);
});
Thursday.addEventListener("click", function() {
    active(Thursday);
});
Friday.addEventListener("click", function() {
    active(Friday);
});




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
document.getElementById("clear-button").addEventListener("click", deactivate);


function deactivate(){
    Monday.classList.remove("clicked");
    Tuesday.classList.remove("clicked");
    Wednesday.classList.remove("clicked");
    Thursday.classList.remove("clicked");
    Friday.classList.remove("clicked");
    dayCounter = 0;
    recalculate();
    
}





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfDay() {
    half.classList.add("clicked");
    full.classList.remove("clicked");
    cost = halfDayCost;
    recalculate();
}
half.addEventListener("click", halfDay);



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullDay() {
    half.classList.remove("clicked");
    full.classList.add("clicked");
    cost = fullDayCost;
    recalculate();
}
full.addEventListener("click", fullDay);




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate() {
    var total = dayCounter * cost;
    let costLabel = document.getElementById("calculated-cost");
    costLabel.innerHTML = total;
}

