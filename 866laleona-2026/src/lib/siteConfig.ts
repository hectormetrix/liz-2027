// Single source of truth for the firm's contact details and navigation.
// Change a phone number or address here and it updates everywhere on the site.

export const SITE = {
  firmName: "Valdez Garza Law Firm, P.C.",
  attorneyName: "Liz Valdez Garza",
  practiceLine: "Personal Injury · Criminal Defense",
  vanityPhone: "866-LA-LEONA",
  phoneDisplay: "(866) 525-3662",
  phoneHref: "tel:866-525-3662",
  spanishPhoneDisplay: "(956) 372-1190",
  spanishPhoneHref: "tel:956-372-1190",
  email: "liz@valdezgarzalaw.com",
  emailHref: "mailto:liz@valdezgarzalaw.com",
  address: {
    street: "1105 East 6th Street",
    city: "Brownsville",
    state: "TX",
    zip: "78520",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=1105+East+6th+Street+Brownsville+TX+78520",
  social: {
    facebook: "https://www.facebook.com/866LaLeona/",
    instagram: "https://www.instagram.com/866laleona/",
    tiktok: "https://www.tiktok.com/@866laleona",
  },
} as const;

export type PracticeArea = {
  title: string;
  short: string;
  description: string;
  href: string;
  image: string;
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    title: "Car Accidents",
    short: "Car Accidents",
    description:
      "Bad things happen to good people. When they do, know you have a lawyer you can trust.",
    href: "/personal-injury/car-accidents",
    image: "/images/practice-car.webp",
  },
  {
    title: "Truck Accidents",
    short: "Truck Accidents",
    description:
      "Semi trucks weigh tens of thousands of pounds. When they crash, people get hurt.",
    href: "/personal-injury/truck-accidents",
    image: "/images/practice-truck.webp",
  },
  {
    title: "Workplace Injuries",
    short: "Work Injuries",
    description:
      "Your employer is responsible for a safe place to work. If you've been hurt on the job, we can help.",
    href: "/personal-injury/workplace-injuries",
    image: "/images/practice-workplace.webp",
  },
  {
    title: "Commercial Vehicles",
    short: "Commercial Vehicles",
    description:
      "Distracted drivers in company vehicles put everyone at risk. If a company vehicle injured you, call today.",
    href: "/personal-injury/commercial-vehicle-accidents",
    image: "/images/practice-commercial.webp",
  },
  {
    title: "Oil Field Accidents",
    short: "Oil Field Accidents",
    description:
      "Oil field workers and the communities around them suffer from reckless and careless accidents.",
    href: "/personal-injury/oil-field-accidents",
    image: "/images/practice-oilfield.webp",
  },
];

export const NAV_LINKS = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
] as const;
