let dataContacts = JSON.parse(localStorage.getItem("contacts")) || [];

function displayContacts(contacts) {
  const contactListElement = document.getElementById("contact-list");

  const urlSearchParams = new URLSearchParams(window.location.search);
  const searchQuery = urlSearchParams.get("q");
  const labelQuery = urlSearchParams.get("label");
  const favoritesQuery = urlSearchParams.get("favorites") === "" ? true : false;

  // Filter berdasarkan pencarian
  let contactsToDisplay = searchQuery ? searchContacts(contacts, searchQuery) : contacts;

  // Filter berdasarkan label: friend, work, family
  if (labelQuery) {
    contactsToDisplay = filterContactsByLabel(contactsToDisplay, labelQuery);
  }

  if (favoritesQuery) {
    contactsToDisplay = filterFavoritedContacts(contactsToDisplay);
  }

  // Render kontak yang telah difilter
  contactListElement.innerHTML = contactsToDisplay
    .map((contact) => {
      return `<li class="flex items-center justify-between p-3 border-b border-gray-200 hover:bg-gray-50 rounded-md">
        <div class="flex items-start space-x-3 flex-1">
          <div>
            <p class="font-semibold text-gray-700">${contact.fullName}</p>
            <p class="text-sm text-gray-600">Email: ${contact.email}</p>
            <p class="text-sm text-gray-600">Phone: ${contact.phone}</p>
            <p class="text-sm text-gray-600">Address: ${contact.address.streetAddress}, ${contact.address.city}, ${
        contact.address.postalCode
      }</p>
            <p class="text-sm text-gray-600">Favorited: ${contact.isFavorited ? "Yes" : "No"}</p>
            <p class="text-sm text-gray-600">Labels: ${contact.labels.join(", ")}</p>
          </div>
        </div>

        <div class="flex items-center space-x-3 ml-auto">
          <button class="text-gray-500 hover:text-yellow-500" onclick="viewContact(${contact.id})">
          View
          </button>
          <button class="text-gray-500 hover:text-blue-500" onclick="editContact(${contact.id})">
          Edit
          </button>
          <button class="text-gray-500 hover:text-red-500" onclick="deleteContact(${contact.id})">
            Delete
          </button>
        </div>
        <hr class="my-2 border-gray-300" />
      </li>`;
    })
    .join("");
}

function deleteContact(id) {
  const isConfirmed = confirm("Do you want to delete this contact?");
  if (!isConfirmed) return;

  const updateContacts = dataContacts.filter(function (contact) {
    return contact.id !== id;
  });

  dataContacts = updateContacts;
  localStorage.setItem("contacts", JSON.stringify(dataContacts));

  displayContacts(dataContacts);
}

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

function filterContactsByLabel(allContacts, labelQuery) {
  const filteredContacts = allContacts.filter((contact) => {
    return contact.labels.includes(labelQuery);
  });

  if (filteredContacts.length <= 0) {
    console.log("No contacts found for this label");
    return [];
  }

  return filteredContacts;
}

function filterFavoritedContacts(allContacts) {
  const filteredContacts = allContacts.filter((contact) => {
    return contact.isFavorited === true;
  });

  if (filteredContacts.length <= 0) {
    console.log("No favorited contacts found");
    return [];
  }

  return filteredContacts;
}

function viewContact(id) {
  window.location.href = `view-contact/?id=${id}`;
}

function editContact(id) {
  window.location.href = `edit-contact/?id=${id}`;
}

displayContacts(dataContacts);
