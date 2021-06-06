window.onload = function () {
    this.console.log("app started");
    calculator.init();
}

let calculator = {
    buttonDivs: [], 
    inputDiv: undefined,

    init: function () {
        this.buttonDivs = document.querySelectorAll('.numbers button, .operators button'); 
        this.inputDiv = document.getElementById('input');

        for (let i = 0; i < this.buttonDivs.length; i++) {
            let el = this.buttonDivs[i];
            el.addEventListener("click", this.buttonClick);
        }  
 
    },

    buttonClick: function (e) {  
        let divHtmlText = e.target.innerHTML;  
        
        switch (e.target.innerHTML) {
            case "=":
                calculator.evaluate();
                break;
            case "c":
                calculator.clear();
                break;
            case "9":
            case "8":
            case "7":
            case "6":
            case "5":
            case "4": 
            case "3":
            case "2":
            case "1":
            case "+":
            case "-":
            case "*":
            case "/":
            case "00":
            case ".":
                calculator.addToInput(divHtmlText); 
                break;
        }
    },

    evaluate: function () {
        let result = math.evaluate(calculator.inputDiv.value);
        console.log(result);
        calculator.setInput(result);
    },

    clear: function () {
        calculator.setInput("");
    },

    setInput: function (str) {
        calculator.inputDiv.value = str;
    },

    addToInput: function (str){
        calculator.inputDiv.value += str;
    }

    

    


}
