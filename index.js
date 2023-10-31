const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const count = document.getElementById('count');
const sub = document.getElementById('submit');
const thank = document.querySelector('.thank-you-state');
const rate = document.querySelector('.rating-state');

const changeBtnBg = function(e){
    e.target.style.background=' hsl(217, 12%, 63%)';
}
const colorBg = function(elems1,elems,elems3,elems4){
    
    elems1.style.background='hsl(217, 12%, 63%)';
    elems.style.background='hsl(217, 12%, 63%)';
    elems3.style.background='hsl(217, 12%, 63%)';
    elems4.style.background='hsl(217, 12%, 63%)';
}
const clearBg = function(elem1,elem2,elem3,elem4){
    elem1.style.background='hsl(25, 97%, 53%)';
    elem2.style.background='hsl(25, 97%, 53%)';
    elem3.style.background='hsl(25, 97%, 53%)';
    elem4.style.background='hsl(25, 97%, 53%)';
}

const print = function(num){
    count.innerText= num;
}

const submit = function(){
  thank.style.display='flex';
  rate.style.display='none';
  
}

one.onclick = function(e){
    changeBtnBg(e);
    clearBg(two,three,five,four);
    print(1)
}
two.onclick = function(e){
    changeBtnBg(e)
    print(2)
    colorBg(one);
    
    clearBg(three,five,four);
    
}
three.onclick = function(e){
    changeBtnBg(e);
    print(3)
    colorBg(one,two)
    
    clearBg(four,five)
}
four.onclick = function(e){
    changeBtnBg(e);
    print(4)
    colorBg(one,two,three);
    
    clearBg(five);
}
five.onclick = function(e){
    changeBtnBg(e);
    print(5)
    colorBg(one,two,three,four);
    
}
sub.onclick = submit;