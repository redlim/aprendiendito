(function () {
    var buttons = document.querySelectorAll("button");
    var screen  = document.querySelector(".screen");

    var operator = "";
    var result   = "";
    for (var i = 0; i< buttons.length;i++){
        var theButton = buttons[i];
        theButton.addEventListener("click",function () {
            var value = this.value;
            switch (value){
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':   screen.value += value; break;
                case 'del': screen.value = ""; break;
                case '+':   operator = screen.value; break;
                case '-':   operator = screen.value; break;
                case 'x':   operator = screen.value; break;
                case '/':   operator = screen.value; break;
                default: screen.value = value;
            }

        });
    }
})();