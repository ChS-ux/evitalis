export const GenderOptions = [
  { value: "Male", label: "Mężczyzna" },
  { value: "Female", label: "Kobieta" },
  { value: "Other", label: "Inna" },
];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Akt urodzenia",
  "Prawo jazdy",
  "Karta/Polisa ubezpieczenia zdrowotnego",
  "Wojskowa legitymacja",
  "Dowód osobisty",
  "Paszport",
  "Karta pobytu (Zielona karta)",
  "Karta ubezpieczenia społecznego",
  "Stanowa karta identyfikacyjna",
  "Legitymacja studencka",
  "Karta wyborcy",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Jan Zieliński",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Kamińska",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Dawid Lewandowski",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Ewa Pietrzak",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Joanna Pawlak",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Aleksander Romanowski",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmina Lis",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alicja Król",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Henryk Szymański",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
