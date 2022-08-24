// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements

const avg = (elements) => {
    let sum = 0;
    for (let i = 0; i < elements.length; i++) {
        const squareElement = Math.pow(elements[i], 2);
        // sum
        sum = sum + squareElement
    }
    const average = sum / elements.length;
    return average;
}

const numbers = [7, 8, 9, 22, 33];
const averageOfSquareElements = avg(numbers);
console.log(averageOfSquareElements);