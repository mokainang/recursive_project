const age = parseInt(prompt("Enter your age:"));
function ticketPrice(age) {
    if (age <= 12) {
        console.log("Ticket Price: $10");
    } else {
        if (age >= 13 && age <= 17) {
            console.log("Ticket Price: $15");
        }
        else {
            console.log("Ticket Price: $20");
        }
    }
}
ticketPrice();
