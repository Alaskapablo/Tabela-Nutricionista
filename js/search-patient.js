// const btnSearch = document.querySelector(".btn-search")

// btnSearch.addEventListener('click', ()=>{
    
//     var xhr = new XMLHttpRequest();

//     xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

//     xhr.addEventListener("load", ()=>{
//         var response = xhr.responseText;

//         var patients = JSON.parse(response)

//         patients.forEach( (patient)=>{
//             addPatientInTheTable(patient);
//         })

//     })

//     xhr.send()
// })