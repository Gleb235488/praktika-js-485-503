// 1.1

// function setText(selector, text) {
//     let elem = document.querySelector(selector);
//     if (elem) {
//         elem.textContent = text;
//     } else {
//         console.error("Элемент с селектором '" + selector + "' не найден.");
//     }
// }

// setText('#elem1', 'text1');
// setText('.exampleClass', 'text2');

// 1.2

// function setAttr(selector, attributeName, attributeValue) {
//     let elem = document.querySelector(selector);
//     if (elem) {
//         elem.setAttribute(attributeName, attributeValue);
//     } else {
//         console.error("Элемент с селектором '" + selector + "' не найден.");
//     }
// }

// // Вызываем функцию setAttr для изменения значения атрибута
// setAttr('#myImage', 'src', 'new_image.jpg');
// setAttr('#myImage', 'alt', 'New Image');

// 1.3

// function appendText(selector, text) {
//     let elems = document.querySelectorAll(selector);
    
//     for (let elem of elems) {
//         elem.textContent += text;
//     }
// }
// appendText('.elem', ' appended text');

// 1.4

// forEach('.elem', function(elem) {
//     elem.textContent += '!';
// });

// function forEach(selector, func) {
//     let elems = document.querySelectorAll(selector);
    
//     for (let elem of elems) {
//         func(elem);
//     }
// }

// 1.5

// function appendText(elem, text) {
//     elem.textContent += text;
// }

// let elem1 = document.getElementById('elem1');
// appendText(elem1, ' appended text1');

// let elem2 = document.getElementById('elem2');
// appendText(elem2, ' appended text2');

// 1.6

// function appendText(elem, text) {
//     elem.textContent += text;
// }

// let paragraphs = document.querySelectorAll('p');

// paragraphs.forEach(function (paragraph) {
//     appendText(paragraph, '!');
// });

// 1.7

// function setValue(inputElement, text) {
//     inputElement.value = text;
// }

// let exampleInput = document.getElementById('exampleInput');

// setValue(exampleInput, 'Sample Text');

// 1.8

// function appendText(elements, text) {
//     elements.forEach(function (element) {
//         element.textContent += text;
//     });
// }
// let elems = document.querySelectorAll('.elem');

// appendText(elems, ' appended text');

// 1.9

// function appendElem(ulContainer, text) {
//     let newListItem = document.createElement('li');

//     newListItem.textContent = text;
    
//     ulContainer.appendChild(newListItem);
// }

// let myListContainer = document.getElementById('myListContainer');
// let myList = document.getElementById('myList');

// appendElem(myList, 'New Item 1');
// appendElem(myList, 'New Item 2');

// 1.10

// function appendElem(ulContainer, text) {
//     let newListItem = document.createElement('li');
//     newListItem.textContent = text;
//     ulContainer.appendChild(newListItem);
// }

// let myList = document.getElementById('myList');
// let arrayToAppend = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

// for (let item of arrayToAppend) {
//     appendElem(myList, item);
// }


// 1.11

// function createTable(rows, cols, parent) {
//     let table = document.createElement('table');
    
//     for (let i = 0; i < rows; i++) {
//         let row = document.createElement('tr');
        
//         for (let j = 0; j < cols; j++) {
//             let cell = document.createElement('td');
//             row.appendChild(cell);
//         }
        
//         table.appendChild(row);
//     }
    
//     parent.appendChild(table);
// }

// let div = document.querySelector('#elem');
// createTable(3, 4, div);

// let div1 = document.querySelector('#elem1');
// createTable(3, 4, div1);

// let div2 = document.querySelector('#elem2');
// createTable(5, 6, div2);


// 1.12

// function createTable(rows, cols) {
//     let table = document.createElement('table');
    
//     for (let i = 0; i < rows; i++) {
//         let row = document.createElement('tr');
        
//         for (let j = 0; j < cols; j++) {
//             let cell = document.createElement('td');
//             row.appendChild(cell);
//         }
        
//         table.appendChild(row);
//     }
    
//     return table;
// }

// let div = document.querySelector('#elem');
// let table = createTable(3, 4);
// table.style.color = 'red';
// div.appendChild(table);


// 1.13

// function createTable(rows, cols) {
//     let table = document.createElement('table');
    
//     for (let i = 0; i < rows; i++) {
//         let row = document.createElement('tr');
        
//         for (let j = 0; j < cols; j++) {
//             let cell = document.createElement('td');
//             row.appendChild(cell);
//         }
        
//         table.appendChild(row);
//     }
    
//     return table;
// }

// let div = document.querySelector('#elem');
// let table = createTable(3, 4);
// div.appendChild(table);

// 1.14

// function createTableByArr(arr) {
//     let table = document.createElement('table');
    
//     for (let rowArr of arr) {
//         let row = document.createElement('tr');

//         for (let cellValue of rowArr) {
//             let cell = document.createElement('td');
//             cell.textContent = cellValue;
//             row.appendChild(cell);
//         }

//         table.appendChild(row);
//     }

//     return table;
// }

// // Usage example:
// let div = document.querySelector('#elem');

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let table = createTableByArr(arr);

// div.appendChild(table);

// 1.15

// ;(function(inputSelectors, buttonSelector) {
//     let inputs = inputSelectors.map(selector => document.querySelector(selector));
//     let calculateBtn = document.querySelector(buttonSelector);

//     function calculateSum() {
//         let sum = inputs.reduce((acc, input) => acc + Number(input.value), 0);
//         console.log('Sum:', sum);
//     }

//     calculateBtn.addEventListener('click', calculateSum);
// })(['#input1', '#input2', '#input3'], '#calculateBtn');

// 2.1
// function setText(selector, text) {
//     let elem = document.querySelector(selector);
//     if (elem) {
//         elem.textContent = text;
//     } else {
//         console.error('Element not found for selector:', selector);
//     }
// }
// setText('#elem1', 'text1');
// setText('.class1', 'text2');
// setText('p', 'text3');
// 2.2
// let exportedModule = (function() {
//     let str1 = 'переменная модуля';
//     let str2 = 'переменная модуля';
//     let str3 = 'переменная модуля';
  
//     function func1() {
//       alert('функция модуля');
//     }
  
//     function func2() {
//       alert('функция модуля');
//     }
  
//     function func3() {
//       alert('функция модуля');
//     }
  
//     return {
//       str1: str1,
//       func1: func1,
//       func2: func2
//     };
//   })();
//   console.log(exportedModule.str1);
//     exportedModule.func1();
//     exportedModule.func2();
// 2.3
// ;(function() {
//     let module = {};
    
//     let str1 = 'переменная модуля';
//     let str2 = 'переменная модуля';
//     let str3 = 'переменная модуля';
   
//     module.func1 = function() {
//      alert('функция модуля');
//     }
//     module.func2 = function() {
//      alert('функция модуля');
//     }
//     module.func3 = function() {
//      alert('функция модуля');
//     }
//     module.func4 = function() {
//      alert('функция модуля');
//     }
//     module.func5 = function() {
//      alert('функция модуля');
//     }
    
//     module.str1 = str1;
//     module.str2 = str2;
   
//     window.exportedModule = module;
//    })();