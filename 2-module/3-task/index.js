let calculator = {
  read(a,b) { //при вызове присваиваются значения
    this.a = a;
    this.b = b;
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

};

calculator.read();
console.log(calculator.sum()); // 8
console.log(calculator.mul()); // 15


window.calculator = calculator;
console.log(window.calculator = calculator); // попробовал исправить ошибку "нужно вернуть строку..."
