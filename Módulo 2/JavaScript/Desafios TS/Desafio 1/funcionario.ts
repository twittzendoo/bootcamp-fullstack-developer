// Modo mais simples 

const funcionario1 = {
    codigo: 10,
    nome: 'ricardo',
    idade: 25,
    profissao: 'contador',
    departamento: 'finanças'
};

// Modo mais detalhado 

const funcionario2: {codigo: number, nome: string, idade: number, profissao: string, departamento: string} = {
    codigo: 10,
    nome: 'lucas',
    idade: 26,
    profissao: 'contador',
    departamento: 'fiscal'
}