function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close")
const submitBtn = document.querySelector('.btn-submit')

const firstName = document.querySelector('#first');
const firstError = document.querySelector('.firstError');

const lastName = document.querySelector('#last');
const lastError = document.querySelector('.lastError');

const check = document.querySelector('#checkbox1');
const spanCheck = document.querySelector('.needCheck');
let checked = true;

const mail = document.querySelector("#email");
const mailError = document.querySelector('.mailError');

const birthdate = document.querySelector("#birthdate");
const birthdateError = document.querySelector(".bdError");

const tournament = document.querySelector('#quantity');
const tournamentError = document.querySelector('.tntError')


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//launch close modal event
closeBtn.addEventListener("click", closeModal)

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal form
function closeModal() {
  modalbg.style.display = "none";
}


//Permet de gérer la checkbox CGU
check.addEventListener("change", () => {
  console.log(checked)
  if (checked == true) {
    checked = false
  } else {
    checked = true
  }
})

//Soumet le formulaire si conditions validés.
submitBtn.addEventListener('click', cguChecked)

// Vérifie à l'envoie si les CGU sont valides.
function cguChecked() {

  //Variable qui permet de savoir si le formulaire est valide
  let ready = true;

  //Permet de supprimer les messages d'erreur à chaque actualisation
  firstError.innerHTML = " "
  lastError.innerHTML = " "
  mailError.innerHTML = " "
  spanCheck.innerHTML = " "
  birthdateError.innerHTML = " "
  tournamentError.innerHTML = " "

  //vérifie la validité des CGU
  if (checked == false) {
    spanCheck.style.color = "firebrick"
    spanCheck.style.fontSize = "10px"
    spanCheck.innerHTML = "Vous devez accepter les CGU afin de soumettre le formulaire."
    ready = false;
  } 

  //vérifie la validité du prénom
  if (firstName.value.length < 2) {
    firstError.innerHTML = "Le prénom est oblgiatoire et est composé d'au minimum 2 caractère !"
    firstError.style.color = "firebrick"
    firstError.style.fontSize = "10px"
    ready = false;
  }

  //vérifie la validité du nom
  if (lastName.value.length < 2) {
    lastError.innerHTML = "Le nom est oblgiatoire et est composé d'au minimum 2 caractère !"
    lastError.style.color = "firebrick"
    lastError.style.fontSize = "10px"
    ready = false;
  }

  //vérifie la validité du mail
  if (mail.value.length < 5) {
    mailError.innerHTML = "L'email est obligatoire et sous un format *****@*****.** "
    mailError.style.color = "firebrick"
    mailError.style.fontSize = "10px"
    ready = false;
  }

  //vérifie la validité de l'anniverssaire
  if(birthdate.value.length != 10){
    birthdateError.innerHTML = "La date de naissance est nécessaire et sous le format dd/mm/yyyy"
    birthdateError.style.color = "firebrick"
    birthdateError.style.fontSize = "10px"
    ready = false;
  }

  //vérifie la validité de la participation
  if (tournament.value.length == 0 || tournament.value.length > 2)
  {
    tournamentError.innerHTML = "Indiquez votre nombre de participation. Entre 0 et 99"
    tournamentError.style.color = "firebrick"
    tournamentError.style.fontSize = "10px"
    ready = false;
  }

  //Si tous les éléments au-dessus valide, envoie le formulaire (simuler par l'alert)
  if (ready == true) {
    alert("Réservation prise en compte !")
  }

}





