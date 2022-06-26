let salarioB = document.querySelector("#salario").textContent;
console.log(salarioB)

function valorIR(x){

    let salarioL;
    if (x <= 1903.98){
        x = salarioL
        alert("Seu salário é isento de impostos!!! \n Seu salário líquido é de: ", salarioL)
    }
    else if(x >= 1903.98 && x <= 2826.65){
        salarioL = x - 142.80;
        alert("Você deve pagar 142,80 Reais de Imposto de Renda \n Seu salário líquido é de: ", salarioL);
    }
    else if(x >= 2826.66 && x <= 3751.05){
        salarioL = salarioB - 354.80;
        alert("Você deve pagar 354,80 Reais de Imposto de Renda \n Seu salário líquido é de: ", salarioL);
    }
    else if(x >= 3751.05 && x <= 4664.68){
        salarioL = x - 636.13;
        alert("Você deve pagar 636,13 Reais de Imposto de Renda \n Seu salário líquido é de: ", salarioL);
    }
    else{
        salarioL = x - 869.96;
        alert("Você deve pagar 869,96 Reais de Imposto de Renda \n Seu salário líquido é de: ", salarioL);
    }
}

function limpar(){
    let campo = document.getElementById("#salario");

}