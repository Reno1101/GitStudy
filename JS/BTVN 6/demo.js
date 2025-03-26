
var data = []


function add(){

    var item_id = document.getElementById("id").value
    var item_name = document.getElementById("name").value
    var item_age = document.getElementById("age").value

    var obj = {
        Id : item_id,
        Name : item_name,
        Age : item_age
    }
    data.push(obj);
    //console.log(data);
    
    render()
}


function render(){
    table = `<tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>`
    for(let i = 0; i < data.length; i++){
        table += `<tr>
                <td>${data[i].Id}</td>
                <td>${data[i].Name}</td>
                <td>${data[i].Age}</td>
            </tr>`
    }

    document.getElementById("render").innerHTML = table
}


