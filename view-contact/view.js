const idFromURL = new URLSearchParams(window.location.search).get("id");

let allContacts = JSON.parse(localStorage.getItem("contacts") || "[]");

const selectedContact = allContacts.find((contact) => contact.id == idFromURL);

if (selectedContact) {
  document.getElementById("contact-details").innerHTML = `
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
