
enum Trabalho {
    Contador,
    Biotécnico,
    Advogado
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let profissional1: Humano = {
    nome: 'ricardo',
    idade: 29,
    profissao: Trabalho.Contador
};

let profissional2: Humano = {
    nome: 'lucas',
    idade: 19,
    profissao: Trabalho.Biotécnico
};

let pprofissional3: Humano = {
    nome: 'gabriel',
    idade: 32,
    profissao: Trabalho.Advogado
};

let profissional4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Contador
}