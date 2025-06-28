const contacts = [
  {
    id: 1,
    fullName: "Ammar Ismail Khocan",
    email: "ammarexample@gmail.com",
    phone: "+62 812002333",
    address: {
      street: "Jl. Nusantara No.12",
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

function displayContacts() {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];

    const contactToDisplay = `
    Full name: ${contact.fullName}
    Phone: ${contact.phone}
    Email: ${contact.email}
    Address:
    - City: ${contact.address.city}
    - Postal: ${contact.address.postalCode}
    ${contact.isFavorited ? "⭐ Favorited" : ""}
    Labels: ${contact.labels ? contact.labels.join(", ") : "No labels"}`;

    console.log(contactToDisplay);
  }
}

displayContacts();
