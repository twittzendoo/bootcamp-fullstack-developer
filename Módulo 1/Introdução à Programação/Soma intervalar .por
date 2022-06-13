programa {
	funcao inicio() {
		inteiro x, y
		
		escreva("Digite um valor para X: ")
	    leia(x)
		escreva("Digite um valor para Y: ")
		leia(y)
		escreva("O valor da soma do intervalo entre X e Y é: ", soma_intervalo(x, y))
	}
	
	funcao inteiro soma_intervalo(inteiro x, inteiro y) {
	    inteiro total, resultado_parcial
	    total = y/2
	    resultado_parcial = y + x
	    
	    inteiro resultado = total * resultado_parcial
	    retorne resultado
	}
}
