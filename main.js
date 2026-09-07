// 1. Напиши функцию capitalizeFirstLetter(str), которая принимает строку и
// возвращает её с заглавной первой буквой (остальные буквы не менять).
// Например, "привет" -> "Привет".
let str="привет"
 function capitalizeFirstLetter(str) {
    console.log(str[0].toUpperCase()+str.slice(1));
};

capitalizeFirstLetter(str)

// 2. Напиши функцию reverseString(str), которая возвращает строку в
// обратном порядке. Например, "abc" -> "cba".
let str="привет"
function reverseString(str) {
    console.log(str.split('').reverse().join(''))
}

reverseString(str)

    // 3. Напиши функцию countVowels(str), которая подсчитывает количество
    // гласных букв (a, e, i, o, u) в строке (регистронезависимо). Например, "Hello" -
    // > 2.
    // let str = "Hello"
    function countVowels(str) {
        const vowelsEn = ['a', 'e', 'i', 'o', 'u'];
        return str.toLowerCase().split('').reduce((acc, char) => {
            if (vowelsEn.includes(char)) {
                return acc+1
            } else {
                return acc+0
            }
            
        }, 0);

    }
    console.log(countVowels(str))


// 4. Напиши функцию truncateText(str, maxLength), которая обрезает
// строку до указанной длины и добавляет многоточие, если она была
// длиннее. Например, "Очень длинная строка", 10 -> "Очень длин...".

function truncateText(str, maxLength) {
    return str.slice(0, maxLength) + "..."
}

console.log(truncateText("Очень длинная строка", 10))

// 5. Напиши функцию removeSpaces(str), которая удаляет все пробелы из
// строки. Например, "a b c" -> "abc".

function removeSpaces(str) {
    console.log(str.replaceAll(' ', ''))
}

removeSpaces("a b c")



// 1. Напиши функцию sumArray(arr), которая возвращает сумму всех
// чисел в массиве. Например, [1, 2, 3] -> 6.
function sumArray(arr){
    return arr.reduce((acc, num) => {
        return acc + num
    }, 0)
}
console.log(sumArray([1, 1, 1]))

// 2. Напиши функцию filterEvenNumbers(arr), которая возвращает новый
// массив, содержащий только чётные числа из исходного. Например, [1, 2, 3,
// 4] -> [2, 4].
function filterEveNumbers(arr){
    return arr.filter(num => num % 2 == 0)
}
console.log(filterEveNumbers([1, 2, 3, 4]))

// 3. Напиши функцию findMax(arr), которая находит и возвращает
// максимальное число в массиве. Гарантируется, что массив не пустой и
// содержит только числа.
function findMax(arr) {
    return Math.max(...arr)
}
console.log(findMax([1, 2, 3, 4]))

// 4. Напиши функцию flattenArray(arr), которая «расплющивает» массив
// на один уровень. Например, [[1, 2], [3, [4]]] -> [1, 2, 3, [4]] (только первый
// уровень вложенности).
function flatternArray(arr) {
    console.log(arr.flat(1))
}

flatternArray([[1, 2], [3, [4]]])

// 5. Напиши функцию uniqueValues(arr), которая возвращает массив
// уникальных значений, сохраняя порядок первого появления. Например, [1,
// 2, 2, 3, 1] -> [1, 2, 3].

function uniqueValues(arr) {
    console.log(Array.from(new Set(arr)))
}

uniqueValues([1, 2, 2, 3, 1])


// 1. Напиши функцию printNumbers(n), которая выводит в консоль все
// числа от 1 до n включительно с помощью цикла.
function printNumbers(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}

printNumbers(10)

// 2. Напиши функцию calculateFactorial(n), которая вычисляет факториал
// числа n с помощью цикла (например, 5! = 1 * 2 * 3 * 4 * 5).
function calculateFactorial(n) {
    res = 1
    for(let i = 2; i <= n; i++) {
        res *= i
    }
    console.log(res)
}

calculateFactorial(5)

// 3. Напиши функцию generateMultiplicationTable(n), которая с помощью
// вложенных циклов выводит таблицу умножения для числа n от 1 до 10.
// Каждая строка — это n * i = результат.
function generateMultiplicationTable(n) {
        for(let j = 1; j <= 10; j++) {
            console.log(`${n} * ${j} = ${n * j}`);
        }
}

generateMultiplicationTable(5)

// 4. Напиши функцию sumOfDigits(num), которая считает сумму цифр
// числа с помощью цикла. Например, 123 -> 1 + 2 + 3 = 6. Число может быть
// положительным.
function sumOfDigits(num) {
    str = String(num).split('');
    res = str.reduce((acc, num) => {
        return acc + Number(num)
    }, 0)
    return res
}

console.log(sumOfDigits(123))

// 5. Напиши функцию repeatString(str, count), которая повторяет строку
// count раз и возвращает результат (без использования встроенного метода
// repeat). Например, "ab", 3 -> "ababab"

function repeatString(str, count) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += str;
    }
    console.log(result);
}

repeatString('ab', 3);