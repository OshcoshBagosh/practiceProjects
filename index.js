const rev = document.getElementById("revenue");
const comm = document.getElementById("commission");
const ans = document.getElementById("commRev");

total = 0;
total = rev.value * comm.value;
console.log(total);

rev.oninput = function(){
    total = 0;
    total = rev.value * (comm.value / 100);
    ans.textContent = total;
}

comm.oninput = function(){
    total = 0;
    total = rev.value * (comm.value / 100);
    ans.textContent = total;
}