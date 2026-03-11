let services = [
{ name:"AC Repair", price:499 },
{ name:"Electrician", price:299 },
{ name:"Plumbing", price:399 }
];

function loadDashboard(){

document.getElementById("content").innerHTML = `

<h1>Dashboard</h1>

<div class="card-grid">

<div class="card">
<h2>${services.length}</h2>
<p>Total Services</p>
</div>

<div class="card">
<h2>45</h2>
<p>Total Bookings</p>
</div>

<div class="card">
<h2>20</h2>
<p>Users</p>
</div>

<div class="card">
<h2>₹15000</h2>
<p>Revenue</p>
</div>

</div>

`;

}

function loadServices(){

let html = `
<h1>Services</h1>

<button onclick="showAddService()">Add Service</button>

<br><br>
`;

services.forEach((s,i)=>{

html += `

<div style="background:white;padding:15px;margin-bottom:10px;border-radius:6px">

<b>${s.name}</b> - ₹${s.price}

<button onclick="deleteService(${i})">Delete</button>

</div>

`;

});

document.getElementById("content").innerHTML = html;

}

function showAddService(){

document.getElementById("content").innerHTML = `

<h2>Add Service</h2>

<input id="name" placeholder="Service Name">
<br><br>

<input id="price" placeholder="Price">
<br><br>

<button onclick="addService()">Add</button>

`;

}

function addService(){

let name=document.getElementById("name").value;
let price=document.getElementById("price").value;

if(name==="" || price===""){
alert("Please fill all fields");
return;
}

services.push({name,price});

loadServices();

}

function deleteService(i){

services.splice(i,1);

loadServices();

}

function loadBookings(){

document.getElementById("content").innerHTML = `

<h1>Bookings</h1>

<p>No bookings yet</p>

`;

}

function loadUsers(){

document.getElementById("content").innerHTML = `

<h1>Users</h1>

<p>No users yet</p>

`;

}

loadDashboard();

function logout(){

localStorage.removeItem("role");

/* FIXED PATH */

window.location.href="../login.html";

}