let dataContacts = [
  {
    id: 1,
    fullName: "Ammar Ismail Khocan",
    email: "ammarexample@gmail.com",
    phone: "+62 812002333",
    address: {
      streetAddress: "Jl. Nusantara No.12",
      city: "Bandar Lampung",
      postalCode: 12344,
    },
    isFavorited: true,
    labels: ["friend", "work", "family"],
  },
  {
    id: 2,
    fullName: "Jason",
    email: "jason1example@gmail.com",
    phone: "+62 822092287",
    address: {
      streetAddress: "Jl. Asoka No.90",
      city: "Medan",
      postalCode: 22023,
    },
    isFavorited: false,
    labels: ["friend"],
  },
  {
    id: 3,
    fullName: "Siti Aisyah",
    email: "aisyah@example.com",
    phone: "+62 81322334455",
    address: {
      streetAddress: "Jl. Merdeka No.10",
      city: "Yogyakarta",
      postalCode: 55123,
    },
    isFavorited: true,
    labels: ["family"],
  },
  {
    id: 4,
    fullName: "Rizky Ramadhan",
    email: "rizky@example.com",
    phone: "+62 81299887766",
    address: {
      streetAddress: "Jl. Gajah Mada No.8",
      city: "Jakarta Pusat",
      postalCode: 10130,
    },
    isFavorited: false,
    labels: ["work"],
  },
  {
    id: 5,
    fullName: "Putri Melati",
    email: "putri.melati@example.com",
    phone: "+62 81566778899",
    address: {
      streetAddress: "Jl. Diponegoro No.5",
      city: "Surabaya",
      postalCode: 60265,
    },
    isFavorited: true,
    labels: ["friend"],
  },
];

localStorage.setItem("contacts", JSON.stringify(dataContacts));

// Function DISPLAY contact
function displayContacts(contacts) {
  const contactListElement = document.getElementById("contact-list");

  contactListElement.innerHTML = contacts
    .map((contact) => {
      return `<li>
           <p><strong>Full Name:</strong> ${contact.fullName}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Phone:</strong> ${contact.phone}</p>
        <p><strong>Address:</strong> ${contact.address.streetAddress}, ${
        contact.address.city
      }, ${contact.address.postalCode}</p>
        <p><strong>Favorited:</strong> ${contact.isFavorited ? "Yes" : "No"}</p>
        <p><strong>Labels:</strong> ${contact.labels.join(", ")}</p>
        <button onclick="deleteContact(${contact.id})">Delete</button>
        <button onclick="deleteContact(${contact.ediit})">Edit</button>
        <hr>
        </li>`;
    })
    .join("");
}
displayContacts(dataContacts);

// Function DELETE Contact
function deleteContact(id) {
  const updateContacts = dataContacts.filter((contact) => contact.id !== id);

  dataContacts = updateContacts;

  displayContacts(dataContacts);
}

// Function SEARCH Contact
// function searchContacts(allContacts, searchTerm) {
//   const searchedContacts = allContacts.filter((contact) => {
//     return contact.fullName.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   if (searchedContacts.length <= 0) {
//     console.log("Not Found");
//     return;
//   }
//   displayContacts(searchedContacts);
// }

// Function ADD Contact
// function generateId(contacts) {
//   return contacts[contacts.length - 1].id + 1;
// }

// function addContact(contactList, newContactInput) {
//   const newContact = {
//     id: generateId(contactList),
//     fullName: newContactInput.fullName,
//     email: newContactInput.email,
//     phone: newContactInput.phone,
//     address: {
//       streetAddress: newContactInput.streetAddress,
//       city: newContactInput.city,
//       postalCode: newContactInput.postalCode,
//     },
//     isFavorited: newContactInput.isFavorited,
//     labels: newContactInput.labels,
//   };

//   const newContacts = [...contactList, newContact];
//   displayContacts(newContacts);
// }

// Function EDIT Contact
// function updateContact(contacts, contactId, updatedContactInput) {
//   const orignalData = contacts.find((contact) => {
//     return contact.id === contactId;
//   });

//   const updatedContact = {
//     id: contactId,
//     fullName: updatedContactInput.fullName || orignalData.fullName,
//     email: updatedContactInput.email || orignalData.email,
//     phone: updatedContactInput.phone || orignalData.phone,
//     address: {
//       streetAddress:
//         updatedContactInput.streetAddress || orignalData.streetAddress,
//       city: updatedContactInput.city || orignalData.city,
//       postalCode: updatedContactInput.postalCode || orignalData.postalCode,
//     },
//     isFavorited: updatedContactInput.isFavorited || orignalData.isFavorited,
//     labels: updatedContactInput.labels || orignalData.labels,
//   };

//   const updatedContacts = contacts.map((contact) => {
//     if (contact.id === contactId) {
//       return updatedContact;
//     }
//     return contact;
//   });

//   contacts = updatedContacts;
//   displayContacts(contacts);
// }

// searchContacts(contacts, "ammar");

// addContact(contacts, {
//   fullName: "Budi Putra",
//   email: "Budi Put@gmail.com",
//   phone: "+62 8139099900",
//   streetAddress: "Jl. Asoka Barat No.89",
//   city: "Solo",
//   postalCode: 57111,
//   isFavorited: true,
//   labels: ["work"],
// });

// deleteContact(contacts, 6);

// updateContact(contacts, 1, {
//   fullName: "joe Doe",
// });
