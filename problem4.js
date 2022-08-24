//Write an arrow function where it will do the following:
//a) It will take two array inputs
//b) Combine the two arrays and assign them in a new array
//c) Find the maximum number from the new array and return the result

const getMaxNumber = (arr1, arr2) => {
    const combinedArray = [...arr1, ...arr2];
    const maxNumber = Math.max(...combinedArray);
    return maxNumber;
}

const n1 = [72, 21, 99, 25, 880];
const n2 = [4, 999, 7, 550];
const max = getMaxNumber(n1, n2);
console.log(max);
