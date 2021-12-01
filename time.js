var today = new Date();
var curHr = today.getHours();

if (curHr < 12){
    document.write("GOOD MORNING!!");
} else if (curHr < 18) {
    document.write("GOOD AFTERNOON!!");
} else {
    document.write("GOOD EVENING!!");
}