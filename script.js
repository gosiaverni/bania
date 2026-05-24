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

const romanIcon = L.divIcon({
  html: '<img src="assets/romanpoint.png" class="map-point-inner">',
  className: 'map-point-wrapper',
  iconSize: [30, 30],
  iconAnchor: [15, 30]
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



const placesData = {
  akwizgran: {
    coords: [50.77486903276205, 6.0839308263774],
    icon: brownIcon,
    title: "Katedra w Akwizgranie",
    description: `
    <p>około 800-805 r.</p>
    <ul>
      <li>Katedra składa się z trzech części, z których najstarszą jest dawna kaplica pałacowa Karola Wielkiego (Pfalzkapelle) – jeden z nielicznych zachowanych zabytków sztuki karolińskiej. </li>
      <li>Katedra przez 600 lat (936–1531) była miejscem koronacji 30 władców Świętego Cesarstwa Rzymskiego.</li>
      <li>W XIV w. rozpoczęto budowę (ukończoną w następnym stuleciu) gotyckiego prezbiterium, które jest miejscem spoczynku Karola Wielkiego.</li>
      <li>W latach 1355–1414 wzniesiono gotyckie prezbiterium, wzorowane na Sainte-Chapelle w Paryżu.</li>
      <li>Kaplica zbudowana jest na planie ośmiokąta, który w starożytności uznawany był za formę doskonałą, znajdującą się pomiędzy kołem a kwadratem. Koło pozbawione początku i końca symbolizowało nieskończoność nieba. Kwadrat, natomiast, symbolizował ograniczoną formę Ziemi, a jego cztery kąty wyznaczały kierunki niebieskie.</li>
      <li>Wymiary kaplicy odzwierciedlają biblijne rozmiary niebiańskiego Jeruzalem: długość, szerokość i wysokość są sobie równe.</li>
      <li>Prezbiterium pełni funkcję sanktuarium mieszczącego cztery najwyższej wagi relikwie Marii, Jezusa oraz Jana Chrzciciela, które pochowane są w późnoromańskim relikwiarzu Marii. Świątynia była jednym z najważniejszych ośrodków pielgrzymkowych w Europie, a dawna tradycja wystawiania co siedem lat relikwii jest kontynuowana w niej do dziś.</li>
      <li>Bezpośrednią inspiracją i wzorem dla architektów w Akwizgranie był, powstały w VI wieku, kościół San Vitale w Rawennie. Karol Wielki marzył o budowli przewyższającej swą doskonałością wszystkie dotychczasowe konstrukcje, dlatego też budowniczych do prac przy świątyni sprowadzono z zagranicy. </li>
    </ul>
  `,
    photos: ["assets/21.jpg", "assets/20.jpg"],
    plans: ["assets/18.jpg"]
    
  },

    fulda: {
    coords: [50.55379550387083, 9.671312139860154],
    icon: brownIcon,
    title: "Katedra Świętego Zbawiciela i św. Sebastiana w Fuldzie",
    description: `
    <p>około 800 r.</p>
    <ul>
      <li>mieści grób św. Bonifacego</li>
      <li>kształt katedry nawiązuje do bazyliki św. Piotra w Rzymie</li>
      <li> </li>
    </ul>
  `,
    photos: [""],
    plans: ["assets/25a.jpg"]
    
  },
  
  sanktgallen: {
    coords: [47.42367212447818, 9.377636368560477],
    icon: brownIcon,
    title: "Opactwo Sankt Gallen",
    description: `
    <p>około 817-818 r.</p>
    <ul>
      <li></li>
      <li></li>
      <li> </li>
    </ul>
  `,
    photos: [""],
    plans: ["assets/28.jpg"]
  },
  spira: {
    coords: [49.31734574129325, 8.442188582134193],
    icon: brownIcon,
    title: "Katedra w Spirze",
    description: `
    <p>1030-1040 - krypty; 1040-1061 - nawa; 1082-1106 - zasklepienie; ok. 1137 ukończenie</p>
    <ul>
    <li>Największa zachowana do dziś świątynia romańska na świecie, niegdyś ustępowała wielkością jedynie kościołowi opackiemu w Cluny.</li>
      <li>Wzniesiona z fundacji cesarzy salickich, służąca dla prestiżowych nabożeństw i dworskich ceremonii.</li>
      <li>Katedra była kościołem grzebalnym cesarzy i władców Rzeszy dynastii salickiej oraz staufickiej i habsburskiej.</li>
      <li>Jedna z trzech (obok katedr w Moguncji i Wormacji) katedr cesarskich typu nadreńskiego.</li>
      
    </ul>
  `,
    photos: ["assets/30.jpg", "assets/73.jpg"],
    plans: ["assets/63.jpg"]
  },
  cluny2: {
    coords: [46.43499761720928, 4.658479739683457],
    icon: brownIcon,
    title: "Kongregacja kluniacka - Cluny II",
    description: `
    <p>981 r.</p>
    <ul>
      <li>system schodkowy albo piramidalny</li>
      <li>benedyktyni</li>
      <li></li>
    </ul>
  `,
    photos: [""],
    plans: ["assets/clunyii.jpg"]
  },
  hildesheim: {
    coords: [52.14916700475636, 9.947129739931992],
    icon: brownIcon,
    title: "Katedra Wniebowzięcia Matki Bożej w Hildesheimie?",
    description: `
    <p>1010-1033 r.</p>
    <ul>
    <li>Trójnawowa bazylika krzyżowa z transeptem została poświęcona w 872. Spłonęła w wielkim pożarze, odbudowana w 1046 przez biskupa Hazilo.</li>
      <li>Inspiracja Rawenną?</li>
      <li></li>
      
    </ul>
  `,
    photos: ["assets/49.jpg"],
    plans: ["assets/46.jpg"]
  },
   kolonianmp: {
    coords: [50.9347764446711, 6.958421024533939],
    icon: brownIcon,
    title: "Kościół Najświętszej Marii Panny na Kapitolu",
    description: `
    <p>VII w.; 1030-1049 r.; 1240 sklepienia</p>
    <ul>
    <li>W swojej monumentalnej architekturze wyrażał ambicje Ottonów, siłę cesarza oraz jego hegemonię w Rzeszy. W zachodniej części nawy głównej wzniesiono galerię-emporę zastrzeżoną dla cesarza. Od strony formalnej część ta była swobodną recepcją architektury karolińskiej kaplicy pałacowej w Akwizgranie.</li>
      <li>Zbudowany na planie treflowym (odmiana planu krzyża z zaokrąglonymi trzema ramionami).</li>
      <li>Największe zmiany dokonano podczas przebudowy części wschodniej, gdzie wzniesiono chór na planie trójliścia. Zastosowanie takiej struktury przestrzennej chóru było odwołaniem do planu Bazyliki Narodzenia w Betlejem, o treflowym układzie chóru, przy czym w przypadku kolońskiej świątyni motyw trójliścia został silniej wyeksponowany.</li>
      <li></li>
      
    </ul>
  `,
    photos: [""],
    plans: ["assets/103.jpg"]
  },
  
   sernin: {
    coords: [43.60847870827673, 1.4418575414204216],
    icon: brownIcon,
    title: "Bazylika (Saint Sernin) św. Saturnina w Tuluzie",
    description: `
    <p>po 1080 r.</p>
    <ul>
      <li>wzniesiona nad grobem św. Saturnina</li>
      <li>relikwie św. Edmunda i św. Gilberta</li>
      <li>cierń z korony cierniowej Chrystusa</li>
    </ul>
  `,
    photos: ["assets/tuluza1.jpg", "assets/tuluza2.jpg", "assets/tuluza3.jpg", "assets/tuluza4.jpg", "assets/tuluza5.jpg"],
    plans: ["assets/tuluzaplan.jpg"]
  },
  
 
  santiago: {
    coords: [42.880868792144064, -8.544459775801512],
    icon: brownIcon,
    title: "Katedra w Santiago de Compostela",
    description: `
    <p>od 1077 r.</p>
    <ul>
      <li>miejsce spoczynku św. Jakuba Większego jednego z dwunastu apostołów</li>
      <li>Jedna z najważniejszych świątyń pielgrzymkowych, miejsce docelowe drogi Świętego Jakuba.</li>
      <li></li>
    </ul>
  `,
    photos: ["assets/santiago1.jpg", "assets/santiago2.jpg","assets/santiago3.jpg", "assets/santiago4.jpg"],
    plans: ["assets/santiagoplan.jpg"]
  },
 
   cluny3: {
    coords: [46.435995807204506, 4.656333972557178],
    icon: brownIcon,
    title: "Cluny III",
    description: `
    <p>1089-1131/2 r.</p>
    <ul>
    <li>benedyktyni</li>
      <li>Cluny było to największy klasztor, jaki kiedykolwiek zbudowano w Europie Zachodniej. </li>
      <li>Stanowił centrum myśli politycznej, oparcie dla idei wypraw krzyżowych i hiszpańskiej rekonkwisty.</li>
      
    </ul>
  `,
    
    photos: ["assets/clunyiii1.jpg", "assets/clunyiii2.jpg", "assets/clunyiii3.jpg", "assets/clunyiii4.jpg", "assets/clunyiii5.jpg", "assets/clunyiii6.jpg"],
    plans: ["assets/clunyiiiplan.jpg"]
  },


  caentrojcy: {
    coords: [49.18653493096951, -0.3530372025283078],
    icon: brownIcon,
    title: "Kościół Świętej Trójcy w Caen",
    description: `
    <p>1060-1120 r.</p>
    <ul>
      <li>Normandia</li>
      <li>Opactwo zostało założone jako klasztor benedyktynek pod koniec XI wieku przez Wilhelma Zdobywcę i jego żonę Matyldę Flandryjską </li>
      <li>odpowiednik św. Szczepana w Caen, ale dla kobiet</li>
      <li>Matylda, która zmarła w 1083 roku, została pochowana w prezbiterium pod płytą z czarnego marmuru.</li>
    </ul>
  `,
    photos: ["assets/caentrinity1.jpg", "assets/caentrinity2.jpg", "assets/caentrinity3.jpg", "assets/caentrinity4.jpg"],
    plans: ["assets/caentrinityplan.jpg"]
  },


  
  durham: {
    coords: [54.77336283192895, -1.5763813734385668],
    icon: brownIcon,
    title: "Katedra w Durham",
    description: `
    <p>po 1093 r.</p>
    <ul>
      <li>W roku 995 roku po sprowadzeniu do Durham relikwii św. Kutberta i czaszki św. Oswalda tutejszy kościół stał się celem pielgrzymek.</li>
      <li>Rozpoczęto wtedy budowę katedry, która jest aktualnie jedynym kościołem w Anglii zachowanym niemal w niezmienionej formie nadanej przez normańskich budowniczych.</li>
      <li>W 1175 roku została zbudowana Kaplica Galilejska.</li>
    </ul>
  `,
    photos: ["assets/durham1.jpg", "assets/durham2.jpg", "assets/durham3.jpg", "assets/durham4.jpg", "assets/durham5.jpg", "assets/durham6.jpg"],
    plans: ["assets/durhamplan.jpg"]
  },
  
  
 
  rawenna: {
    coords: [44.38032946396076, 12.232650083779237],
    icon: brownIcon,
    title: "Bazylika Sant’Apollinare Nuovo w Rawennie",
    description: `
    <p>VI wiek</p>
    <ul>
      <li>Jeden z wczesnochrześcijańskich zabytków, zaliczany także do okresu bizantyńskiego</li>
      <li>Po zdobyciu Rawenny w 540 roku przez Bizantyńczyków, za Justyniana Wielkiego, kościół w 561 roku został ponownie konsekrowany i przekazany katolikom. </li>
      <li>Wezwanie św. Apolinarego bazylika otrzymała dopiero w IX wieku, gdy sprowadzono do niej z bazyliki Sant’Apollinare in Classe relikwie tego świętego. </li>
      <li>Od niego pochodzi nazwa budowli: nowa bazylika św. Apolinarego (starszą był Sant’Apollinare in Classe).</li>
    </ul>
  `,
    photos: [""],
    plans: [""]
  },
  


  mediolan: {
    coords: [45.46243944541083, 9.175490726151033],
    icon: brownIcon,
    title: "Bazylika św. Ambrożego w Mediolanie",
    description: `
    <p>1080, 1117 trzęsienie ziemi,
1228 sklepienia</p>
    <ul>
      <li>Wzniesiona między 379 a 386 r. z woli biskupa Mediolanu, św. Ambrożego, została zbudowana w dzielnicy, w której byli pochowani chrześcijanie zamordowani w czasie prześladowań rzymskich.</li>
      <li>Stąd nazwa Basilica Martyrium.</li>
      <li>Sam św. Ambroży chciał umieścić w niej relikwie świętych Gerwazego i Protazego. Został w niej też pochowany, a wiele lat później, między IX a XI wiekiem, bazylika zmieniła swą nazwę na obecną.</li>
    </ul>
  `,
    photos: ["assets/mediolan1.jpg", "assets/mediolan2.jpg", "assets/mediolan3.jpg", "assets/mediolan4.jpg"],
    plans: ["assets/mediolanplan.jpg"]
  },

  wenecja: {
    coords: [45.434696087074364, 12.339648024299333],
    icon: brownIcon,
    title: "Bazylika św. Marka w Wenecji",
    description: `
    <p>1063–1095 r.</p>
    <ul>
      <li>Zbudowana została w Wenecji przy placu św. Marka dla pochowania relikwii św. Marka.</li>
      <li>Budowla wzorowana na konstantynopolitańskim kościele św. Apostołów (używana jest także nazwa kościół Dwunastu Apostołów) została zaprojektowana w stylu bizantyjskim na planie krzyża greckiego z pięcioma kopułami rozmieszczonymi nad nawami w ramionach krzyża i nad polem w przecięciu się naw.</li>
      <li>Konstrukcja bazyliki z charakterystycznymi czaszami sklepienia wyraźnie odbiega od popularnej architektury romańskiej i staje się swoistą wizytówką niezależności Republiki Weneckiej.</li>
    </ul>
  `,
    photos: ["assets/wenecja1.jpg", "assets/wenecja2.jpg", "assets/wenecja3.jpg", "assets/wenecja4.jpg"],
    plans: ["assets/wenecjaplan.jpg"]
  },

 

   florencja: {
    coords: [43.76080540896506, 11.265043970262106],
    icon: brownIcon,
    title: "Kościół San Miniato al Monte",
    description: `
    <p>XI-XIII w.</p>
    <ul>
      <li>Pierwotny kościół, według tradycji, został zbudowany na zlecenie longobardzkiej królowej Teodolindy.</li>
      <li>Zbudowany w miejscu wczesnochrześcijańskiej świątyni przez zakon benedyktynów.</li>
      <li></li>
    </ul>
  `,
    photos: ["assets/florencja2.jpg", "assets/florencja3.jpg", "assets/florencja4.jpg", "assets/florencja5.jpg", "assets/florencja6.jpg"],
    plans: ["assets/florencja1.jpg"]
  },

    krakowandrzej: {
    coords: [50.056719836185124, 19.938406126345445],
    icon: brownIcon,
    title: "Kościół św. Andrzeja w Krakowie",
    description: `
    <p>początek XII wieku</p>
    <ul>
    <li>Z fundacji palatyna Sieciecha. Był główną świątynią osady Okół.</li>
      <li>Znajdował się początkowo pod patronatem benedyktynów z opactwa w Sieciechowie, a potem z Tyńca.</li>
      <li>Największe zmiany dokonano podczas przebudowy części wschodniej, gdzie wzniesiono chór na planie trójliścia. Zastosowanie takiej struktury przestrzennej chóru było odwołaniem do planu Bazyliki Narodzenia w Betlejem, o treflowym układzie chóru, przy czym w przypadku kolońskiej świątyni motyw trójliścia został silniej wyeksponowany.</li>
      <li></li>
      
    </ul>
  `,
    photos: ["assets/5.jpg"],
    plans: ["assets/4.jpg"]
  },

    kruszwica: {
    coords: [52.68000887194488, 18.327476439956314],
    icon: brownIcon,
    title: "Kolegiata św. Piotra i Pawła w Kruszwicy",
    description: `
    <p>przed 1150 r.</p>
    <ul>
    <li></li>
      <li></li>
      <li></li>
      <li></li>
      
    </ul>
  `,
    photos: ["assets/7.jpg", "assets/18a.jpg", "assets/P1010167.jpg"],
    plans: ["assets/6.jpg"]
  },

    opatow: {
    coords: [50.80273376326217, 21.42132327240823],
    icon: brownIcon,
    title: "Kolegiata św. Marcina w Opatowie",
    description: `
    <p>przed 1150 r.</p>
    <ul>
    <li></li>
      <li></li>
      <li></li>
      <li></li>
      
    </ul>
  `,
    photos: ["assets/Opatow-kolegiata-Marcina-17.jpg", "assets/Opatow-kolegiata-Marcina-26 (2).jpg"],
    plans: ["assets/8.jpg"]
  },

   strzelno: {
    coords: [52.630386370260666, 18.179547811118184],
    icon: brownIcon,
    title: "Kościół św. Trójcy i NMP w Strzelnie oraz rotunda św. Prokopa",
    description: `
    <p>przełom XII/XIII wiek​u</p>
    <ul>
    <li></li>
      <li></li>
      <li></li>
      <li></li>
      
    </ul>
  `,
    photos: ["assets/11.jpg", "assets/170108084037zdj5.jpg", "assets/170108084044zdj6.jpg"],
    plans: ["assets/10.jpg", "assets/19.jpg"]
  },

   opatow: {
    coords: [50.80273376326217, 21.42132327240823],
    icon: brownIcon,
    title: "Kolegiata św. Marcina w Opatowie",
    description: `
    <p>przed 1150 r.</p>
    <ul>
    <li></li>
      <li></li>
      <li></li>
      <li></li>
      
    </ul>
  `,
    photos: ["assets/Opatow-kolegiata-Marcina-17.jpg", "assets/Opatow-kolegiata-Marcina-26 (2).jpg"],
    plans: ["assets/8.jpg"]
  },

   tum: {
    coords: [52.0565167815426, 19.232534869331644],
    icon: brownIcon,
    title: "Archikolegiata w Tumie",
    description: `
    <p>I poł. XII w.</p>
    <ul>
    <li></li>
      <li></li>
      <li></li>
      <li></li>
      
    </ul>
  `,
    photos: ["assets/Kolegiata_pw._NMP_i_św._Aleksego_w_Tumie_pod_Łęczycą_3.JPG", "assets/xRenowacja-zabytkow-Archikolegiata-Leczycka-w-Tumie-baner.jpg.pagespeed.ic.P5_bwiXuA3.jpg"],
    plans: ["assets/12.jpg"]
  },

   czerwinsk: {
    coords: [52.39564936126928, 20.309753426450673],
    icon: brownIcon,
    title: "Bazylika Zwiastowania Najświętszej Marii Panny w Czerwińsku nad Wisłą",
    description: `
    <p>ok. 1150 r.</p>
    <ul>
    <li></li>
      <li></li>
      <li></li>
      <li></li>
      
    </ul>
  `,
    photos: ["assets/16.jpg"],
    plans: ["assets/14.jpg"]
  },
  
 prandocin: {
    coords: [50.262787143657164, 20.091336528205215],
    icon: brownIcon,
    title: "Zespół kościoła św. Jana Chrzciciela w Prandocinie",
    description: `
    <p>po 1125 r.</p>
    <ul>
    <li></li>
      <li></li>
      <li></li>
      <li></li>
      
    </ul>
  `,
    photos: ["assets/Kościół św. Jana Chrzciciela dzwonnica Prandocin.jpg", "assets/Kościół sw. Jana Chrzciciela świątynia Prandocin.jpg"],
    plans: [""]
  },

   wachock: {
    coords: [51.075333271903965, 21.015263226390882],
    icon: brownIcon,
    title: "Opactwo Cystersów w Wąchocku",
    description: `
    <p>1179, ok. 1230 r.</p>
    <ul>
    <li></li>
      <li></li>
      <li></li>
      <li></li>
      
    </ul>
  `,
    photos: ["assets/z8431646V,Wachock--Opactwo-Cystersow--romanski-kapitularz.jpg"],
    plans: ["assets/21 (1).jpg"]
  },

   zawichost: {
    coords: [50.805070435255615, 21.861092757065148],
    icon: brownIcon,
    title: "Kościół rektoralny Św. Jana Chrzciciela w Zawichoście",
    description: `
    <p>1257 r.</p>
    <ul>
    <li>W prezbiterium zachowało się oryginalne sklepienie krzyżowo-żebrowe z XIII wieku.</li>
      <li>Jest to świątynia pofranciszkańska, wybudowana dla klarysek w latach 1245–1257, przez franciszkanów była użytkowana od 1262 do 1864 roku.</li>
      <li></li>
      <li></li>
      
    </ul>
  `,
    photos: ["assets/dekanat_zawichost_2.jpg"],
    plans: ["assets/25.jpg"]
  },

  koprzywnica: {
    coords: [50.594132326402246, 21.574035580609213],
    icon: brownIcon,
    title: "Opactwo Cystersów w Koprzywnicy",
    description: `
    <p>1185-1230 r.</p>
    <ul>
    <li>W klasztorze zachował się do czasów współczesnych romański kapitularz, wsparty na dwóch kolumnach ze sklepieniem krzyżowo-żebrowym.</li>
      <li>Zauważalne są ślady gotyckich sklepień oraz bogato dekorowane wsporniki w postaci maszkaronów.</li>
      <li></li>
      <li></li>
      
    </ul>
  `,
    photos: ["assets/IMG_4483.jpg"],
    plans: [""]
  },

  sulejow: {
    coords: [51.364743338591964, 19.87931772455329],
    icon: brownIcon,
    title: "Opactwo Cystersów w Sulejowie",
    description: `
    <p>1176-1230 r.</p>
    <ul>
    <li>Fundacji dokonał książę Kazimierz II Sprawiedliwy, sprowadzając zakonników z opactwa Morimond w Burgundii (obecnie w Szampanii) i przeznaczając im ziemie położone nieopodal przeprawy przez Pilicę w Sulejowie.</li>
      <li>Front kościoła zdobią romański portal i rozeta.</li>
      <li>Kościół zbudowany jest z piaskowca szydłowieckiego, kamienne są też wewnętrzne elementy konstrukcyjne i dekoracyjne, natomiast sklepienia i ściany wewnętrzne są ceglane.</li>
      <li></li>
      
    </ul>
  `,
    photos: ["assets/Wnetrze_kosciola_Sulejow_7394217.jpg"],
    plans: [""]
  },

   wawelkrypta: {
    coords: [50.05476193033099, 19.93511741100227],
    icon: brownIcon,
    title: "Krypta św. Leonarda na Wawelu",
    description: `
    <p>przełom XI i XII wieku</p>
    <ul>
    <li>W absydzie kamienny ołtarzyk, wykonany według projektu francuskiego architekta Eugène Viollet-le-Duc. Stopień przed ołtarzem pokryty posadzką z XIII wieku.</li>
      <li>Na środku krypty grób biskupa Maurusa (zm. 1118), odkryty w czasie prac archeologicznych w 1938 roku. Lampy w krypcie mają kształt koron królewskich.</li>
      <li>Jest pozostałością po tzw. katedrze hermanowskiej na Wawelu.</li>
      <li></li>
      
    </ul>
  `,
    photos: ["assets/xl (1).jpg"],
    plans: [""]
  },

   palatia: {
    coords: [52.52583932150222, 17.378163357142967],
    icon: brownIcon,
    title: "Palatia z rotundami - Ostrów Lednicki, Giecz, Przemyśl",
    description: `
    <p>X-XI w.</p>
    <ul>
    <li>Palatium na Ostrowie Lednickim – zostało zbudowane podczas panowania Mieszka I i Bolesława Chrobrego. Na podstawie przeprowadzonych badań archeologicznych wyodrębniono trzy fazy budowy i rozbudowy rezydencji zapoczątkowane w latach sześćdziesiątych X wieku. Palatium zostało zrealizowane na planie prostokąta o wymiarach 32,0 x 14,0 m, w którym wydzielono cztery pomieszczenia. Od wschodu przylegała do niego budowla centralna na planie krzyża greckiego, w którego ramionach umieszczono niewielkie absydy, a od strony wschodniej dodano absydę ołtarzową. Krzyż z absydami tworzył w rzucie formę czwórliścia, w którego środku umieszczono cztery filary o zaokrąglonych powierzchniach zewnętrznych podpierające dach lub sklepienie zamykające budowlę</li>
      <li>Palatium w Gieczu – budowę rozpoczęto pod koniec X wieku (nie wiadomo, czy starsza jest budowla na Ostrowie Lednickim czy w Gieczu) i nigdy jej nie ukończono.</li>
      <li>Palatium w Przemyślu – poza analogiami innych palatiów wczesnopiastowskich oraz materiałem ceramicznym, który pozwala datować obiekt przemyski między połową X i połową XI wieku, nie ma innych przesłanek archeologicznych pozwalających te ramy zacieśnić. Na podstawie kontekstu historycznego większość badaczy przyjmuje powstanie palatium na koniec panowania Bolesława Chrobrego. Istnieją dwie hipotezy określające funkcję budynku: według jednej z nich była to siedziba księcia ewentualnie biskupa albo (według nowszych ustaleń) monaster klasztoru benedyktynów i przylegająca do niego rotunda.</li>
      <li>Nowy kierunek sztuki był wzorowany na osiągnięciach sztuki śródziemnomorskiej; czerpał z tradycji przynoszonych przez pierwszych misjonarzy. Stąd w najstarszych budowlach występuje wiele analogii do architektury północnych Włoch i państwa wielkomorawskiego. Widoczne są także wpływy sztuki karolińskiej, a w okresie późniejszym coraz silniejsze wpływy sztuki ottońskiej.</li>
    </ul>
  `,
    photos: [""],
    plans: ["assets/1.jpg"]
  },

  salisbury: {
    coords: [51.06512866219027, -1.7972391294306655],
    icon: goldIcon,
    title: "Katedra w Salisbury",
    description: `
    <p>1220 – 1225 - 1266</p>
    <ul>
    <li>Early English</li>
      <li>Pierwotnie założona przez Normanów, ale potem przebudowana przez Anglików.</li>
      <li>Kapitularz został wybudowany w decorated style.</li>
      <li></li>
    </ul>
  `,
    photos: ["assets/2.jpg"],
    plans: [""]
  },

  exeter: {
    coords: [50.72262304634589, -3.5299185312965338],
    icon: goldIcon,
    title: "Katedra w Exeterze",
    description: `
    <p>1114 rozpoczęcie;
1270 – 1360 - wnętrze
</p>
    <ul>
    <li>Perpendicular Style</li>
      <li>Budowę katedry rozpoczęli Normanowie w 1114, a najstarszą zachowaną częścią budowli są wieże katedry.</li>
      <li>Wewnątrz można podziwiać najdłuższe, zachowane gotyckie sklepienie na świecie.</li>
      <li>W 1270 biskup Walter Branscombe rozpoczął trwający 90 lat proces przebudowy katedry.</li>
    </ul>
  `,
    photos: ["assets/5 (1).jpg"],
    plans: [""]
  },

  york: {
    coords: [53.96246803529809, -1.0819419599841373],
    icon: goldIcon,
    title: "York Minster",
    description: `
    <p>1324 r.</p>
    <ul>
    <li>Decorated Style</li>
      <li>Katedra była budowana w kilku etapach, podczas których normańska katedra, istniejąca wcześniej w tym miejscu, była stopniowo zastępowana przez obecną budowlę.</li>
      <li>Do budowy użyto kamieni wapiennych, wydobywanych w pobliskim kamieniołomie w Tadcaster.</li>
      <li>W katedrze znajduje się największy obecnie średniowieczny zabytek ze szkła w Anglii – Wielkie Wschodnie Okno.</li>
      <li>Katedra ma 160 metrów długości i 76 metrów szerokości. Środkowa wieża ma 71 metrów wysokości, wieże zachodnie – 56 metrów</li>
      <li>Katedra zbudowana jest na planie krzyża, z ośmiokątnym kapitularzem połączonym z północną częścią transeptu, z jedną centralną wieżą i 2 wieżami w zachodniej części.</li>
    </ul>
  `,
    photos: ["assets/7 (1).jpg"],
    plans: [""]
  },

  wells: {
    coords: [51.210595438015716, -2.6434732754536645],
    icon: goldIcon,
    title: "Katedra w Wells",
    description: `
    <p>korpus XIII wiek; fasada 1239; skrzyżowanie - 1338</p>
    <ul>
    <li>Decorated Style</li>
      <li>Budowa obecnego kościoła została rozpoczęta od wschodniego szczytu, w 1176 roku, i kontynuowano ją po konsekracji w 1239 roku, ale w latach 1190-1206 prace zostały przerwane. </li>
      <li>Kaplica Najświętszej Maryi Panny (Lady Chapel) została rozpoczęta w 1323 roku i ukończona około 1326 roku. Zaprojektowana zapewne przez Thomasa Witneya. W tym czasie kaplica była budowlą wolnostojącą, znajdującą się na wschód od pierwotnego szczytu wschodniego. Prezbiterium zostało rozbudowane w 1330 roku, aby połączyć nową kaplicę Najświętszej Maryi Panny. </li>
      <li>W 1337 roku, po stwierdzeniu osiadania podłoża i pęknieć pod nową wieżą, zbudowano wielkie łuki i wykonano inne prace, aby uchronić katedrę przed zawaleniem. Łuki zostały zaprojektowane przez Williama Joya (znane są jako łuki sitowe).</li>
    </ul>
  `,
    photos: ["assets/8 (1).jpg"],
    plans: [""]
  },

  lincoln: {
    coords: [53.2344316273749, -0.5360048735107016],
    icon: goldIcon,
    title: "Katedra w Lincoln",
    description: `
    <p>1192 rozpoczęcie; 1215 – 1235 – nawa gówna; 1233 – sklepienie n. głównej
</p>
    <ul>
    <li>Early English (Chór Anielski - decorated style)</li>
      <li>Od 1311 roku przez 238 lat katedra ta była najwyższą budowlą na świecie. Jej wysokość wynosiła 160 m.  W 1549 r. środkowa wieża kościoła z iglicą została zniszczona podczas silnej burzy.</li>
      <li>Katedra ma charakterystyczny dla gotyku angielskiego układ, w którym długi korpus główny przecinają dwa transepty, z centralnie umieszczoną czworoboczną wieżą. Zachodnia fasada jest szeroka, a w jej centrum widnieją romańskie portale otoczone rzędami gotyckich ślepych arkad. Całość łączą dwie bliźniacze, czworoboczne wieże.</li>
      <li>Główną oś wnętrza zaznacza, umieszczone w sklepieniu, długie żebro szczytowe z odchodzącymi od niego wachlarzami bocznych łuków. W ramionach zachodniego transeptu znajdują się witrażowe rozety o misternych maswerkach. Dalej na wschód znajduje się chór, mieszczący stale z wyraźnie większym tronem biskupim. Chór jest otoczony przegrodą dekorowaną ślepymi arkadami. W tej części sanktuarium sklepienie ma niespotykany gdzie indziej układ przesuniętych żeber, nazywany szalonym sklepieniem. Za prezbiterium znajduje się kaplica z grobowcami i witrażami w oknach.</li>
      
      
    </ul>
  `,
    photos: ["assets/13.jpg", "assets/Lincoln-fasada.jpg"],
    plans: [""]
  },

  gloucester: {
    coords: [51.86742171982948, -2.2468185061103534],
    icon: goldIcon,
    title: "Katedra w Gloucester",
    description: `
    <p>1084 – 1218 – I faza;
1370 – 1412 – II faza</p>
    <ul>
    <li>Early English/Perpendicular Style (połączenie architektury normańskiej i angielskiej, gotyckiej)</li>
      <li>Konstrukcja katedry jest trójnawowa z transeptem z obejściem chóru i wieńcem kaplic.</li>
      <li>W katedrze znajduje się sarkofag Roberta II Krótkoudego, księcia Normandii, który zmarł w 1134.</li>
      <li>Krużganki w Gloucester są najwcześniejszymi zachowanymi sklepieniami wachlarzowymi w Anglii, zaprojektowanymi w latach 1351–1377 przez Thomasa de Cantebrugge.</li>
      
      
    </ul>
  `,
    photos: ["assets/The_Cloisters_at_Gloucester_Cathedral.jpg"],
    plans: [""]
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