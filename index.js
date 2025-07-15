let dataContacts = JSON.parse(localStorage.getItem("contacts")) || [];

// Function untuk menampilkan kontak
function displayContacts(contacts) {
  const contactListElement = document.getElementById("contact-list");

  const ulrParams = new URLSearchParams(window.location.search);
  const searchQuery = ulrParams.get("q");

  const contactsToDisplay = searchQuery
    ? searchContacts(contacts, searchQuery)
    : contacts;

  contactListElement.innerHTML = contactsToDisplay
    .map((contact) => {
      return `<li class="flex items-center justify-between p-3 border-b border-gray-200 hover:bg-gray-50 rounded-md">
        <div class="flex items-start space-x-3 flex-1">
          <div>
            <p class="font-semibold text-gray-700">${contact.fullName}</p>
            <p class="text-sm text-gray-600">Email: ${contact.email}</p>
            <p class="text-sm text-gray-600">Phone: ${contact.phone}</p>
            <p class="text-sm text-gray-600">Address: ${
              contact.address.streetAddress
            }, ${contact.address.city}, ${contact.address.postalCode}</p>
            <p class="text-sm text-gray-600">Favorited: ${
              contact.isFavorited ? "Yes" : "No"
            }</p>
            <p class="text-sm text-gray-600">Labels: ${contact.labels.join(
              ", "
            )}</p>
          </div>
        </div>

        <div class="flex items-center space-x-3 ml-auto">
          <button class="text-gray-500 hover:text-yellow-500" onclick="viewContact(${
            contact.id
          })">
          View
          </button>
          <button class="text-gray-500 hover:text-blue-500" onclick="editContact(${
            contact.id
          })">
          Edit
          </button>
          <button class="text-gray-500 hover:text-red-500" onclick="deleteContact(${
            contact.id
          })">
            Delete
          </button>
        </div>
        <hr class="my-2 border-gray-300" />
      </li>`;
    })
    .join("");
}

displayContacts(dataContacts);

// Function DELETE Contact
function deleteContact(id) {
  const updateContacts = dataContacts.filter((contact) => contact.id !== id);
  dataContacts = updateContacts;

  localStorage.setItem("contacts", JSON.stringify(dataContacts));

  displayContacts(dataContacts);
}

// Function SEARCH Contact
function searchContacts(allContacts, searchQuery) {
  const searchedContacts = allContacts.filter((contact) => {
    return contact.fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  if (searchedContacts.length <= 0) {
    console.log("Not Found");
    return [];
  }

  return searchedContacts;
}

// Redirect contact view
function viewContact(id) {
  window.location.href = `view-contact/index.html?id=${id}`;
}

//edit
function editContact(id) {
  window.location.href = `add-contact/index.html?id=${id}`;
}
