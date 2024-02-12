
let number = 0;
        let displayNumber = document.querySelector('.number');
        let decrease = document.querySelector(".decrease");
        let increase = document.querySelector(".Increase");
        let reset = document.querySelector(".reset");

        
        // Function to handle the click event of the "Decrease" button
        decrease.addEventListener("click", function() {
            number--;
            numberColor();
            displayNumber.textContent = number;
        });

        // Function to handle the click event of the "Increase" button
        increase.addEventListener("click", function() {
            number++;
            numberColor();
            displayNumber.textContent = number;
        });
        // Function to handle the click event of the "reset" button
        reset.addEventListener("click", function() {
            number = 0;
            numberColor();
            displayNumber.textContent = number;
        });

        function numberColor(){
            if(number>0){
                displayNumber.style.color="green";
            }else if (number<0){
                displayNumber.style.color="red";
            } else{
                displayNumber.style.color="white";
            }
        };
        