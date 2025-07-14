const addFormElement = document.getElementById("contact-form");

addFormElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const addFormData = new FormData(addFormElement);

  const contactData = {
    fullName: addFormData.get("name"),
    email: addFormData.get("email"),
    phone: addFormData.get("phone"),
    streetAddress: addFormData.get("streetAddress"),
    city: addFormData.get("city"),
    postalCode: addFormData.get("postalCode"),
    isFavorited: addFormData.get("isFavorited") === "on", // Check if checkbox is checked
    labels: addFormData.getAll("labels"),
  };

  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  console.log({ contactData });

  // Add contact to the contacts array and save it to localStorage
  addContact(contacts, contactData);
});

// Function to generate ID
function generateId(contacts) {
  // return contacts[contacts.length - 1].id + 1;
  return contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1;
}

// Function to add contact
function addContact(contactList, newContactInput) {
  const newContact = {
    id: generateId(contactList),
    fullName: newContactInput.fullName,
    email: newContactInput.email,
    phone: newContactInput.phone,
    address: {
      streetAddress: newContactInput.streetAddress,
      city: newContactInput.city,
      postalCode: newContactInput.postalCode,
    },
    isFavorited: newContactInput.isFavorited,
    labels: newContactInput.labels,
  };

  console.log({ newContact });

  const newContacts = [...contactList, newContact];

  // Save new contacts to localStorage
  localStorage.setItem("contacts", JSON.stringify(newContacts));

  // Redirect ke halaman utama setelah berhasil
  window.location.href = "/index.html";

  // Display contacts after adding new one
  displayContacts(newContacts);
}
