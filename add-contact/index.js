const addFormElement = document.getElementById("contact-form");

const urlParams = new URLSearchParams(window.location.search);
const editId = urlParams.get("id");

addFormElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const addFormData = new FormData(addFormElement);

  const contactData = {
    fullName: addFormData.get("name"),
    email: addFormData.get("email"),
    phone: addFormData.get("phone"),
    streetAddress: addFormData.get("address"),
    city: addFormData.get("city"),
    postalCode: addFormData.get("postalCode"),
    isFavorited: addFormData.get("isFavorited") === "on",
    labels: addFormData.getAll("labels"),
  };

  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  console.log({ contactData });

  addContact(contacts, contactData);
});

// Function to generate ID
function generateId(contacts) {
  if (contacts.length === 0) return 1;
  return contacts[contacts.length - 1].id + 1;
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

  // Redirect to main page
  window.location.href = "/index.html";

  displayContacts(newContacts);
}
