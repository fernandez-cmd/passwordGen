
// function below will update the displayed for Length of Chars
charLength = document.getElementById('charLength');
charAmount = document.getElementById('charAmount');

function sliderChange(val) {
    charAmount.innerText = val

};

// function below will update the strength bars 

uppercase = document.getElementById('uppercase') 
lowercase = document.getElementById('lowercase') 
numbers = document.getElementById('numbers') 
symbols = document.getElementById('symbols')
strength = document.getElementById('strengthOf');

//levels
level1 = document.getElementById('level1');
level2 = document.getElementById('level2');
level3 = document.getElementById('level3');
level4 = document.getElementById('level4');




checked = [];
console.log()
test = 0 

const checkBoxes = ()=>{
      if ( uppercase.checked ){
        checked.push('upper')
    };
    if ( lowercase.checked ){
        checked.push('lower')
    };
    if ( numbers.checked ){
        checked.push('number')
    };
    if ( symbols.checked ){
        checked.push('symbol')
    };
};

const uncheckBoxes = ()=>{
    newmods = [...new Set(checked)];
        
    if ( uppercase.checked == false){

        let indexupper = checked.indexOf('upper');
        if (indexupper > -1) {
        checked.splice(indexupper, 1);
        newmods.splice(indexupper, 1);
        };
    };
    if ( lowercase.checked == false){

        let indexlower = checked.indexOf('lower');
        if (indexlower > -1) {
        checked.splice(indexlower, 1);
        newmods.splice(indexlower, 1);

        };
    };

    if ( numbers.checked == false){

        let indexnum = checked.indexOf('number');
        if (indexnum > -1) {
        checked.splice(indexnum, 1);
        newmods.splice(indexnum, 1);

        };
    };

    if ( symbols.checked == false){

        let indexsymbol = checked.indexOf('symbol');
        if (indexsymbol > -1) {
        checked.splice(indexsymbol, 1);
        };

      let indexsymbol1 = newmods.indexOf('symbol');
        if (indexsymbol1 > -1) {
        newmods.splice(indexsymbol1, 1);
        };
    };
    if ( newmods.length < 5 ){

        strength.innerText = 'MOST'

        level1.style.backgroundColor = "#EECA61";
        level2.style.backgroundColor = "#EECA61";
        level3.style.backgroundColor = "#EECA61";
        level4.style.backgroundColor = "#EECA61";
    };


    if ( newmods.length < 4 ){     

        strength.innerText = 'HIGH'
        level1.style.backgroundColor = "#EECA61";
        level2.style.backgroundColor = "#EECA61";
        level3.style.backgroundColor = "#EECA61";
        level4.style.backgroundColor = "#131316";
    };

    if ( newmods.length < 3 ){
        strength.innerText = 'MEDIUM'
        level1.style.backgroundColor = "#EECA61";
        level2.style.backgroundColor = "#EECA61";
        level3.style.backgroundColor = "#131316";
        level4.style.backgroundColor = "#131316";
    };

    if ( newmods.length < 2 ){
        strength.innerText = 'LOW'
        level1.style.backgroundColor = "#EECA61";
        level2.style.backgroundColor = "#131316";
        level3.style.backgroundColor = "#131316";
        level4.style.backgroundColor = "#131316";
    };

    if ( newmods.length < 1 ){
        strength.innerText = ''
        level1.style.backgroundColor = "#131316";
        level2.style.backgroundColor = "#131316";
        level3.style.backgroundColor = "#131316";
        level4.style.backgroundColor = "#131316";
    };
};


abcLower = 'abcdefghijklmnopqrstuvwxyz'
abcUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
nums ='0123456789'
symbolSigns = '!@#$%^&*()=+/-,<>?[]{}|~'
pwchars=[]


const generatePw = ()=>{
    console.log(newmods)

    for (mod = 0 ; mod < newmods.length; mod++ ){
        console.log(newmods[mod])

        if(newmods[mod] == 'upper'){
            pwchars.push(abcUpper)
        }
        if(newmods[mod] == 'lower'){
            pwchars.push(abcLower)
        }
        if(newmods[mod] == 'number'){
            pwchars.push(nums)
        }
        if(newmods[mod] == 'symbol'){
            pwchars.push(symbolSigns)
        }
    };
   pw = pwchars.join('');

   pwbox = document.getElementById('finalpw');

   const randomFloat =  () => {
    const int = window.crypto.getRandomValues(new Uint32Array(1))[0]
    return int / 2**32
    };

    Math.floor(randomFloat * pw.length);
    pw[Math.floor(randomFloat() * pw.length)];



    finalpw=[];
    while (finalpw.length < charLength.value){
    finalpw.push(pw[Math.floor(randomFloat() * pw.length)]);
    if(finalpw.length == charLength.value + 1){
        break;
    };
    pwchars = []

    pwbox.innerText = finalpw.join('');


    };
};

