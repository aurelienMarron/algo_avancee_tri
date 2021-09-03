let numbers = [3, 9, 7, 1, 6, 2, 8, 4, 5];

console.log(numbers)

//premiere méthode
let i = 0;
do {
    if (numbers[i] > numbers[i + 1]) {
        let stockage = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = stockage;
        i = 0;
    } else {
        i++;
    }
} while (i !== numbers.length);

console.log(numbers)

// 2
 numbers = [3, 9, 7, 1, 6, 2, 8, 4, 5];
for (i = 0; i < numbers.length; i++) {

    for (let j = i + 1; j < numbers.length; j++) {

        if (numbers[i] > numbers[j]) {

            let stockage = numbers[i];

            numbers[i] = numbers[j];
            numbers[j] = stockage;
        }
    }
}

console.log(numbers)


