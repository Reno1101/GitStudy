const ip_content = document.getElementById("ip_content");
const KEY_JOBS = "jobs"

const str_jobs = localStorage.getItem(KEY_JOBS);
const list_jobs = str_jobs ? JSON.parse(str_jobs) : [];

const ul_jobs = document.getElementById("ul_jobs");

ip_content.addEventListener("keyup", (e) => {
    console.log(e.key);
    
    if (e.key === "Enter"){
        add();
    }
})

function add(){
    const content = ip_content.value;
    
    list_jobs.push(content);

    localStorage.setItem(KEY_JOBS, JSON.stringify(list_jobs));

    ip_content.value = "";

    renderJobs();
}

function renderJobs(){
    const listLi = list_jobs.map((v) => {
        return `<li>${v} </li>`;
    });


    ul_jobs.innerHTML = listLi.join("");
}

renderJobs();


