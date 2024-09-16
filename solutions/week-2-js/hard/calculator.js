/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

let sum=0;
class Calculator {

    constructor(result){
        this.result=result
    }
    add(a){
        sum= a + this.result;
        return sum;
    }
    subtract(a){
        sum= a - this.result;
        return sum;
    }
    multiply(a){
        sum= a * this.result;
        return sum;
    }

    divide(a){
        sum= a / this.result;
        return sum;
    }

    clear(){
        sum=0;
        return sum
    }

    getResult(){
        return sum;
    }

    calculate(str){
        //'10 + 2 * ( 6 - (4 + 1) / 2) + 7'
        const correctExp=str.replace(/\s+/g,' ').trim();
        const isValidExpression = /^[0-9+\-*/().]+$/.test(correctExp);
    
      if(!isValidExpression){
         new Error("Invalid expression.");      
    }
      try {
        this.result = eval(str);
      } catch (error) {
        throw new Error("Invalid expression.");
      }
    
      if (this.result === Infinity) {
        throw new Error("Cannot divide a number by 0.");
      }
    
      return this.result;
    }

}

const obj=new Calculator(10); 
obj.calculate('10 + 2 * ( 6 - (4 + 1) / 2) + 7 + 8');
console.log(obj);