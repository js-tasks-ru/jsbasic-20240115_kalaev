function isValid(name) {
  if (name) {/*перевод на человеческий :
  если параметр name функции должна вернуть true проверки параметра name, иначе false */
    return ((name.indexOf(' ') < 0) && (name.length >= 4));
  } else {
    return false;
  }
}
/**
 * Эту функцию трогать не нужно. Далее функция возьмет переменную и проверит ее через наш валидатор. Проверив получая при проверке true она выполнит if иначе else
 */
function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
//Вызвали функцию
sayHello();
