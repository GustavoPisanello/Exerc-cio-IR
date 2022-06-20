const botao = document.querySelector("#calcular")
let salarioB = document.querySelector("#salario")
let salarioL = 0;

botao.addEventListener("click",function valorIR(salarioB){

    if (salarioB <= 1903.98){
        salarioB = salarioL
        alert("Seu salário é isento de impostos!!! \n Seu salário líquido é de: ", salarioL)
    }
    else if(salarioB >= 1903.98 && x <= 2826.65){
        salarioL = salarioB - 142.80;
        alert("Você deve pagar 142,80 Reais de Imposto de Renda \n Seu salário líquido é de: ", salarioL);
    }
    else if(salarioB >= 2826.66 && x <= 3751.05){
        salarioL = salarioB - 354.80;
        alert("Você deve pagar 354,80 Reais de Imposto de Renda \n Seu salário líquido é de: ", salarioL);
    }
    else if(salarioB >= 3751.05 && x <= 4664.68){
        salarioL = salarioB - 636.13;
        alert("Você deve pagar 636,13 Reais de Imposto de Renda \n Seu salário líquido é de: ", salarioL);
    }
    else{
        salarioL = salarioB - 869.96;
        alert("Você deve pagar 869,96 Reais de Imposto de Renda \n Seu salário líquido é de: ", salarioL);
    }
})