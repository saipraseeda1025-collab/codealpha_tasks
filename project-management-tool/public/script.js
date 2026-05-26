async function load(){

let res=
await fetch("/tasks");

let data=
await res.json();

document
.getElementById(
"total"
).innerText=
data.length;

document
.getElementById(
"done"
).innerText=
data.filter(
t=>t.completed
).length;

document
.getElementById(
"pending"
).innerText=
data.filter(
t=>!t.completed
).length;

let html="";

data.reverse()
.forEach(t=>{

html+=`

<div class="card">

<div>

<h3
class="
${t.completed?"done":""}
">

${t.title}

</h3>

<p
class="
${(t.priority||"Low").toLowerCase()}
">

${t.priority}

Priority

</p>

</div>

<div>

<button
onclick=
"complete(
${t.id}
)">
Done
</button>

<button
onclick=
"removeTask(
${t.id}
)">
Delete
</button>

</div>

</div>

`;

});

document
.getElementById(
"list"
)
.innerHTML=
html;

}

async function addTask(){

let title=
document
.getElementById(
"task"
).value;

let priority=
document
.getElementById(
"priority"
).value;

if(title==="")
return;

await fetch(
"/tasks",
{

method:
"POST",

headers:{
"Content-Type":
"application/json"
},

body:
JSON.stringify({
title,
priority
})

}

);

document
.getElementById(
"task"
).value="";

load();

}

async function complete(id){

await fetch(
`/tasks/${id}`,
{
method:"PUT"
}
);

load();

}

async function removeTask(id){

await fetch(
`/tasks/${id}`,
{
method:"DELETE"
}
);

load();

}

load();