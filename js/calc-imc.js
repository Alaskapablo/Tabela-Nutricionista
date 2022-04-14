var patients = document.querySelectorAll(".patient");

for(var i = 0; i < patients.length; i++){

    var patient = patients[i]
    
    var tdPeso = patient.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = patient.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = patient.querySelector(".info-imc");
    
    var pesoEhValido = validPeso(peso);
    var alturaEhValida = validAltura(altura);
    
    if(!pesoEhValido){
        console.log("Peso invalido");
        pesoEhValido = false;
        tdImc.textContent = "Peso invalido";
        patient.classList.add("patient-invalid");
    }
    if(!alturaEhValida){
        console.log("Altura invalida");
        pesoEhValido = false
        tdImc.textContent = "Altura invalida"
        patient.classList.add("patient-invalid");
    }
    
    
    
    if(alturaEhValida && pesoEhValido){ 
        var imc = calcImc(peso, altura)
        tdImc.textContent = imc;
    }
}


function validPeso(peso){
    if(peso >= 0 && peso < 200){
        return true;
    }else{
        return false;
    }
}

function validAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true
    }else{
        return false
    }
}

function calcImc(peso, altura){
    var imc = 0

    imc = peso / (altura * altura)
    return imc.toFixed(2);
}




