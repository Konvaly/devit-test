'use strict';
//* Задание
// 1. Напишите функцию deepEqual чтоб она проверяла что два объекта идентичны. Пример:
//
// deepEqual({name: 'test'}, {name: 'test'}) // output true
// deepEqual({name: 'test'}, {name: 'test1'}) // output false
// deepEqual({name: 'test'}, {name: 'test', age: 10}) // false

function deepEqual () {}

// 2. Напишите функцию chunkArray которая разбивает массив на подмассивы на заданное количество элементов. Пример:
//
// var result = chunkArray([1,2,3,4,5,6,7,8], 3);
// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]

function chunkArray (arr, сountOfElem) {
  const result = [];

  for (let i = 0; i < Math.ceil(arr.length / сountOfElem); i++) {
    result.push(arr.slice(i * сountOfElem, i * сountOfElem + сountOfElem));
  }
  return result;
}
var result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3); //[[1, 2, 3], [4, 5, 6], [7, 8]]

// 3. Напишите функцию обертку которая на вход принимает асинхронный метод и массив аргументов а отдает нам Promise с результатом. Пример:
//
// function asyncPlus(x, y, cb){
// setTimeout(() => cb(x + y), 1000)
// }
// toPromise(asyncPlus, [1,2]).then(console.log)
//  Output: 3

// 4. Напишите метод firstUnique который возвращает первый уникальный элемент в массиве. Пример:
//
// console.log(firstUnique([1,2,3,2,1,3,4,5,5])

function firstUnique (arr) {
  let result = {};
  arr.forEach(function (item) {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  });
  const arrUniq = Object.entries(result).filter(function (item) {
    const [key, value] = item;
    return value === 1;
  });

  const indexOfUniq = arrUniq
    .map(function (item) {
      const [key] = item;
      const index = arr.indexOf(Number(key));
      return index;
    })
    .sort((a, b) => a - b);

  return arr[indexOfUniq[0]];
}

console.log(firstUnique([1, 2, 3, 2, 1, 3, 4, 5, 5])); // 4

// output 4
//
// 5. Напишите метод arrayToObject который возвращать объект(использовать рекурсию). Пример:
//
var arr1 = [
  ['name', 'developer'],
  ['age', 5],
  [
    'skills',
    [
      ['html', 4],
      ['css', 5],
      ['js', 5],
    ],
  ],
];

function arrayToObject (arr) {
  const cb = (acc, [key, value]) => {
    if (Array.isArray(value)) {
      acc[key] = arrayToObject(value);
    } else {
      acc[key] = value;
    }
    return acc;
  };
  return arr.reduce(cb, {});
}

console.log(arrayToObject(arr1));

// console.log(arrayToObject(arr))
// Outputs: {
// name: 'developer',
// age: 5,
// skills: {
// html: 4,
// css: 5,
// js: 5
// }
// }

// 6. Написать метод getBase64FromUrl который конвертирует картинку в строку base64 (метод должен быть реализован с помощью Promise). Пример:
//
// //  getBase64FromUrl('https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8')
//  .then(console.log)
//  .catch(console.error)
//

// Output
// data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAACeCAIAAADL6SW3AAAAA3NCSVQICAjb4U/gAAAMGElEQVR4nO3dfZBdZX3A8d....

// 7. Написать обратный метод(см. задачу 5) objectToArray который из объекта создаст массив. Пример:
//
const object = {
  name: 'developer',
  age: 5,
  skills: {
    html: 4,
    css: 5,
    js: 5,
  },
};

function objectToArray (obj) {
  const initArr = Object.entries(obj);

  const transformedArr = initArr.map(function ([key, value]) {
    if (typeof value === 'object' && value !== null) {
      const valueArr = objectToArray(value);

      return [key, valueArr];
    } else {
      return [key, value];
    }
  });
  return transformedArr;
}

console.log(objectToArray(object));
// Outputs: [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]]

// 8. Сделать функцию которая сможет делать срез данных с ассоциативного массива и вернуть средние значение (округленное до 2 цифр после запятой).
//
let testData3 = [
  {
    name: 'Vasya',
    email: 'vasya@example.com',
    age: 20,
    skills: { php: 0, js: -1, madness: 10, rage: 10 },
  },
  {
    name: 'Dima',
    email: 'dima@example.com',
    age: 34,
    skills: { php: 5, js: 7, madness: 3, rage: 2 },
  },
  {
    name: 'Colya',
    email: 'colya@example.com',
    age: 46,
    skills: { php: 8, js: -2, madness: 1, rage: 4 },
  },
  {
    name: 'Misha',
    email: 'misha@example.com',
    age: 16,
    skills: { php: 6, js: 6, madness: 5, rage: 2 },
  },
  {
    name: 'Ashan',
    email: 'ashan@example.com',
    age: 99,
    skills: { php: 0, js: 10, madness: 10, rage: 1 },
  },
  {
    name: 'Rafshan',
    email: 'rafshan@example.com',
    age: 11,
    skills: { php: 0, js: 0, madness: 0, rage: 10 },
  },
];

//

// let result2 = array_pluck_avg(testData3, 'skills.php')

// Outputs: 3.1

// 9. Создайте прототип для String toTitleCase каждый первый символ строки переводит в верхний регистр. Пример:
//
// let x = 'test task'
// console.log(x.toTitleCase())
// Outputs: Test Task

String.prototype.toTitleCase = function () {
  const wordArr = this.split(' ');
  const wordArrToUpperCase = wordArr.map(item => {
    return item.substr(0, 1).toUpperCase() + item.substr(1);
  });
  const stringResult = wordArrToUpperCase.join(' ');
  return stringResult;
};
let z = 'test task';
console.log(z.toTitleCase()); // 'Test Task'

// 10. Создайте прототип который удаляет дубликаты из строки. Пример:
// let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double"
// x.removeDuplicate()
// Int32 Double

String.prototype.removeDuplicate = function () {
  const strToArr = this.split(' ');
  const uniqInArr = [...new Set(strToArr)];
  const uniqOfStr = uniqInArr.join(' ');
  return uniqOfStr;
};
let y =
  'Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double';
console.log(y.removeDuplicate()); // Int32 Double

// 11. Напишите методы добавления/удаления строчки внизу таблицы с текстом 'Row{N} cell{K}' (N/K динамические числа пример Row{3} cell{1}, Row{3} cell{2}..., то есть если количество колонок в одной строчке будет изменено ваш код должен работать)
//
{
  /* <head>  */
}
{
  /* <meta charset=utf-8 />  */
}
{
  /* <title>Insert row in a table - w3resource</title>  */
}
{
  /* </head><body>  */
}
{
  /* <table id="sampleTable" border="1">  */
}
{
  /* <tr><td>Row1 cell1</td>  */
}
{
  /* <td>Row1 cell2</td></tr>  */
}
{
  /* <tr><td>Row2 cell1</td>  */
}
{
  /* <td>Row2 cell2</td></tr>  */
}
{
  /* </table><br>  */
}
{
  /* <button id="btnInsert" type="button" value="Insert row">   */
}
{
  /* <button id="btnRemove" type="button" value="Remove row">   */
}
{
  /* </body> */
}
{
  /*  */
}
// 12. Добавьте валидацию формы на странице регистрации из задачи 4(HTML, CSS).
//
// 1. Кнопка Submit должна быть disabled до тех пор пока данные в форме не корректны.
// 2. Все поля формы обезательны к заполнению и не должны быть пустые
// 3. Поле Email должно принимать только валидные email адресса
// 4. Пароль должен быть минимум 8 символов и содержать буквы нижнего/верхнего регистра, цифры и хотя бы 1 спец символ.
// 5. Поле Avatar принемает только файлы с расширением .png размер не больше 1Mb
// 6. В случае ошибок под каждым input появляеться тест с причиной ошибки.
