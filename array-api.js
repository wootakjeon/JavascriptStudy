
// 01. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(result);
}

// 02. make an array out of a string ( limit은 option )
{
    const fruits = 'apple, kiwi, banana, orange'; 
    const result = fruits.split(',', 2);
    console.log(result);
}


// 03. make this array look like this [5, 4, 3, 2, 1]

{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse(); // 배열 안에 순서를 거꾸로 정렬
    console.log(result);
    console.log(array);
}

// 04. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5); // 배열에서 원하는 부분만 return
    console.log(result);
    console.log(array);
}

class Sturdnet {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Sturdnet('A', 29, true, 45),
    new Sturdnet('B', 28, false, 80),
    new Sturdnet('C', 30, true, 90),
    new Sturdnet('D', 40, false, 66),
    new Sturdnet('E', 18, true, 88),

];

// 05. find a student wit the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// 06. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// 07. make an array containing only the students' scores
// result should be : [45, 80, 90, 66, 88]

{
    const result = students.map((student => student.score * 2));
    console.log(result);
}

// 08. check if there is a student with the score lower than 50
{
    console.clear();
    const result = students.some((student) => student.score < 50);
    console.log(result);

    const result2 = students.every((student) => student.score >= 50);
    console.log(result2);
}


// 09. compute students' average score
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}

// 10. make a string containing all the scores
// result should be : '45, 80, 90, 66, 88'
{
    const result = students.
    map((student) => student.score)
    .filter(score => score >= 50)
    .join();
    console.log(result);
}

// result should be : '45, 66, 80, 88, 90'
{
    const result = students.map((student) => student.score)
    .sort((a, b) => b - a)
    .join();
    console.log(result);
}