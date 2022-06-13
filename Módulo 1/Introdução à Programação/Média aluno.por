programa {
	funcao inicio() {
		real n1, n2, n3
		
		escreva("Digite a primeira nota do aluno: ")
		leia(n1)
		escreva("\nDigite a segunda nota do aluno: ")
		leia(n2)
		escreva("\nDigite a terceira nota do aluno: ")
		leia(n3)
		
		escreva("\nA média do aluno foi de: ", media_aluno(n1, n2, n3))
		
		
	}
	
	funcao real media_aluno(real n1, real n2, real n3) {
	    retorne (n1 + n2 + n3)/3
	}
}
