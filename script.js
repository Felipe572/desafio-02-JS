const students = [
    {
        name: "Pedro",
        av1: 8.5,
        av2: 9,
    },
    {
        name: "João",
        av1: 10,
        av2: 10,
    },
    {
        name: "Maria",
        av1: 9,
        av2: 9,
    },
    {
        name: "Marcos",
        av1: 6,
        av2: 5,
    }
]

function average (av1, av2) {
    return ((av1 + av2) / 2)
}

function printStudent(student) {
    return (`
        O aluno ${student.name} possuia a média de ${average(student.av1, student.av2)} \n
        Parabéns ${student.name}, você foi aprovado!!!
        `)
}

for (let student of students) {
    let averageMessage = printStudent
    alert(averageMessage)
}