(function () {
    const domConsole = document.querySelector('#consoleOutput');
    const myConsole = (function(){
        const queue = [];
        return function (text){
                queue.push(text);
                setTimeout(function (){
                domConsole.innerText = queue.shift();
            },(queue.length - 1) * 500);
        }
    })();
    document.querySelector('#executeIteratorExample').addEventListener('click', () => {
        var something = (function(){
            var nextVal;
            return {
                // needed for `for..of` loops
                [Symbol.iterator]: function(){ return this; },

                // standard iterator interface method
                next: function(){
                    if (nextVal === undefined) {
                        nextVal = 1;
                    }
                    else {
                        nextVal = (3 * nextVal) + 6;
                    }

                    return { done:false, value:nextVal };
                }
            };
        })();
        for (var v of something) {
            console.log(v);
            myConsole(v);
            if (v > 500) {
                break;
            }
        }
        for (var v of [1,2,3,4]) {
            myConsole(v);
            if (v > 500) {
                break;
            }
        }
    });
})();
