const events = [
  {
    title: "Faiz Talk",
    icon: "https://raw.githubusercontent.com/RaoAkif/ConferencePage/06f71e60a00948d9ccd7cc8f296e667be6ecf2a9/images/events/remembering_faiz.svg",
    description:
      "Listen to the Poets and their beautiful poetry that would enlighten your spirit and revive the era of Faiz Ahmad Faiz.",
  },
  {
    title: "Ghazal Night",
    icon: "https://raw.githubusercontent.com/RaoAkif/ConferencePage/06f71e60a00948d9ccd7cc8f296e667be6ecf2a9/images/events/ghazal_night.svg",
    description:
      "Listen to the Poets and their beautiful poetry that would enlighten your spirit and revive the era of Faiz Ahmad Faiz.",
  },
  {
    title: "Political Debates",
    icon: "https://raw.githubusercontent.com/RaoAkif/ConferencePage/06f71e60a00948d9ccd7cc8f296e667be6ecf2a9/images/events/political_debate.svg",
    description:
      "Listen to the Poets and their beautiful poetry that would enlighten your spirit and revive the era of Faiz Ahmad Faiz.",
  },
  {
    title: "Cultural Meetup",
    icon: "https://raw.githubusercontent.com/RaoAkif/ConferencePage/06f71e60a00948d9ccd7cc8f296e667be6ecf2a9/images/events/cultural_meetup.svg",
    description:
      "Listen to the Poets and their beautiful poetry that would enlighten your spirit and revive the era of Faiz Ahmad Faiz.",
  },
  {
    title: "Music Night",
    icon: "https://raw.githubusercontent.com/RaoAkif/ConferencePage/06f71e60a00948d9ccd7cc8f296e667be6ecf2a9/images/events/music_night.svg",
    description:
      "Listen to the Poets and their beautiful poetry that would enlighten your spirit and revive the era of Faiz Ahmad Faiz.",
  },
];

const speakers = [
  {
    name: "Zia Moheyuddin",
    position: "Producer, Director and Television Broadcaster",
    picture:
      "https://raw.githubusercontent.com/RaoAkif/ConferencePage/JavaScript_Mapping/images/speakers/zia_moheyuddin.jpg",
    bio: "Seemi Raheel is an one of the oldest PTV actoress, writer and director, and serving this industry from more than 40 years.",
  },
  {
    name: "Moneeza Hashmi",
    position: "Faiz Ahmad Faiz's Daughter",
    picture:
      "https://raw.githubusercontent.com/RaoAkif/ConferencePage/main/images/speakers/moneza-hashmi.jpg",
    bio: "Seemi Raheel is an one of the oldest PTV actoress, writer and director, and serving this industry from more than 40 years.",
  },
  {
    name: "Tina Sani",
    position: "Pakistani Singer",
    picture:
      "https://raw.githubusercontent.com/RaoAkif/ConferencePage/main/images/speakers/tina-sani.jpg",
    bio: "Seemi Raheel is an one of the oldest PTV actoress, writer and director, and serving this industry from more than 40 years.",
  },
  {
    name: "Naseeruddin Shah",
    position: "Indian Actor",
    picture:
      "https://raw.githubusercontent.com/RaoAkif/ConferencePage/JavaScript_Mapping/images/speakers/naseeruddin-shah.jpg",
    bio: "Seemi Raheel is an one of the oldest PTV actoress, writer and director, and serving this industry from more than 40 years.",
  },
  {
    name: "Samina Peerzada",
    position: "Pakistani Actoress",
    picture:
      "https://raw.githubusercontent.com/RaoAkif/ConferencePage/main/images/speakers/samina-peerzada.jpg",
    bio: "Seemi Raheel is an one of the oldest PTV actoress, writer and director, and serving this industry from more than 40 years.",
  },
  {
    name: "Samia Mumtaz",
    position: "Pakistani Actoress",
    picture:
      "https://raw.githubusercontent.com/RaoAkif/ConferencePage/main/images/speakers/samia-mumtaz.jpg",
    bio: "Seemi Raheel is an one of the oldest PTV actoress, writer and director, and serving this industry from more than 40 years.",
  },
];

const partners = [
  {
    name: "Beats",
    logo: "https://raw.githubusercontent.com/RaoAkif/ConferencePage/0877c61e3adb59dfabd3085638ed4be10756a062/images/partners/beats.svg",
  },
  {
    name: "React",
    logo: "https://raw.githubusercontent.com/RaoAkif/ConferencePage/970492589f7cc41912ad3e532b3317d636577487/images/partners/react.svg",
  },
  {
    name: "Discord",
    logo: "https://raw.githubusercontent.com/RaoAkif/ConferencePage/0877c61e3adb59dfabd3085638ed4be10756a062/images/partners/discord.svg",
  },
  {
    name: "Gatsby",
    logo: "https://raw.githubusercontent.com/RaoAkif/ConferencePage/970492589f7cc41912ad3e532b3317d636577487/images/partners/gatsby.svg",
  },
  {
    name: "Google Cloud Platform",
    logo: "https://raw.githubusercontent.com/RaoAkif/ConferencePage/970492589f7cc41912ad3e532b3317d636577487/images/partners/gcl.svg",
  },
];

const Events = document.querySelector("#events-list");

events.forEach((event, index) => {
  Events.innerHTML += `
  <li class="event">
  <img class="event-icon" src=${event.icon} alt="event-icon-${index}" >
  <h4 class="event-name txt-c">${event.title}</h4>
  <p class="event-desc">${event.description}</p>
  </li>
`;
});

const Speakers = document.querySelector("#speakers-list");

speakers.forEach((speaker, index) => {
  Speakers.innerHTML += `
    <li class="speaker">
        <div class="speaker-image">
            <img src="https://raw.githubusercontent.com/RaoAkif/ConferencePage/6a691a0e99a362752772e4926d17ed4943e33517/images/bg/speaker_bg.svg" alt="speaker background" class="speaker-image-bg">
            <img src=${speaker.picture} alt="speaker profile pic${index}" class="speaker-pic">
        </div>
        <div class="speaker-desc">
            <div class="speaker-name">${speaker.name}</div>
            <div class="speaker-position">${speaker.position}</div>
            <div class="speaker-bio">${speaker.name} is an one of the oldest PTV actoress, writer and director, and serving this industry from more than 40 years.</div>
        </div>
    </li>
`;
});

const Partners = document.querySelector(".partners-list");

partners.forEach((partner, index) => {
  Partners.innerHTML += `
    <li class="partner"><img src=${partner.logo} alt="spaceX-${index}" class="partner-img"></li>
`;
});

const menuIcon = document.querySelector('#hamburger');
