let count=0;
let countingPPL = document.getElementById('counting-ppl');
let peopleCount = document.getElementById('people-Count');
        function increase() {
            console.log(countingPPL.innerText);
            count=count+1;
            countingPPL.innerText=count;
            
        }

        function save(){
            let countStr=count+"-   ";
            peopleCount.innerText=countStr;
            count=0;
        }

        function reset(){
            countingPPL.innerText=0;
            // peopleCount.innerText=0;         
        }