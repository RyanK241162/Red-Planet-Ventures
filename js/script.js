
let totalMarsCost = 0;
let totalCost = 0;
let totalSaturnCost = 0;
let totalNeptuneCost = 0;
let totalJupiterCost = 0;
let totalUranusCost = 0;
let totalMoonCost = 0;
function increaseMars() {
  document.getElementById("ticketsMars").value =  parseInt(document.getElementById("ticketsMars").value) + 1;
}

function decreaseMars()
{
  if (document.getElementById("ticketsMars").value < 0) 
    {
        document.getElementById("ticketsMars").value = parseInt(document.getElementById("ticketsMars").value) - 1;
    } 
    else
   {
    document.getElementById("ticketsMars").value = 0;
   }
}


function total() {
  totalMarsCost = parseInt(document.getElementById("ticketsMars").value) * 25000;
  totalSaturnCost= parseInt(document.getElementById("ticketsSaturn").value) * 40000;
  totalNeptuneCost= parseInt(document.getElementById("ticketsNeptune").value) * 45000;
  totalJupiterCost= parseInt(document.getElementById("ticketsJupiter").value) * 65000;
  totalUranusCost= parseInt(document.getElementById("ticketsUranus").value) * 40000;
  totalMoonCost= parseInt(document.getElementById("ticketsMoon").value) * 15000;
  totalCost = totalMarsCost + totalSaturnCost + totalJupiterCost + totalMoonCost + totalNeptuneCost + totalUranusCost;
  document.getElementById("total").innerHTML= `R + ${totalCost}`;
}

//Saturn Ticket counter

function decreaseSaturn() {
  if (document.getElementById("ticketsSaturn").value != 0) {
    document.getElementById("ticketsSaturn").value =
      parseInt(document.getElementById("ticketsSaturn").value) - 1;
  } else {
    document.getElementById("ticketsSaturn").value = 0;
  }
}

function increaseSaturn() {
  document.getElementById("ticketsSaturn").value =
    parseInt(document.getElementById("ticketsSaturn").value) + 1;
}

//Neptune Ticket counter

function decreaseNeptune() {
  if (document.getElementById("ticketsNeptune").value != 0) {
    document.getElementById("ticketsNeptune").value =
      parseInt(document.getElementById("ticketsNeptune").value) - 1;
  } else {
    document.getElementById("ticketsNeptune").value = 0;
  }
}

function increaseNeptune() {
  document.getElementById("ticketsNeptune").value =
    parseInt(document.getElementById("ticketsNeptune").value) + 1;
}

//Jupiter Ticket counter

function decreaseJupiter() {
  if (document.getElementById("ticketsJupiter").value != 0) {
    document.getElementById("ticketsJupiter").value =
      parseInt(document.getElementById("ticketsJupiter").value) - 1;
  } else {
    document.getElementById("ticketsJupiter").value = 0;
  }
}

function increaseJupiter() {
  document.getElementById("ticketsJupiter").value =
    parseInt(document.getElementById("ticketsJupiter").value) + 1;
}

//Uranus Ticket counter

function decreaseUranus() {
  if (document.getElementById("ticketsUranus").value != 0) {
    document.getElementById("ticketsUranus").value =
      parseInt(document.getElementById("ticketsUranus").value) - 1;
  } else {
    document.getElementById("ticketsUranus").value = 0;
  }
}

function increaseUranus() {
  document.getElementById("ticketsUranus").value =
    parseInt(document.getElementById("ticketsUranus").value) + 1;
}


//Moon Ticket counter

function decreaseMoon() {
  if (document.getElementById("ticketsMoon").value != 0) {
    document.getElementById("ticketsMoon").value =
      parseInt(document.getElementById("ticketsMoon").value) - 1;
  } else {
    document.getElementById("ticketsMoon").value = 0;
  }
}

function increaseMoon() {
  document.getElementById("ticketsMoon").value =
    parseInt(document.getElementById("ticketsMoon").value) + 1;
}