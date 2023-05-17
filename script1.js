var count = 0;

let p = document.createElement("p");

p.setAttribute("id", "counter");

p.innerText = count;

let c1 = document.getElementById("ppl");
c1.appendChild(p);

let b1 = document.getElementById("inc");
let b2 = document.getElementById("dec");

b1.addEventListener('click',function(){
    count = count + 1;
    p.innerText = count;
    c1.appendChild(p);
})

b2.addEventListener("click", function () {
    count = count -1;
    if(count<0){
        count = 0;
    }
    p.innerText = count;
    c1.appendChild(p);
});

//   let a = document.getElementById("money");
// let amt = ($("#money").val());

var amt = document.getElementById("#money").value;

let b3 = document.getElementById("five");
let b4 = document.getElementById("ten");
let b5 = document.getElementById("onefive");
let b6 = document.getElementById("twofive");
let b7 = document.getElementById("five0");
let b8 = document.getElementById("sevenfive");

let tipper =0;

b3.addEventListener('click',function(){
    tipper = 5;
})
b4.addEventListener('click',function(){
    tipper = 10;
})
b5.addEventListener('click',function(){
    tipper = 15;
})
b6.addEventListener('click',function(){
    tipper = 25;
})
b7.addEventListener('click',function(){
    tipper = 50;
})
b8.addEventListener('click',function(){
    tipper = 75;
})

let b9 = document.getElementById("gen");

let totalamt = 0;

b9.addEventListener('click',function(){
    totalamt = (amt + ((tipper*amt)/100))
    let c3 = document.getElementById("text9");
    c3.innerText = amt
    c3.appendChild(amt);
    
    let c4 = document.getElementById("text11");
    c4.innerText = totalamt
    c4.appendChild(totalamt);
})

let b10 = document.getElementById("reset");

b10.addEventListener('click',function(){
    totalamt = 0;
    amt =0;
    c3.appendChild(amt)
    c4.appendChild(totalamt)
    count =0;
    p.innerText = count;
    c1.appendChild(p);
})