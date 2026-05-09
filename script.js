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


const introBtnCastles = document.getElementById('introBtnCastles');
const introBtnCities = document.getElementById('introBtnCities');

const introPopup = document.getElementById('introPopup');
const closeIntro = document.getElementById('closeIntro');

[introBtnCastles, introBtnCities].forEach(btn => {
  btn.addEventListener('click', () => {
    introPopup.classList.add('active');
  });
});

// zamykanie
closeIntro.addEventListener('click', () => {
  introPopup.classList.remove('active');
});

// klik poza popupem
introPopup.addEventListener('click', (e) => {
  if (e.target === introPopup) {
    introPopup.classList.remove('active');
  }
});

document.querySelectorAll('.submenu button').forEach(button => {
  button.addEventListener('click', () => {
    const place = button.dataset.place;

    if (!place) return; // 🔥 zabezpieczenie

    const placeData = placesData[place];

    if (placeData && placeData.coords) {
      map.flyTo(placeData.coords, 14, { duration: 1.5 });
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
    popup.classList.remove('active');
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
    coords: [50.8338, 15.6442],
    icon: brownIcon,
    title: "Zamek Chojnik",
    description: `
    <p>Zamek położony w Karkonoszach.</p>
    <ul>
      <li>budowa: XIV wiek</li>
      <li>funkcja: obronna</li>
      <li>lokalizacja: góra Chojnik</li>
    </ul>
  `,
    photos: ["assets/Chojnik-25.jpg", "assets/Chojnik-z-góry-11.jpg"],
    plans: ["assets/Chojnik-plan-03.jpg", "assets/Chojnik-rekonstrukcja-01.jpg"]
  },
  bolkow: {
    coords: [50.9217, 16.0978],
    icon: brownIcon,
    title: "Zamek w Bolkowie",
    description: "tutaj opis",
    photos: ["assets/Chojnik-25.jpg", "assets/Chojnik-z-góry-11.jpg"],
    plans: ["assets/Chojnik-plan-03.jpg", "assets/Chojnik-rekonstrukcja-01.jpg"]
  },
  czersk: {
    coords: [51.9581, 21.2340],
    icon: brownIcon,
    title: "Zamek w Czersku",
    description: `
    <p>Siedziba książąt mazowieckich.</p>
    <ul>
    <li>murowany obiekt zbudowany w XIV wieku</li>
      <li>usytuowany w zakolu Wisły oraz jej rozgałęzień</li>
      <li>zamek zaniedbany, a następnie zniszczony przez Szwedów w XVII wieku</li>
      
    </ul>
  `,
    photos: ["assets/czerskcaly.jpg", "assets/czerskwiezabramna.jpg", "assets/czerskdziedz.jpg", "assets/czerskplnwsch.jpg", "assets/czerskwiezapldwsch.jpg","assets/czerskwiezaplnzach.jpg", "assets/czerskplnwsch.jpg"],
    plans: ["assets/czerskplan.jpg", "assets/czerskrekons15.jpg", "assets/czerskplanwiezy.jpg", "assets/czerskplanywiez.jpg", "assets/czerskprzekrojwiezy.jpg", "assets/czerskprzekrojwiez.jpg", "assets/czerskdrzew.jpg"]
  },
  oporow: {
    coords: [52.2624, 19.5620],
    icon: brownIcon,
    title: "Zamek w Oporowie",
    description: "tutaj opis",
    photos: ["assets/Chojnik-25.jpg", "assets/Chojnik-z-góry-11.jpg"],
    plans: ["assets/Chojnik-plan-03.jpg", "assets/Chojnik-rekonstrukcja-01.jpg"]
  },
  debno: {
    coords: [49.9641, 20.7157],
    icon: brownIcon,
    title: "Zamek w Dębnie",
    description: "tutaj opis",
    photos: ["assets/Chojnik-25.jpg", "assets/Chojnik-z-góry-11.jpg"],
    plans: ["assets/Chojnik-plan-03.jpg", "assets/Chojnik-rekonstrukcja-01.jpg"]
  },
   kornik: {
    coords: [52.2439, 17.0908],
    icon: brownIcon,
    title: "Zamek w Kórniku",
    description: `
    <p>Jedno z najstarszych muzeów w Polsce.</p>
    <ul>
    <li>zbudowany w drugiej połowie XIV wieku.</li>
      <li>usytuowany na szlaku z Poznania do Wrocławia</li>
      <li>charakterystyczny ryzalit z ostrołuczną wnęką obejmującą dwie kondygnacje</li>
      
    </ul>
  `,
    photos: ["assets/kornikfront.jpg", "assets/kornikbok.jpg", "assets/korniktyl.jpg", "assets/kornikwieza.jpg", "assets/kornikdetale.jpg", "assets/kornikwnetrze.jpg", "assets/kornikkolumny.jpg"],
    plans: ["assets/kornikplan.jpg", "assets/kornikrekonstrukcja.jpg", "assets/kornik2rekonstrukcja.jpg", "assets/kornikfazybudowy.jpg", "assets/kornikdrzeworyt.jpg"]
  },
   szydlow: {
    coords: [50.5904, 20.9998],
    icon: brownIcon,
    title: "Zamek w Szydłowie",
    description: "tutaj opis",
    photos: ["assets/Chojnik-25.jpg", "assets/Chojnik-z-góry-11.jpg"],
    plans: ["assets/Chojnik-plan-03.jpg", "assets/Chojnik-rekonstrukcja-01.jpg"]
  },
   lublin: {
    coords: [51.2505, 22.5717],
    icon: brownIcon,
    title: "Zamek w Lublinie",
    description: `
    <p>Zamek królewski w centrum miasta.</p>
    <ul>
      <li>zbudowany w XII wieku</li>
      <li>rezydencja królewska w XVI wieku</li>
      <li>miejsce podpisania Unii Lubelskiej</li>
      <li>średniowieczny donżon i kaplica</li>
      <li>obecnie siedziba Muzeum Narodowego w Lublinie</li>
    </ul>
  `,
    photos: ["assets/zamek lublin.jpg", "assets/lublindonzonikaplica.jpg", "assets/lublin podworze.jpg", "assets/lublin kaplica.jpg", "assets/Trinity_Chapel_in_Lublin_2014-08-09-211.jpg"],
    plans: ["assets/Lublin-plan-01.jpg", "assets/Lublin-rekonstrukcja-02.jpg", "assets/Lublin-kaplica-św-Trójcy-plan-02.jpg", "assets/Lublin-rekonstrukcja-01.jpg"]
  },
  krakow_hetmanska: {
    coords: [50.06063182353387, 19.937206111002542],
    icon: goldIcon,
    title: "Kraków - Kamienica Hetmańska",
    description:  `
    <p>Możliwa rezydencja Kazimierza Wielkiego.</p>
    <ul>
      <li>zbudowana pod koniec XIII wieku</li>
      <li>własność wielu wpływowych rodów</li>
      <li>sala gotycka na parterze kamienicy</li>
    </ul>
  `,
    photos: ["assets/hetmanskafront.jpg", "assets/hetmanskaportal.jpg", "assets/hetmanskadetal.jpg"],
    plans: ["assets/PL.1.9.ZIPOZ.NID_N_12_EN.521649-1.jpg"]
  },
  krakow_margrabska: {
    coords: [50.062350659159826, 19.938976882506278],
    icon: goldIcon,
    title: "Kraków - Kamienica Margrabska",
    description: `
    <p>Miejsce pobytu historycznych postaci.</p>
    <ul>
    <li>murowany obiekt powstał w drugiej połowie XIII wieku</li>
      <li>dawna mennica, a następnie hotel</li>
      <li>przebywał w niej Tadeusz Kościuszko oraz Stanisław Moniuszko</li>
      
    </ul>
  `,
    photos: ["assets/5aa67f99087ad.jpg", "assets/margrabskabok.jpg", "assets/margrabskawejscie.jpg", "assets/margrabskaportal.jpg", "assets/margrabskadetal.jpg"],
    plans: ["assets/margrabska plan.jpg"]
  },
  wroclaw_podpsem: {
    coords: [51.11058409469943, 17.033564139885005],
    icon: goldIcon,
    title: "Wrocław - Kamienica Pod Złotym Psem",
    description: `
    <p>XIII-wieczna kamienica na wrocławskim rynku.</p>
    <ul>
      <li>charakterystyczny wykusz</li>
      <li>bogate zdobienia budynku</li>
      <li>od XVIII wieku zdobiona figurką złotego psa</li>
    </ul>
  `,
    photos: ["assets/Kamiennica-Pod-Zlotym-Psem-Karmello-Rynek-41-05.09.2023-8.jpg", "assets/podzlotyymbok.jpg", "assets/podzlotympies.jpg", "assets/Kamiennica-Pod-Zlotym-Psem-Karmello-Rynek-41-05.09.2023-4.jpg", "assets/Kamiennica-Pod-Zlotym-Psem-Karmello-Rynek-41-05.09.2023-5.jpg"],
    plans: ["assets/podzlotymplan.jpg", "assets/polnocna-strona-rynku-targ-lakoci-1900-1910-fotopolska-eu.jpg", "assets/kamienica-pod-zlotym-psem-1939-1944-fotopolska-eu.jpg"]
  },
  wroclaw_podelektorami: {
    coords: [51.110243060000826, 17.030305226392382],
    icon: goldIcon,
    title: "Wrocław - Kamienica Pod Siedmioma Elektorami",
    description: `
    <p>Jedna z najstarszych kamienic Wrocławia.</p>
    <ul>
      <li>malowidła przedstawiające 7 elektorów oraz cesarza Leopolda I</li>
      <li>własność rodu patrycjuszy von Uthmannów</li>
      <li>zachowane gotyckie elementy</li>
    </ul>
  `,
    photos: ["assets/Kamienica_Pod_Siedmioma_Elektorami_Wroclaw_4735691.jpg", "assets/Kamienica_Pod_Siedmioma_Elektorami_Wroclaw_5291481.jpg","assets/Portal_kamienicy_Pod_Siedmioma_Elektorami_Wrocław.jpg", "assets/House_of_the_Seven_Electors.jpg"],
    plans: ["assets/Kamienica_Pod_Siedmioma_Elektorami_Wroclaw_167087.jpg", "assets/Kamienica_Pod_Siedmioma_Elektorami_Wroclaw_4345968.jpg", "assets/Zachodnia_strona_Rynku_Siedmiu_Elektorow_Targ_Welny_pl_Rynek_Wroclaw_8240.jpg", "assets/Kamienica_Pod_Siedmioma_Elektorami_Wroclaw_406123.jpg", "assets/Kamienica_Pod_Siedmioma_Elektorami_Wroclaw_4732249.jpg"]
  },
  gdansk_dom: {
    coords: [54.3494517834884, 18.649338897705622],
    icon: goldIcon,
    title: "Gdańsk - Dom Uphagena",
    description: `
    <p>Kamienica udostępniona do zwiedzania.</p>
    <ul>
      <li>zbudowana w XIV, lecz przebudowana w XVI wieku</li>
      <li>nazwa pochodzi od wpływowego rodu Uphagenów</li>
      <li>obecnie oddział Muzeum Gdańska</li>
    </ul>
  `,
    photos: ["assets/Kamienica_Gdańsk,_ul._Długa_12_by_AW.jpg", "assets/uphagen - wnętrze.jpg"],
    plans: ["assets/Uphagen-House-Gdansk-12-Dluga-Street-ground-floor-plans-mezzanine-first-and-second.png"]
  },
  gdansk_kamienica: {
    coords: [54.349017584743585, 18.652398540033968],
    icon: goldIcon,
    title: "Gdańsk - kamienica przy ul. Długiej 47",
    description: "tutaj opis",
    photos: ["assets/test1.jpg"],
    plans: ["assets/plan1.jpg"]
  },
   stargard: {
    coords: [53.3374, 15.0466],
    icon: goldIcon,
    title: "Stargard - Dom Protzena",
    description: `
    <p>Perła wśród gotyckich kamienic w Polsce.</p>
    <ul>
      <li>zbudowana w I połowie XV wieku</li>
      <li>przykład blendy stargardzkiej</li>
      <li>część Europejskiego Szlaku Gotyku Ceglanego</li>
    </ul>
  `,
    photos: ["assets/stargard - zdjęcie (2).jpg", "assets/stargard - zdjęcie (1).jpg", "assets/stargard - zdjęcie (3).jpg"],
    plans: ["assets/stargard - plan (1).jpg"]
  },
   poznan: {
    coords: [52.4067, 16.9333],
    icon: goldIcon,
    title: "Poznań - kamienica przy Wrocławskiej 15/Gołębiej 6",
    description: `
    <p>Kamienica wybudowana w miejscu osady wczesnośredniowiecznej.</p>
    <ul>
      <li>wybudowana w XV wieku w stylu gotyckim</li>
      <li>dawny browar</li>
      <li>możliwe, że budynek nosił nazwę Kamienicy pod św. Józefem</li>
    </ul>
  `,
    
    photos: ["assets/613116229.jpg", "assets/57d8100dc10823810cb7b9f7ba5103e6.jpeg", "assets/07c17968cdf7c1a125acf1c9dc8a3dfd.jpeg", "assets/782b86dbfb3fea110c71a38ceaa3cf1a.jpeg"],
    plans: ["assets/Zrzut ekranu (582).png", "assets/Zrzut ekranu (583).png"]
  },
   torun: {
    coords: [53.0093, 18.6038],
    icon: goldIcon,
    title: "Toruń - Dom Kopernika",
    description: "tutaj opis",
    photos: ["assets/test1.jpg"],
    plans: ["assets/plan1.jpg"]
  },
  
};

Object.keys(placesData).forEach(placeKey => {
  const place = placesData[placeKey];

  const marker = L.marker(place.coords, {
    icon: place.icon
  }).addTo(map);

  marker.on('click', () => {
    openPanels(placeKey);
  });
});

let currentPhoto = 0;
let currentPlan = 0;

function openPanels(placeKey) {
  const data = placesData[placeKey];

  // tekst
  document.getElementById('placeTitle').textContent = data.title;
  document.getElementById('placeDescription').innerHTML = data.description;

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