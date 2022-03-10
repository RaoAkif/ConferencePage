const partners = [
  {
    name: 'NCA',
    logo: 'https://raw.githubusercontent.com/RaoAkif/ConferencePage/main/images/partners/nca.png',
  },
  {
    name: 'Alhamra',
    logo: 'https://raw.githubusercontent.com/RaoAkif/ConferencePage/main/images/partners/alhamra.png',
  },
  {
    name: 'KLF',
    logo: 'https://raw.githubusercontent.com/RaoAkif/ConferencePage/main/images/partners/klf.png',
  },
  {
    name: 'LLF',
    logo: 'https://raw.githubusercontent.com/RaoAkif/ConferencePage/main/images/partners/llf.png',
  },
  {
    name: 'PU',
    logo: 'https://raw.githubusercontent.com/RaoAkif/ConferencePage/main/images/partners/pu.png',
  },
];

const Partners = document.querySelector('.partners-list');

partners.forEach((partner, index) => {
  Partners.innerHTML += `
    <li class='partner'><img src=${partner.logo} alt='spaceX-${index}' class='partner-img'></li>
`;
});

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
    id: './index.html',
  },
  {
    name: 'About',
    id: './about.html',
  },
];

navBarItems.forEach((navBarItem) => {
  NavBar.innerHTML += `
    <li class='nav-item'><a id='nav-link' href=${navBarItem.id}>${navBarItem.name}</a></li>
  `;
});
