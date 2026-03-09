
function openModal(service){

const modal = document.getElementById("bookingModal");

document.getElementById("serviceName").innerText = service;

modal.style.display="flex";

}

function closeModal(){

document.getElementById("bookingModal").style.display="none";

}
