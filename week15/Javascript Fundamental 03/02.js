const student={
    name:"Lucifer",
    age:24,
    grade:"A+"
}

function changeGrade(newGrade) {
    student.grade=newGrade;
}

changeGrade("O")

console.log(student);