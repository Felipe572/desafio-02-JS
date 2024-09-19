const studants = [
  { name: "João", av1: 8, av2: 6, av3: 10 },
  { name: "Maria", av1: 7, av2: 9, av3: 7 },
  { name: "Pedro", av1: 5, av2: 4, av3: 5 },
  { name: "Ana", av1: 10, av2: 9, av3: 10 }
];

function average (av1, av2, av3) {
    return ((av1 + av2 + av3) / 3).toFixed(2)
}

function approvedStudent(studant) {
    const media = average(studant.av1, studant.av2, studant.av3);

    if (media >= 7) {
        alert(`
            A média do(a) aluno(a) ${studant.name} é: ${media}\n
            Parabén, ${studant.name}! Você foi aprovado(a) no curso
            `)
    } else {
        alert(`
            A média do(a) aluno(a) ${studant.name} é: ${media}\n
            Não foi dessa vez, ${studant.name}! Tentar novamente!
            `)
    }
}

studants.forEach(approvedStudent)