// Inicjalizacja mapy (Polska)
const map = L.map('map').setView([52.237049, 21.017532], 6);

// Warstwa mapy (OpenStreetMap)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap & CartoDB',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);
// Ikony

const goldIcon = L.divIcon({
  html: '<img src="assets/redpoint.png" class="map-point-inner">',
  className: 'map-point-wrapper',
  iconSize: [30, 30],
  iconAnchor: [15, 30]
});

const brownIcon = L.divIcon({
  html: '<img src="assets/greenpoint.png" class="map-point-inner">',
  className: 'map-point-wrapper',
  iconSize: [30, 30],
  iconAnchor: [15, 30]
});
// PUNKTY
L.marker([50.062226758956925, 19.939073455181603], { icon: goldIcon }).addTo(map); // Kraków Margrabska
L.marker([50.060544909061356, 19.937228749899237], { icon: goldIcon }).addTo(map); // Kraków Hetmańska
L.marker([54.34896755861956, 18.65240926886976], { icon: goldIcon }).addTo(map); // Gdańsk Długa
L.marker([54.349357985446936, 18.64931744003403], { icon: goldIcon }).addTo(map); // Gdańsk, Dom Uphagena
L.marker([51.1101487584281, 17.030294497556596], { icon: goldIcon }).addTo(map); // Wrocław, Pod Siedmioma
L.marker([51.110476322253064, 17.03359632639239], { icon: goldIcon }).addTo(map); // Wrocław, Pod Złotym
L.marker([52.40673387840802, 16.933304726451137], { icon: goldIcon }).addTo(map); // Poznań
L.marker([53.00934235986165, 18.603830382299893], { icon: goldIcon }).addTo(map); // Toruń
L.marker([53.337441297095054, 15.046610826494046], { icon: goldIcon }).addTo(map); // Stargard
L.marker([50.921732918662684, 16.097847239876508], { icon: brownIcon }).addTo(map); // Bolków
L.marker([50.83386531148799, 15.644295241723196], { icon: brownIcon }).addTo(map); // Chojnik
L.marker([51.95818840294713, 21.234058268759103], { icon: brownIcon }).addTo(map); // Czersk
L.marker([52.26242660585076, 19.562075709250788], { icon: brownIcon }).addTo(map); // Oporów
L.marker([49.964190267016676, 20.71578556866991], { icon: brownIcon }).addTo(map); // Dębno
L.marker([52.24391807199303, 17.090812824593108], { icon: brownIcon }).addTo(map); // Kórnik
L.marker([50.59048406032662, 20.999817911026053], { icon: brownIcon }).addTo(map); // Szydłów
L.marker([51.25055908710818, 22.571769168727084], { icon: brownIcon }).addTo(map); // Lublin

const locations = {
  // miasta
  krakow: [50.0622, 19.9390],
  wroclaw: [51.1101, 17.0302],
  gdansk: [54.3489, 18.6524],
  stargard: [53.3374, 15.0466],
  poznan: [52.4067, 16.9333],
  torun: [53.0093, 18.6038],

  // zamki
  chojnik: [50.8338, 15.6442],
  bolkow: [50.9217, 16.0978],
  czersk: [51.9581, 21.2340],
  oporow: [52.2624, 19.5620],
  debno: [49.9641, 20.7157],
  kornik: [52.2439, 17.0908],
  szydlow: [50.5904, 20.9998],
  lublin: [51.2505, 22.5717]
};

document.querySelectorAll('.submenu button').forEach(button => {
  button.addEventListener('click', () => {
    const place = button.dataset.place;
    const coords = locations[place];

    if (coords) {
      map.flyTo(coords, 14, {
        duration: 1.5
      });
    }
  });
});

// przycisk "Bibliografia"
const bibliografiaBtn = document.querySelector('.bottom-menu button:nth-child(3)');
const popup = document.getElementById('bibliografiaPopup');
const closeBtn = document.getElementById('closePopup');

bibliografiaBtn.addEventListener('click', () => {
  popup.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  popup.classList.remove('active');
});

// klik poza popupem = zamknij
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

// przycisk quiz (pierwszy w bottom-menu)
const quizBtn = document.querySelector('.bottom-menu button:nth-child(1)');
const quizPopup = document.getElementById('quizPopup');
const closeQuiz = document.getElementById('closeQuiz');

quizBtn.addEventListener('click', () => {
  quizPopup.classList.add('active');
});

closeQuiz.addEventListener('click', () => {
  quizPopup.classList.remove('active');
});

quizPopup.addEventListener('click', (e) => {
  if (e.target === quizPopup) {
    quizPopup.classList.remove('active');
  }
});

document.getElementById('checkQuiz').addEventListener('click', () => {
  const form = document.getElementById('quizForm');
  const result = document.getElementById('quizResult');

  let score = 0;
  let total = 3;

  for (let i = 1; i <= total; i++) {
    const answer = form.querySelector(`input[name="q${i}"]:checked`);
    if (answer && answer.value === "1") {
      score++;
    }
  }

  result.textContent = `Twój wynik: ${score} / ${total}`;
});

const quizKamieniceBtn = document.querySelector('.bottom-menu button:nth-child(2)');
const quizKamienicePopup = document.getElementById('quizKamienicePopup');
const closeQuizKamienice = document.getElementById('closeQuizKamienice');

quizKamieniceBtn.addEventListener('click', () => {
  quizKamienicePopup.classList.add('active');
});

closeQuizKamienice.addEventListener('click', () => {
  quizKamienicePopup.classList.remove('active');
});

quizKamienicePopup.addEventListener('click', (e) => {
  if (e.target === quizKamienicePopup) {
    quizKamienicePopup.classList.remove('active');
  }
});

document.getElementById('checkQuizKamienice').addEventListener('click', () => {
  const form = document.getElementById('quizKamieniceForm');
  const result = document.getElementById('quizKamieniceResult');

  let score = 0;
  let total = 3;

  for (let i = 1; i <= total; i++) {
    const answer = form.querySelector(`input[name="k${i}"]:checked`);
    if (answer && answer.value === "1") {
      score++;
    }
  }

  result.textContent = `Twój wynik: ${score} / ${total}`;
});

closeQuizKamienice.addEventListener('click', () => {
  quizKamienicePopup.classList.remove('active');
  document.getElementById('quizKamieniceForm').reset();
  document.getElementById('quizKamieniceResult').textContent = "";
});

const placesData = {
  chojnik: {
    title: "Zamek Chojnik",
    description: "tutaj opis",
    photos: ["assets/Chojnik-25.jpg", "assets/Chojnik-z-góry-11.jpg"],
    plans: ["assets/Chojnik-plan-03.jpg", "assets/Chojnik-rekonstrukcja-01.jpg"]
  },
  krakow: {
    title: "Kraków",
    description: "tutaj opis",
    photos: ["assets/test1.jpg"],
    plans: ["assets/plan1.jpg"]
  }
};

const marker = L.marker([50.8338, 15.6442], { icon: brownIcon }).addTo(map);

marker.on('click', () => {
  openPanels('chojnik');
});

let currentPhoto = 0;
let currentPlan = 0;

function openPanels(placeKey) {
  const data = placesData[placeKey];

  // tekst
  document.getElementById('placeTitle').textContent = data.title;
  document.getElementById('placeDescription').textContent = data.description;

  // zdjęcia
  currentPhoto = 0;
  document.getElementById('photoImage').src = data.photos[0];

  // plany
  currentPlan = 0;
  document.getElementById('planImage').src = data.plans[0];

  // pokaż
  document.getElementById('infoPanel').style.display = 'block';
  document.getElementById('photoPanel').style.display = 'block';
  document.getElementById('planPanel').style.display = 'block';

  currentPlace = placeKey;
}

document.getElementById('nextPhoto').onclick = () => {
  const data = placesData[currentPlace];
  currentPhoto = (currentPhoto + 1) % data.photos.length;
  document.getElementById('photoImage').src = data.photos[currentPhoto];
};

document.getElementById('prevPhoto').onclick = () => {
  const data = placesData[currentPlace];
  currentPhoto = (currentPhoto - 1 + data.photos.length) % data.photos.length;
  document.getElementById('photoImage').src = data.photos[currentPhoto];
};

document.getElementById('nextPlan').onclick = () => {
  const data = placesData[currentPlace];
  currentPlan = (currentPlan + 1) % data.plans.length;
  document.getElementById('planImage').src = data.plans[currentPlan];
};

document.getElementById('prevPlan').onclick = () => {
  const data = placesData[currentPlace];
  currentPlan = (currentPlan - 1 + data.plans.length) % data.plans.length;
  document.getElementById('planImage').src = data.plans[currentPlan];
};

function closePanels() {
  document.getElementById('infoPanel').style.display = 'none';
  document.getElementById('photoPanel').style.display = 'none';
  document.getElementById('planPanel').style.display = 'none';
}

map.on('click', () => {
  closePanels();
});

['infoPanel', 'photoPanel', 'planPanel'].forEach(id => {
  L.DomEvent.disableClickPropagation(document.getElementById(id));
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');

// klik w zdjęcie galerii
document.getElementById('photoImage').onclick = () => {
  lightbox.style.display = 'flex';
  lightboxImage.src = document.getElementById('photoImage').src;
};

// klik w plan
document.getElementById('planImage').onclick = () => {
  lightbox.style.display = 'flex';
  lightboxImage.src = document.getElementById('planImage').src;
};

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
let currentPlace = null;