export interface Person {
  gender: string;
  name: Name;
  location: Location;
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: any;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export interface Location {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export default [
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Bráulio",
      last: "Farias",
    },
    location: {
      street: {
        number: 3000,
        name: "Rua São Paulo ",
      },
      city: "João Pessoa",
      state: "Pernambuco",
      country: "Brazil",
      postcode: 71823,
      coordinates: {
        latitude: "-78.8983",
        longitude: "-54.5070",
      },
      timezone: {
        offset: "+1:00",
        description: "Brussels, Copenhagen, Madrid, Paris",
      },
    },
    email: "braulio.farias@example.com",
    login: {
      uuid: "3674c7aa-80ae-46dc-947b-c04a4dc5fcf5",
      username: "lazypanda799",
      password: "cookies",
      salt: "HdN3yYX3",
      md5: "273c36d496bb30921e0e47cbf3f4a27e",
      sha1: "3fb35576eb03595072e085886311d38d15eff7d1",
      sha256:
        "a0862c38e8b7d5635121cf403c57eb5132f91517a5cf64362da3d3443ad19930",
    },
    dob: {
      date: "1944-09-26T22:54:08.936Z",
      age: 77,
    },
    registered: {
      date: "2007-03-08T15:23:37.512Z",
      age: 14,
    },
    phone: "(28) 7397-9350",
    cell: "(56) 6822-8545",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/68.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/68.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/68.jpg",
    },
    nat: "BR",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Alexander",
      last: "Kristensen",
    },
    location: {
      street: {
        number: 741,
        name: "Langagervej",
      },
      city: "Hornbæk",
      state: "Midtjylland",
      country: "Denmark",
      postcode: 26974,
      coordinates: {
        latitude: "4.6981",
        longitude: "-151.0985",
      },
      timezone: {
        offset: "0:00",
        description: "Western Europe Time, London, Lisbon, Casablanca",
      },
    },
    email: "alexander.kristensen@example.com",
    login: {
      uuid: "9a9d34e8-6954-4067-9745-355fbd2e41c7",
      username: "silverladybug328",
      password: "aquarius",
      salt: "tv9R1l3s",
      md5: "598e8ccb89e99aff8ce5bb2e1a09abc1",
      sha1: "e236a4dabb9809bbb5cc5836fd7bc2565c7965ad",
      sha256:
        "65a320abead72cbd2b2b133927085de0c5708538e63c0777a2e0b1e2978dda4b",
    },
    dob: {
      date: "1963-06-14T12:13:37.766Z",
      age: 58,
    },
    registered: {
      date: "2004-04-01T10:14:23.846Z",
      age: 17,
    },
    phone: "14748400",
    cell: "24333773",
    id: {
      name: "CPR",
      value: "140663-9178",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/89.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/89.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/89.jpg",
    },
    nat: "DK",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Leroy",
      last: "Weaver",
    },
    location: {
      street: {
        number: 4107,
        name: "Church Lane",
      },
      city: "Carrickmacross",
      state: "Offaly",
      country: "Ireland",
      postcode: 73896,
      coordinates: {
        latitude: "-44.3172",
        longitude: "-54.8918",
      },
      timezone: {
        offset: "-11:00",
        description: "Midway Island, Samoa",
      },
    },
    email: "leroy.weaver@example.com",
    login: {
      uuid: "1e27b7d7-0047-4656-8b5f-1bda3af0602b",
      username: "organicwolf330",
      password: "vernon",
      salt: "APDBkLNj",
      md5: "0126f23a0908e4e2c59e9a2b163010b6",
      sha1: "a45f63292e0261006fd23ecd61bb22b086c82972",
      sha256:
        "7a01a126f438489a67256fb487816de5f1bc358aac7402e6c60fb66181f2e0d8",
    },
    dob: {
      date: "1958-06-07T02:42:40.740Z",
      age: 63,
    },
    registered: {
      date: "2016-05-11T16:59:08.417Z",
      age: 5,
    },
    phone: "051-913-6695",
    cell: "081-061-9005",
    id: {
      name: "PPS",
      value: "5335748T",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/2.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/2.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/2.jpg",
    },
    nat: "IE",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Holly",
      last: "Davies",
    },
    location: {
      street: {
        number: 1922,
        name: "Main South Road",
      },
      city: "New Plymouth",
      state: "Auckland",
      country: "New Zealand",
      postcode: 96164,
      coordinates: {
        latitude: "37.7937",
        longitude: "-27.1781",
      },
      timezone: {
        offset: "-9:00",
        description: "Alaska",
      },
    },
    email: "holly.davies@example.com",
    login: {
      uuid: "a7729a2f-9e44-4c0a-b35a-af90b2e10896",
      username: "beautifulmouse117",
      password: "wibble",
      salt: "w6e6Q57a",
      md5: "42ee66914ea4a857bdb2c00f41d2a96c",
      sha1: "cd5f7bba447f2cd61d48688201e77a7ecd2ac115",
      sha256:
        "9ceb18bf162bb8e5925aebbfa7b85eeb79626bc9ff5a48afbcd595fddd247d70",
    },
    dob: {
      date: "1987-03-25T22:45:44.781Z",
      age: 34,
    },
    registered: {
      date: "2013-12-27T06:40:54.172Z",
      age: 8,
    },
    phone: "(640)-490-2831",
    cell: "(035)-550-9566",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/37.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/37.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/37.jpg",
    },
    nat: "NZ",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Rico",
      last: "Herz",
    },
    location: {
      street: {
        number: 1503,
        name: "Jahnstraße",
      },
      city: "Oberursel (Taunus)",
      state: "Brandenburg",
      country: "Germany",
      postcode: 64010,
      coordinates: {
        latitude: "-33.7384",
        longitude: "8.8966",
      },
      timezone: {
        offset: "+2:00",
        description: "Kaliningrad, South Africa",
      },
    },
    email: "rico.herz@example.com",
    login: {
      uuid: "c7ddb625-1378-40f5-a1ea-ef0f1a0ca6a7",
      username: "bigmeercat882",
      password: "redbird",
      salt: "2tj5XiaZ",
      md5: "40fb63d5487d9c42dd54068c008efb68",
      sha1: "7b273150dea165fa09810d506b85dd9b0379b7f3",
      sha256:
        "25a8b78a5048db35ea5b9eb2470b44fb717ccee39af0756042028e5abd1fcfee",
    },
    dob: {
      date: "1954-04-15T21:44:33.585Z",
      age: 67,
    },
    registered: {
      date: "2018-05-23T18:39:47.337Z",
      age: 3,
    },
    phone: "0092-8582632",
    cell: "0175-1226226",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/74.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/74.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/74.jpg",
    },
    nat: "DE",
  },
  {
    gender: "male",
    name: {
      title: "Monsieur",
      first: "André",
      last: "Vincent",
    },
    location: {
      street: {
        number: 5281,
        name: "Rue Pasteur",
      },
      city: "Montreux",
      state: "Glarus",
      country: "Switzerland",
      postcode: 4033,
      coordinates: {
        latitude: "-78.4785",
        longitude: "-1.7053",
      },
      timezone: {
        offset: "+5:30",
        description: "Bombay, Calcutta, Madras, New Delhi",
      },
    },
    email: "andre.vincent@example.com",
    login: {
      uuid: "f04d5216-9880-4f9a-936c-5827a39d52ec",
      username: "crazycat643",
      password: "chubby",
      salt: "9zuzQpJR",
      md5: "2185d7340f27838d7f0e103170fc4f4f",
      sha1: "e4836f0d50a90885540f850f2af281e7b58dbf1a",
      sha256:
        "f66b9a5acd4346f73319cb3e8a39a332ba737a5fa0bba096fcf200a0fd0d567c",
    },
    dob: {
      date: "1990-02-08T09:41:53.412Z",
      age: 31,
    },
    registered: {
      date: "2009-06-05T07:55:58.254Z",
      age: 12,
    },
    phone: "077 401 96 66",
    cell: "077 888 90 31",
    id: {
      name: "AVS",
      value: "756.3408.9449.27",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/0.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/0.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/0.jpg",
    },
    nat: "CH",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Claude",
      last: "Ruiz",
    },
    location: {
      street: {
        number: 7844,
        name: "Crockett St",
      },
      city: "Bowral",
      state: "New South Wales",
      country: "Australia",
      postcode: 7571,
      coordinates: {
        latitude: "-64.4622",
        longitude: "-176.7682",
      },
      timezone: {
        offset: "0:00",
        description: "Western Europe Time, London, Lisbon, Casablanca",
      },
    },
    email: "claude.ruiz@example.com",
    login: {
      uuid: "db19d2eb-0e4d-48d4-9448-234a349340fb",
      username: "redfrog460",
      password: "desmond",
      salt: "PSWpCym0",
      md5: "8f1347efd766fe9228ffd4e6d925ecb1",
      sha1: "7e5f3b0a609fbc73f4caeb6e6b084d81fa5f336d",
      sha256:
        "3073c7dec16d5d824cbed7d5516b7a5c06270798e5356823c83e3f28b6ad3d4e",
    },
    dob: {
      date: "1950-12-04T16:49:42.928Z",
      age: 71,
    },
    registered: {
      date: "2012-09-07T00:03:32.198Z",
      age: 9,
    },
    phone: "04-4152-2707",
    cell: "0485-360-271",
    id: {
      name: "TFN",
      value: "922166560",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/28.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/28.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/28.jpg",
    },
    nat: "AU",
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Tracy",
      last: "Murphy",
    },
    location: {
      street: {
        number: 6855,
        name: "N Stelling Rd",
      },
      city: "New Haven",
      state: "Massachusetts",
      country: "United States",
      postcode: 51664,
      coordinates: {
        latitude: "5.0598",
        longitude: "158.5663",
      },
      timezone: {
        offset: "+2:00",
        description: "Kaliningrad, South Africa",
      },
    },
    email: "tracy.murphy@example.com",
    login: {
      uuid: "956f656a-39b3-4429-9605-7711faab7edd",
      username: "purplebear450",
      password: "edward",
      salt: "lHdlcEB4",
      md5: "60c699e14e1b02b6c4ed894771cec6e7",
      sha1: "624314087de015feaac25205d77beedc05dd4718",
      sha256:
        "7a01fb1f863775363e403197f3f64effd70032845fbae91cdc0f93099392c0a0",
    },
    dob: {
      date: "1970-02-07T08:34:36.374Z",
      age: 51,
    },
    registered: {
      date: "2006-02-21T14:16:06.559Z",
      age: 15,
    },
    phone: "(798)-147-0045",
    cell: "(860)-420-6714",
    id: {
      name: "SSN",
      value: "090-20-5647",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/49.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/49.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/49.jpg",
    },
    nat: "US",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Adem",
      last: "Toraman",
    },
    location: {
      street: {
        number: 4603,
        name: "Filistin Cd",
      },
      city: "Giresun",
      state: "Bayburt",
      country: "Turkey",
      postcode: 27908,
      coordinates: {
        latitude: "88.5965",
        longitude: "-151.3648",
      },
      timezone: {
        offset: "+11:00",
        description: "Magadan, Solomon Islands, New Caledonia",
      },
    },
    email: "adem.toraman@example.com",
    login: {
      uuid: "51570df7-7f4b-4072-87c2-23dabc3763f4",
      username: "silvermouse845",
      password: "sterling",
      salt: "H49iPr0W",
      md5: "cd2cfc79db90bc4da10b96a3bf0d3c10",
      sha1: "64e2ea3e795d1c0e6e89a16ab0cc6835d116b8ea",
      sha256:
        "b891ccabcd0ca788cb6951be92c974ea2c45e3b4d7274c2a7eeaaa2b862813a9",
    },
    dob: {
      date: "1969-07-10T19:06:05.183Z",
      age: 52,
    },
    registered: {
      date: "2016-04-25T19:01:32.928Z",
      age: 5,
    },
    phone: "(891)-379-0888",
    cell: "(171)-552-5883",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/58.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/58.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/58.jpg",
    },
    nat: "TR",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Marjo",
      last: "Van Dee",
    },
    location: {
      street: {
        number: 5686,
        name: "Kerklaantje",
      },
      city: "Baard",
      state: "Limburg",
      country: "Netherlands",
      postcode: 57816,
      coordinates: {
        latitude: "28.2980",
        longitude: "-68.3333",
      },
      timezone: {
        offset: "-3:30",
        description: "Newfoundland",
      },
    },
    email: "marjo.vandee@example.com",
    login: {
      uuid: "61946618-44c0-4ce9-a914-c2e342aa8a0c",
      username: "organiccat830",
      password: "californ",
      salt: "H8Nxngg4",
      md5: "dc72dcc2fecc78369ced078ef61258e8",
      sha1: "aed2af72d268dbacae5c632232debcb5df8f685a",
      sha256:
        "71b9e4b86e3ed79a0788f6ac20bc84ea67d8eb977f3d0f55e746d458b33b5a85",
    },
    dob: {
      date: "1956-06-21T01:20:13.939Z",
      age: 65,
    },
    registered: {
      date: "2003-08-04T01:36:47.307Z",
      age: 18,
    },
    phone: "(950)-516-9514",
    cell: "(581)-944-0229",
    id: {
      name: "BSN",
      value: "24018808",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/32.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/32.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/32.jpg",
    },
    nat: "NL",
  },
];

export const formatName = (name: Name) => {
  return `${name.first} ${name.last}`;
};

export const formatAddress = (location: Location) => {
  return `${location.street.number} ${location.street.name}, ${location.city}, ${location.country}`;
};
