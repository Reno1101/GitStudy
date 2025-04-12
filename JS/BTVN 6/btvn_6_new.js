
// const str_jobs = localStorage.getItem("jobs");
// const data = str_jobs ? JSON.parse(str_jobs) : [];

//const data = localStorage.getItem("jobs") ? JSON.parse(localStorage.getItem("jobs")  ) : [];

//document.getElementById("update").style.display = "none" //hide update button (globally)




function resetInput(){
    document.getElementById("job").value=""
    document.getElementById("day").value=""
}





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

        //cap nhat du lieu tron local storage sau khi co [data]
        localStorage.setItem("jobs", JSON.stringify(data));

    }

    render()
    resetInput()
}




function render(){
    //lay "data" tu local storage parse sang obj de xu ly, neu khong data =[] => co the de Global
    const str_jobs = localStorage.getItem("jobs");
    const data = str_jobs ? JSON.parse(str_jobs) : [];

    table = `<tr>
                <th>id</th>
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
            <td>${index+1}</td>
            <td>${value.job}</td>
            <td>${value.day}</td>
            <td> 
                <button onclick = "deleteJob(${index})"> Delete </button>
                <button onclick = "editJob(${index})"> Edit </button> 
            <td>
        </tr>` 
    })
    // Creates an Edit button.
    // When clicked, it calls the editJob(index) function.
    // ${index} again refers to the job's position in the array.

    document.getElementById("render").innerHTML = table
}


// //usage of [index]
// Clicking "Delete" on "Task 2" passes index = 1 to deleteJob(1).
// Clicking "Edit" on "Task 3" passes index = 2 to editJob(2).

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// delete

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// edit


//button on click => function editJob(2), 2 is the index

function editJob(index){
    //lay "data" tu local storage parse sang obj de xu ly, neu khong data =[] => co the de Global
    const str_jobs = localStorage.getItem("jobs");
    const data = str_jobs ? JSON.parse(str_jobs) : [];


    //Fill the form with the job data
    document.getElementById("job").value = data[index].job
    document.getElementById("day").value = data[index].day

    //truyen value [index] locate tại nơi ấn update ->> vao form [hiddenindex] ->> <input type="hiddenIndex" value ="[index duoc truyen]"> 
    //Store the index in a hidden input for later use in update()
    document.getElementById("hiddenIndex").value = index

    document.getElementById("add").style.display = "none" // hide add button
    document.getElementById("update").style.display = "inline-block" //show update button

}

function update(){
    //lay "data" tu local storage parse sang obj de xu ly, neu khong data =[] => co the de Global
    const str_jobs = localStorage.getItem("jobs");
    const data = str_jobs ? JSON.parse(str_jobs) : [];

    //truyen lai du lieu da sua vao vi tri .value tai [hiddenindex]
    data[document.getElementById("hiddenIndex").value] = {
        job: document.getElementById("job").value,
        day: document.getElementById("day").value,
    }

    //cap nhat du lieu tron local storage sau khi co [data]
    localStorage.setItem("jobs", JSON.stringify(data));



    document.getElementById("add").style.display = "inline-block" // hide add button
    document.getElementById("update").style.display = "none" //show update button

    render()
    resetInput()
}




function deleteJob(index){
    //lay "data" tu local storage parse sang obj de xu ly, neu khong data =[] => co the de Global
    const str_jobs = localStorage.getItem("jobs");
    const data = str_jobs ? JSON.parse(str_jobs) : [];
    data.splice(index,1)
    localStorage.setItem("jobs", JSON.stringify(data));
    render()
}

