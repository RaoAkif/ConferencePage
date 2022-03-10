const speakers = [
  {
    name: 'Zia Moheyuddin',
    position: 'Producer, Director and Television Broadcaster',
    picture:
      'https://raw.githubusercontent.com/RaoAkif/ConferencePage/JavaScript_Mapping/images/speakers/zia_moheyuddin.jpg',
    bio: 'Seemi Raheel is an one of the oldest PTV actoress, writer and director, and serving this industry from more than 40 years.',
  },
  {
    name: 'Moneeza Hashmi',
    position: 'Faiz Ahmad Faiz's Daughter',
    picture:
      'https://raw.githubusercontent.com/RaoAkif/ConferencePage/main/images/speakers/moneza-hashmi.jpg',
    bio: 'Seemi Raheel is an one of the oldest PTV actoress, writer and director, and serving this industry from more than 40 years.',
  },
  {
    name: 'Tina Sani',
    position: 'Pakistani Singer',
    picture:
      'https://raw.githubusercontent.com/RaoAkif/ConferencePage/main/images/speakers/tina-sani.jpg',
    bio: 'Seemi Raheel is an one of the oldest PTV actoress, writer and director, and serving this industry from more than 40 years.',
  },
  {
    name: 'Naseeruddin Shah',
    position: 'Indian Actor',
    picture:
      'https://raw.githubusercontent.com/RaoAkif/ConferencePage/JavaScript_Mapping/images/speakers/naseeruddin-shah.jpg',
    bio: 'Seemi Raheel is an one of the oldest PTV actoress, writer and director, and serving this industry from more than 40 years.',
  },
  {
    name: 'Samina Peerzada',
    position: 'Pakistani Actoress',
    picture:
      'https://raw.githubusercontent.com/RaoAkif/ConferencePage/main/images/speakers/samina-peerzada.jpg',
    bio: 'Seemi Raheel is an one of the oldest PTV actoress, writer and director, and serving this industry from more than 40 years.',
  },
  {
    name: 'Samia Mumtaz',
    position: 'Pakistani Actoress',
    picture:
      'https://raw.githubusercontent.com/RaoAkif/ConferencePage/main/images/speakers/samia-mumtaz.jpg',
    bio: 'Seemi Raheel is an one of the oldest PTV actoress, writer and director, and serving this industry from more than 40 years.',
  },
];

const partners = [
  {
    name: 'Beats',
    logo: 'https://raw.githubusercontent.com/RaoAkif/ConferencePage/0877c61e3adb59dfabd3085638ed4be10756a062/images/partners/beats.svg',
  },
  {
    name: 'React',
    logo: 'https://raw.githubusercontent.com/RaoAkif/ConferencePage/970492589f7cc41912ad3e532b3317d636577487/images/partners/react.svg',
  },
  {
    name: 'Discord',
    logo: 'https://raw.githubusercontent.com/RaoAkif/ConferencePage/0877c61e3adb59dfabd3085638ed4be10756a062/images/partners/discord.svg',
  },
  {
    name: 'Gatsby',
    logo: 'https://raw.githubusercontent.com/RaoAkif/ConferencePage/970492589f7cc41912ad3e532b3317d636577487/images/partners/gatsby.svg',
  },
  {
    name: 'Google Cloud Platform',
    logo: 'https://raw.githubusercontent.com/RaoAkif/ConferencePage/970492589f7cc41912ad3e532b3317d636577487/images/partners/gcl.svg',
  },
];

const menuIcon = document.querySelector('#hamburger');
const NavBarPopup = document.querySelector('#mobile-popup');
const NavBar = document.querySelector('#nav-bar');
const MainDiv = document.querySelector('#main');
const AllNavItems = document.querySelectorAll('.nav-item');
const Close = document.querySelector('#close-icon');

menuIcon.addEventListener('click', () => {
  NavBarPopup.classList.toggle('active');
  MainDiv.classList.toggle('active');
});

Close.addEventListener('click', () => {
  NavBarPopup.classList.toggle('active');
  MainDiv.classList.toggle('active');
});

AllNavItems.forEach((i) => {
  i.addEventListener('click', () => {
    NavBarPopup.classList.toggle('active');
  });
});

const navBarItems = [
  {
    name: 'Home',
    id: '/index.html',
  },
  {
    name: 'About',
    id: '/about.html',
  },
];

navBarItems.forEach((navBarItem, index) => {
  NavBar.innerHTML += `
    <li class='nav-item'><a href=${navBarItem.id}>${navBarItem.name}</a></li>
  `;
});
