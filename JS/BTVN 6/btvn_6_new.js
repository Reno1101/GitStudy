
// const str_jobs = localStorage.getItem("jobs");
// const data = str_jobs ? JSON.parse(str_jobs) : [];

//const data = localStorage.getItem("jobs") ? JSON.parse(localStorage.getItem("jobs")  ) : [];



// add press enter to add
ip_content.addEventListener("keyup", (e) => {
    console.log(e.key);
    
    if (e.key === "Enter"){
        add();
    }
})


function validateInput(){
    let formElement = document.querySelector(".form")
    let inputElement = formElement.querySelectorAll(".form-input")
    for (let i = 0; i < inputElement.length ; i++){
        if (inputElement[i].value === ""){
            inputElement[i].parentElement.querySelector(".error-message").innerText = `Please enter your ${inputElement[i].id}`
        } else {
            inputElement[i].parentElement.querySelector(".error-message").innerText = ""
        }
    }
}



function add(){
    validateInput()
    let formElement = document.querySelector(".form")
    let errorElement = formElement.querySelectorAll(".error-message")
    let arrErrorElement = []
    for (let i = 0; i < errorElement.length; i++){
        arrErrorElement.push(errorElement[i].innerText)
    }
    let checkErrorElement = arrErrorElement.every(value => value === "")

    //neu checkErrorElement true: bat dau thuc hien function
    if (checkErrorElement){
        //lay "data" tu local storage parse sang obj de xu ly, neu khong data =[] => co the de Global
        const str_jobs = localStorage.getItem("jobs");
        const data = str_jobs ? JSON.parse(str_jobs) : [];

        let item_job = document.getElementById("job").value;
        let item_day = document.getElementById("day").value;
        var obj = {
            job : item_job,
            day : item_day,
        }
        data.push(obj);

        //or data.push({job : item_job, day : item_day})

        localStorage.setItem("jobs", JSON.stringify(data));

    }

    render()
    clear()
}




function render(){
    //lay "data" tu local storage parse sang obj de xu ly, neu khong data =[] => co the de Global
    const str_jobs = localStorage.getItem("jobs");
    const data = str_jobs ? JSON.parse(str_jobs) : [];

    table = `<tr>
                <th>jobs</th>
                <th>days</th>
                <th>Action<th>
            </tr>`
    // for(let i = 0; i < data.length; i++){
    //     table += `<tr>
    //             <td>${data[i].job}</td>
    //             <td>${data[i].day}</td>
    //             <td> <button onclick = "delete(${data[i].job})"> </button> <td>
    //         </tr>`
    // }
    data.map((value, index) => {
        table += `<tr>
            <td>${value.job}</td>
            <td>${value.day}</td>
            <td> 
                <button onclick = "deleteJob(${index})"> Delete </button>
                <button onclick = "editJob(${index})"> Edit </button> 
            <td>
        </tr>` 
    })

    //
    document.getElementById("render").innerHTML = table
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// delete

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// edit


document.getElementById("update").style.display = "none" //hide update button (globally)


function editJob(index){
    //lay "data" tu local storage parse sang obj de xu ly, neu khong data =[] => co the de Global
    const str_jobs = localStorage.getItem("jobs");
    const data = str_jobs ? JSON.parse(str_jobs) : [];


    //truyen du lieu len form input
    document.getElementById("job").value = data[index].job
    document.getElementById("day").value = data[index].day

    document.getElementById("add").style.display = "none" // hide add button
    document.getElementById("update").style.display = "inline-block" //show update button

}








function clear(){
    document.getElementById("job").value = "";
    document.getElementById("day").value = "";

}








function deleteJob(index){

}



