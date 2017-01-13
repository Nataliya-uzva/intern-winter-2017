//Объясните достоинства и недостатки (по вашему мнению) Приём программирования «модуль» имеет громадное количество вариаций. Он немного похож на счётчик, который мы рассматривали ранее, использует аналогичный приём, но на уровне выше.

/*//Цель модуля – скрыть внутренние детали реализации скрипта.
(function() {

  // глобальная переменная нашего скрипта
  var message = "Даша!";

  // функция для вывода этой переменной
  function showMessage() {
    alert( message );
  }

  // выводим сообщение
  showMessage();

})();*/


//Напишите процедуру, которая удаляет из одномерного вещественного массива наибольшее значение
function deleteMaxElement(arr) {
    arr.splice(findPositionMax(arr), 1);
}

function findPositionMax(arr) {
    var max = Math.max.apply(null, arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === max) return i;
    }
}

function print(arr) {
    var str = ""
    for (var i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    return str;
}

var arr = [1, 4, 3, 5, 6, 3];
console.log(print(arr));
deleteMaxElement(arr);
console.log(print(arr));