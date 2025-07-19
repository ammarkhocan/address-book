const urlParameters = new URLSearchParams(window.location.search);
const contactId = parseInt(urlParameters.get("id"));

let contactList = JSON.parse(localStorage.getItem("contacts")) || [];

const selectedContact = contactList.find(function (contact) {
  return contact.id === contactId;
});

const editForm = document.getElementById("edit-form");
const inputFullName = document.getElementById("fullName");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const inputStreetAddress = document.getElementById("streetAddress");
const inputCity = document.getElementById("city");
const inputPostalCode = document.getElementById("postalCode");
const inputIsFavorited = document.getElementById("isFavorited");
const inputLabels = document.getElementById("labels");

// Display contact
inputFullName.value = selectedContact.fullName;
inputEmail.value = selectedContact.email;
inputPhone.value = selectedContact.phone;
inputStreetAddress.value = selectedContact.address.streetAddress;
inputCity.value = selectedContact.address.city;
inputPostalCode.value = selectedContact.address.postalCode;
inputIsFavorited.checked = selectedContact.isFavorited;
inputLabels.value = selectedContact.labels[0] || ""; // hanya ambil label pertama

editForm.addEventListener("submit", function (event) {
  event.preventDefault();

  selectedContact.fullName = inputFullName.value;
  selectedContact.email = inputEmail.value;
  selectedContact.phone = inputPhone.value;
  selectedContact.address.streetAddress = inputStreetAddress.value;
  selectedContact.address.city = inputCity.value;
  selectedContact.address.postalCode = inputPostalCode.value;
  selectedContact.isFavorited = inputIsFavorited.checked;
  selectedContact.labels = [inputLabels.value]; // Simpan dalam array

  localStorage.setItem("contacts", JSON.stringify(contactList));

  window.location.href = "/";
});

const cancelButton = document.getElementById("cancel-button");
cancelButton.addEventListener("click", function () {
  window.location.href = "/";
});
