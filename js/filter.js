const filterFild = document.querySelector("#filter-table");

filterFild.addEventListener("input", ()=>{
    const patients = document.querySelectorAll(".patient");

    if(filterFild.value.length > 0){
        for (var i = 0; i < patients.length; i++) {
            var patient = patients[i];
            var NameTd = patient.querySelector(".info-name");
            var name = NameTd.textContent;
            var expres = new RegExp(filterFild.value, "i")

            if(!expres.test(name)){
                patient.classList.add("hidden")
            }else{
                patient.classList.remove("hidden");
            }
        }

    }else{
        for (var i = 0; i < patients.length; i++) {
            const patient = patients[i];
            patient.classList.remove("hidden");
        }
    }
})
