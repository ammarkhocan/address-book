const url = new URL(window.location.href);
const idFromURL = url.searchParams.get("id");

let allContacts = localStorage.getItem("contacts");

allContacts = allContacts ? JSON.parse(allContacts) : [];

let selectedContact = null;

for (let i = 0; i < allContacts.length; i++) {
  if (allContacts[i].id == idFromURL) {
    selectedContact = allContacts[i];
    break;
  }
}

let displayPlace = document.getElementById("contact-details");

if (selectedContact) {
  displayPlace.innerHTML = `
    <p><strong>Name:</strong> ${selectedContact.fullName}</p>
    <p><strong>Email:</strong> ${selectedContact.email}</p>
    <p><strong>Phone:</strong> ${selectedContact.phone}</p>
    <p><strong>Address:</strong> ${selectedContact.address.streetAddress}, ${
    selectedContact.address.city
  }, ${selectedContact.address.postalCode}</p>
    <p><strong>Favorited:</strong> ${
      selectedContact.isFavorited ? "Yes" : "No"
    }</p>
    <p><strong>Labels:</strong> ${selectedContact.labels}</p>
  `;
}
