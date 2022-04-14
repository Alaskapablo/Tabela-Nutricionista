var btnAdd = document.querySelector("#add-patient");
btnAdd.addEventListener("click", (event)=>{
    event.preventDefault()
    
    var form = document.querySelector(".form-add");
    var patient = infoPatientForm(form);
    var erros = validaPatient(patient);

    if(erros.length > 0){
       showMsgError(erros);
       invalidUser()
        return;
    }
   
    addPatientInTheTable(patient)  
    
    form.reset();
    var msgError = document.querySelector("#msg-error");
    msgError.innerHTML = ""  
})

//  Msg Error in the table

const inputName = document.querySelector("#input-name");
const inputPeso = document.querySelector("#input-peso");
const inputAltura = document.querySelector("#input-altura");
const inputGordura = document.querySelector("#input-gordura");

const invalidUser = (form)=>{
    inputName.style.border = '1px solid #f03460'
    inputPeso.style.border = '1px solid #f03460'
    inputAltura.style.border = '1px solid #f03460'
    inputGordura.style.border = '1px solid #f03460'

}


function showMsgError(erros){
    var ul = document.querySelector("#msg-error");
    ul.innerHTML = ""
    erros.forEach( (erro)=> {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });


}

function infoPatientForm(form){
    var patient = {
        name: form.name.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcImc(form.peso.value, form.altura.value)
    }
    return patient
}

function mountTr(patient){
    var patientTr = document.createElement("tr");
    patientTr.classList.add("patient");

    patientTr.appendChild(mountTd(patient.name, "info-name"));
    patientTr.appendChild(mountTd(patient.peso, "info-peso"));
    patientTr.appendChild(mountTd(patient.altura, "info-altura"));
    patientTr.appendChild(mountTd(patient.gordura, "info-gordura"));
    patientTr.appendChild(mountTd(patient.imc, "info-imc"));

    return patientTr

}

function mountTd(data, classe){
    var td = document.createElement("td")
    td.textContent = data;
    td.classList.add(classe);
    return td
}

function validaPatient(patient){
    var erros = [];

   if(patient.name.length == 0){
        erros.push("O nome não pode estar em branco")
        invalidUser()
    }

   if(!validPeso(patient.peso)){
       erros.push("Peso é invalido");
   }
   if(patient.peso.length == 0){
        erros.push("O peso não pode estar em branco")
    }
   if(!validAltura(patient.altura)){
       erros.push("A altura é inválida");
   }
   if(patient.altura.length == 0){ 
        erros.push("A altura não pode estar em branco")
    }
    if(patient.gordura.length == 0){
        erros.push("A gordura não pode estar em branco")
    }

   return erros
}

function addPatientInTheTable(patient){
    var patientTr = mountTr(patient);
    var table = document.querySelector(".table-tbody");
    table.appendChild(patientTr);
}