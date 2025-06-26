const contacts = [
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
    isFavorite: true,
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
    isFavorite: false,
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
    isFavorite: true,
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
    isFavorite: false,
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
    isFavorite: true,
  },
];

// console.log(contacts);

function contactList() {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];

    const outputContact = `${contact.fullName} | ${contact.phone} | ${contact.email} | ${contact.address.city} | ${contact.address.postalCode} | ${contact.isFavorite}`;

    console.log(outputContact);
  }
}

contactList();
