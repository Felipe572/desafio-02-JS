let av1 = []
let av2 = []
let av3 = []

const studants = [
    {
        name: "Pedro",
        av1: 10,
        av2: 8,
        av3: 10
    },
    {
        name: "Marcos",
        av1: 8,
        av2: 7,
        av3: 7
    },
    {
        name: "Maria",
        av1: 10,
        av2: 10,
        av3: 10
    },
    {
        name: "João",
        av1: 5,
        av2: 5,
        av3: 6
    },
    {
        name: "Clara",
        av1: 7,
        av2: 8,
        av3: 8
    },
]

function average (av1, av2, av3) {
    return ((studants.av1 + studants.av2 + studants.av3) / 3 ).toFixed(2)
}

function printStudants(student) {
    return
}

if (average >= 7) {
    alert(`
        A média do(a) aluno(a) ${studant.name} é: ${average}\n
        Parabén, ${studant.name}! Você foi aprovado(a) no curso
        `)
} else {
    alert(`
        A média do(a) aluno(a) ${student.name} é: ${average}\n
        Não foi dessa vez, ${student.name}! Tentar novamente!
        `)
}
