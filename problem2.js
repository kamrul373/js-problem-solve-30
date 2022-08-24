// Write an arrow function where it will do the following:
//a) It will take an array where the array elements will be the name of your friends
// b) Check if the length of each element is even, push elements with even length to a new array and return the result

const fnf = (friends) => {
    const evenFriend = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length % 2 == 0) {
            evenFriend.push(friends[i]);
        }
    }
    return evenFriend;
}
let friendsList = ['Jhankar Mahbub', 'Hasanur Rahman', 'Rifat Yousuf', 'Nahinul Islam', 'Toriqul Mawla Sujon', 'Hasin Hyder', 'Rabbil Hasan', 'Sumit Saha'];
const evenFreinds = fnf(friendsList);

console.log(evenFreinds);