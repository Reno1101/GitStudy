
const str_jobs = localStorage.getItem("jobs");
const data = str_jobs ? JSON.parse(str_jobs) : [];

//const data = localStorage.getItem("jobs") ? JSON.parse(localStorage.getItem("jobs")  ) : [];

// add press enter to add
ip_content.addEventListener("keyup", (e) => {
    console.log(e.key);
    
    if (e.key === "Enter"){
        add();
    }
})


function add(){

    var item_job = document.getElementById("job").value;
    var item_day = document.getElementById("day").value;
    
    var obj = {
        job : item_job,
        day : item_day,
    }

    data.push(obj);

    localStorage.setItem("jobs", JSON.stringify(data));

    render();
    clear();
}

function clear(){
    document.getElementById("job").value = "";
    document.getElementById("day").value = "";

}

function render(){
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
                <button onclick = "deleteJob(${index})"> </button> 
            <td>
        </tr>` 
    })

    document.getElementById("render").innerHTML = table
}
