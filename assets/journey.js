/* The Great Pennington Migration — journey map (home page)
   ------------------------------------------------------------------
   EDIT THE ITINERARY HERE. Each entry is one day of driving:
   date label, color, stops in order (first = start, last = that
   night's stop), drive = time estimate shown in the list,
   highlights = the "worth knowing" drawer items (g = Google Maps
   search text for the link; omit g for no link).

   "current" is the fallback We Are Here pin until live GPS pings
   arrive. "tracker" is the live GPS feed; set url to null to
   turn live tracking off.

   "route" is the pre-computed driving path (encoded polyline).
   If you change a day's stops, delete its route line - the map
   falls back to a straight line until we regenerate it.
   ------------------------------------------------------------------ */
var MIGRATION = {
  tracker: { url: "https://qjcozskyopetvigjhlmh.supabase.co/functions/v1/migration-ping", pollSeconds: 60 },
  current: { lat: 39.768, lng: -86.158, label: "We are here — I-70 West, Day 3" },
  days: [
    { date: "Day 1 • Thu Jul 2", title: "Manchester, CT → Moosic, PA", miles: "190 mi", drive: "3h 45m", color: "#ffa24a",
      route: "kj~}FjjsyLp]fhCxj@iJ{E~vD{u@tyAb`AbcI_o@zkGz_AbwBv~@b`@rGjnDfmAjn@fw@lkBx`@txEb`InzDxHtfCdmEhwCvyCv_EnfBdXtiA_[xbCtbBhxBv|Dhd@`nBim@t`Cbc@l_CkQ|bBo`AliAtTl{E`aAtnBr{Atg@jaH|oVp~Cr|ExhBmBprBbuBkK`nC_kAjaD|_@lxKb_AtxDqZv{ApwBzpHlkApLxRlk@sx@zxG|y@rrHsk@|zBehFpcEsyIr_DcxJfoJq^psClpB|dLiLhsDpp@tsDpL|}Fwm@|iG~iA`_DiRnnFnn@n|Fmx@lwHp_AhmEe]rjJp|BpmLfjD~xIx_@nyCd{F|hJvlAhqEnm@laF}PteEd_Ap|GdlCnuKlDfjD~xBzlFab@|fDluBf{Lka@vcBnqAftJkjBl|Q|U|fHihAv`ItFf|GaeAnaGjs@|tFaGbrF`aCdrPcVfwDm|@l~Bt\\hqGo~Bv|H{~BrkBsmBvoGnw@thE~mCbwEetCh~@kiC~mCxcHbkKtKdgBdp@Ef{@{pA",
      highlights: [
        { name: "Hudson River crossing", note: "Over the Newburgh-Beacon Bridge, wide river views both sides.", g: "Newburgh-Beacon Bridge NY" },
        { name: "I-84 into the Poconos", note: "Cross the Delaware into Pennsylvania, then ridge forest the rest of the way to Scranton.", g: "Delaware Water Gap" }
      ],
      stops: [
        { name: "26 Hampton Dr • Manchester, CT", note: "6:00 PM. Keys handed over, truck rolling. Goodbye, Connecticut.", lat: 41.7759, lng: -72.5215 },
        { name: "Moosic, PA", note: "SpringHill Suites, Montage Mountain. I-84 through New York, 380 south.", lat: 41.3541, lng: -75.6704 }
      ] },
    { date: "Day 2 • Fri Jul 3", title: "Moosic → Dublin, OH", miles: "470 mi", drive: "7h 45m", color: "#2fb9ad",
      route: "oel{F|a{lMxq@~gDgo@jzCtzEznApy@`uCtdGl`HhnCzuA|qBdyHhaG~fHdnA`|EjmDzp@|~Je@liC~bDv`B~cDpdClqOlxB`eGjDfvB_}AdqAh_A|{K_JhkIiwC~pGsW||BfxAf{H_Sz{C`_@nyDxsApiFhz@~iXdz@lxDnXttI}eDbjLe|DvcEm|@fsKauCxyHdPb{RroEjfSo|@zuAsRl`JgeAdaA~hBjpSaNzhC}dA~lCjEf}Cyt@j`BrlDluItHx{DdmC|nPzhHhiJf}C~yO_}@bcC_SxkDowCphCuyA`{IupDthJzItrEh{AtgCx_ClmKpeA~rApuAp{JgfBhiC__AdbEbSzaE}dAlzEtTh}E_yBvlDi_AhlNaoA|_B}PtgDkkBhgDoiAbiHifI|eLed@rnBrh@h}JwKrrHqoCtyMg@frDmqAneGjz@t~CyRfvMdyAndGq{@rqCqlC|eCmAvkOwgBptMaQzcGvUhpCl}@prAfWphEqt@|vE~T|uIinBhtKm[h|HhoBtfFkOziDg_AhnCno@hpDkbAx`DbvB|`Kxz@|jAw\\rjGuhCdkLnh@xeI_|AdcJp~@hsz@zuAdeOyb@ppB`a@vo^mZnkChq@vaC|KzpFldBjgH?fqE|`AdcCtB~zDxmCzbHfwA|aNa`GhcKueG`oHqnCn}@moC~bFeVzhj@qbBbmv@rf@nk@crBrmC{[hbBebBqF}DekByc@ei@}c@fSvnCh_AdoC~nEzb@htCdjB|kApj@ntDf}DrrKlaApzJjmCb_BtWltBxnEtpArbKpxH~kEb}EboEftOjj@|wInzFf_Hf_C`sGb_Cn{CncAf}D|mCvrEjnA||Fn~B`uDl`InzWxkEboDtlNhzQl~DhrB|wCmqA~g@}bB_h@|bB}wClqAndMxoJt}BzvF`nIzsJjoLd~Sx|Axy@zsGfj@j~KxtPb|Aji@|oPvi@ruGjaFd_H~p@b^~`YldA~lDl@obA",
      highlights: [
        { name: "I-80 across the Alleghenies", note: "Long ridge-and-valley views through central Pennsylvania.", g: "Allegheny Mountains I-80 Pennsylvania" },
        { name: "Cuyahoga Valley National Park", note: "Brandywine Falls sits inside Ohio's only national park.", g: "Cuyahoga Valley National Park" },
        { name: "Ohio Amish country", note: "Bellville and Der Dutchman sit at the edge of the world's largest Amish community.", g: "Der Dutchman Bellville OH" }
      ],
      stops: [
        { name: "Moosic, PA", note: "81 south, 80 west, 76 west, 71 south. Big day.", lat: 41.3541, lng: -75.6704 },
        { name: "Brandywine Falls • Sagamore Hills, OH", note: "Easy 20-minute waterfall stop in Cuyahoga Valley.", lat: 41.2766, lng: -81.5397 },
        { name: "Der Dutchman • Bellville, OH", note: "Amish comfort food for dinner.", lat: 40.6206, lng: -82.5158 },
        { name: "Dublin, OH", note: "Hyatt Place Dublin/Columbus. Overnight.", lat: 40.0980, lng: -83.1264 }
      ] },
    { date: "Day 3 • Sat Jul 4", title: "Dublin → St. Louis, MO", miles: "430 mi", drive: "7h 30m", color: "#7a5cff",
      route: "osvsFbsjzNhGn~@rw@tKv`O{{BhpDxYqYz{VxmB|iK|cCp}X_@`pLh}@jrPoQxuK|wGn~LaSzta@tqDz|Nu`@nr\\~f@~dT|u@rqGgJ|cTpsBnnFhPxzq@bj@`gFgDb|K_mEtjFu~@zzDvxBxfd@MxynAlr@~wDdCr{EvpBhrLzi@zxy@tcBxhJ|\\zbM}s@tdBtu@duIdxAzdDx}Dr\\nK`gOrhFdhErTnsBlvA|uB`qEbnOxwGpcOz{I|ob@juD|`[k@hkJrm@ptE`jDjuPzkDnoIbdCruOmJvsNdc@xkK~_BfeHaDr}TkkB|iD{AtqDrnAt~Jfw@viBfm@~n]rzAnjDt{BvmPjlCf`H`_DrwNphCdeItaEloHl|@pyInfBntE~ZtyE`tBh}DptH`sYdlA~xBj~Dl`d@ry@`fAn_E|aAvu@zoAb{U|lkAeTp}YzzGfcVp~Ar}Afa@~mDngErzKhxEzaZjlAhtDrIznEttGjnNdPfnSbqBnjEdxAr_Zl[jq@dzDz_AzbB|jLtaDllEtkA`vGxGxnFffDvzEfi@lpCxhAdq@gUplBoz@iL|rAxi@p`@tuAat@jeIep@sc@",
      highlights: [
        { name: "Indianapolis Motor Speedway", note: "Home of the 500, just off I-70 as you clear Indy.", g: "Indianapolis Motor Speedway" },
        { name: "Cross at the Crossroads", note: "A 198-foot cross rising out of the prairie at Effingham. You can't miss it, literally.", g: "Cross at the Crossroads Effingham IL" },
        { name: "Gateway Arch", note: "630 feet, the tallest monument in the country. The tram to the top takes about an hour if the line is kind.", g: "Gateway Arch St. Louis" }
      ],
      stops: [
        { name: "Dublin, OH", note: "70 west, Fourth of July on the interstate.", lat: 40.0980, lng: -83.1264 },
        { name: "Gateway Arch • St. Louis", note: "Cross the Mississippi, walk under the Arch.", lat: 38.6245, lng: -90.1866 },
        { name: "The Grove • St. Louis", note: "Airbnb night. Laundry night.", lat: 38.6270, lng: -90.2530 }
      ] },
    { date: "Day 4 • Sun Jul 5", title: "St. Louis → Hays, KS", miles: "530 mi", drive: "~7h 15m in traffic", color: "#6db28f",
      route: "siwjFfpzePo_@nq@vUdeIw`Anob@axA`oKi`Bx}Bgj@xuMknEpmCavArnH_lGppGwgGloLgJrdFlc@d_Du`D~pUfhAr}QyKp_Mgs@z_DafBppCkQrxGwmIbdc@sf@tvLdvAldPydBhzE{Gp{KybDpeRag@t`Wgo@rnCuKxib@sn@d~Zch@tbDzWhuFg{@ly\\bU~eBj}DlzHzh@h`lA{sAnsCkuAhhg@u~@boIwp@hvg@k~AfaXh\\bfG}Tt`M_p@n`D}cBrxqAukD`dk@oUfbOo|C|jLipC`fAoSlwM|q@xbAwuAfkH|Fto`@pjFjpb@jkCpnJzdHr~Pfm@b}Lgo@noEyYbtZgmDtsY{^tjOci@hwBs}AsEcuAtgFjVf{CrmAbsCxVp~J{n@pdFq@bf|@ym@peDdBdt_Bnh@nfJppC~_D`bApqFxzCbcG{E~nKdeAtyUjyGllU`D|uHhuAvoN~F`yTn_C~rFxd@z`Wp{CbyI{HnynA~aAzeNvr@l}A`aAbqINft~@ct@~|MZrin@yj@d}EhIxmm@qaBpfHkA|`[gdCvbH",
      highlights: [
        { name: "Joe's Kansas City BBQ", note: "Legendary BBQ in a working gas station, 10 minutes off I-70 in KC. Line moves fast.", g: "Joe's Kansas City Bar-B-Que" },
        { name: "The Flint Hills", note: "Rolling tallgrass prairie between Topeka and Junction City, the prettiest stretch of Kansas. Konza Prairie overlook is right on the highway.", g: "Konza Prairie Scenic Overlook I-70" },
        { name: "Eisenhower Presidential Library", note: "Abilene, exit 275, five minutes off the road. Ike's boyhood home and museum.", g: "Eisenhower Presidential Library Abilene KS" },
        { name: "Oz Museum • Wamego", note: "Exit 328 plus 15 minutes north, if the crew needs a Kansas-appropriate break.", g: "Oz Museum Wamego KS" }
      ],
      stops: [
        { name: "The Grove • St. Louis", note: "70 west. All day.", lat: 38.6270, lng: -90.2530 },
        { name: "Hays, KS", note: "TownePlace Suites. Middle of the map, middle of the trip.", lat: 38.9000, lng: -99.3180 }
      ] },
    { date: "Day 5 • Mon Jul 6", title: "Hays → Rifle, CO", miles: "560 mi", drive: "~8h 05m in traffic", color: "#ff7a59",
      route: "_tllF`ae}QccC~cK}EbtGcjD|qR{Ev~LmoDfoQqNbaFgbGvpf@}Ghpm@ofMr`^[vaPgxA|gNuG`yz@evO~uNueTjyOgkAv{CcxFveFqa@hqAcH~at@j~EldOjFduaCnuBrw`@ncBltE`DjhuBbaCz_V_jA|oIoPfzOtaAtabAphAz{LsPfuMrh@~xE}iAfuCe@vtH}q@hdFawCbnHczElzC}cCtiE}sHpuC_mVnpP_iR`{JgtE`{EiiCxiFmkGnb]gt@faY}Ktp|@exDt_Nes@zsP}v@vlb@vVjeIfg@v|AjtBlEtkAps@xzHrkJkuBzsRpnAhmCq_At|BcgAhcKcjClgCp]f_O{iClnJcQ~vHzc@|wCziBrzDzsEp}A~xAdpDvOxiOq{@neIjxBliD|t@ttNbaBjhC|oBdnI~pAx}C`sAvSjtHbtIh~CzvAr}@k^vw@vq@foA}J`[z{Boe@|cFkjB`yAekC|[gxDdsDgxAqSij@jzCehBjw@eoAaDgqBvnEz]rvHeV~uDfdF|tJqdEz{MrJnuBqgB~bJmIjlDkkF`|EomBjvEzg@ddD~cCnvDxiAhzGboBb_FyKn{YzgAtxHmCreIzwBnkD|GxgBzhHbwO~@zxA|vBtgC}y@voDnh@pv@oBbwDjjArsAsjAbjDhSbfHelB~~FjJ`xE`m@fwBo\\ldF~rAfeEpoAlzMsGftD`rAxvDfi@vxM",
      highlights: [
        { name: "First sight of the Rockies", note: "The wall of mountains appears on the horizon west of Limon, almost 100 miles before Denver.", g: "Limon CO" },
        { name: "Genesee Park bison herd", note: "Denver's own bison, often visible from I-70 around exit 254 in the foothills.", g: "Genesee Park bison overlook" },
        { name: "Georgetown", note: "Bighorn sheep country. Watch the rocky slopes above the lake on the right.", g: "Georgetown CO" },
        { name: "Eisenhower Tunnel", note: "11,158 feet, the highest point anywhere on the Interstate system.", g: "Eisenhower Tunnel" },
        { name: "Glenwood Canyon", note: "The last 12 miles into the canyon are the best-looking interstate in America. Hanging Lake rest stop is the planned break.", g: "Glenwood Canyon" }
      ],
      stops: [
        { name: "Hays, KS", note: "70 west into the Rockies.", lat: 38.9000, lng: -99.3180 },
        { name: "Eisenhower Tunnel, CO", note: "Under the Continental Divide at 11,000 feet.", lat: 39.6795, lng: -105.9022 },
        { name: "Vail Pass Rest Area, CO", note: "Stretch stop at 10,600 feet.", lat: 39.5305, lng: -106.2175 },
        { name: "Glenwood Canyon • Hanging Lake, CO", note: "The prettiest stretch of interstate in America.", lat: 39.6019, lng: -107.1866 },
        { name: "Rifle, CO", note: "Hampton Inn & Suites. Overnight.", lat: 39.5266, lng: -107.7729 }
      ] },
    { date: "Day 6 • Tue Jul 7", title: "Rifle → Tusayan, AZ", miles: "500 mi", drive: "~8h 40m in traffic", color: "#ffd166",
      route: "ezfpFrhxpSh`@zvMj`CdhL{Ev`ClhC`sFpZ|qG|hAfpCtaIdpIdnFhuLxiBpYlcAnzBjqJfjF|h@bpBtoBhjAb~BwTlj@|iB~m@e~Ad_BoBfuAvmAbKnhA|jABn`BzpBrxAbW|`@pfA~sDdyAmN`dHlqBpeN{g@t~HnVpiDkaAlxAld@djTisGd_Nk`DxwPq_Fd~GakBn{F`gAteHrsDxeI`YxwCgk@hnDjl@zeIfhKpoIn{OpgUttE`lExmLpmRul@zwi@iv@f}Je`A`~C|vBrzQvpMqi@r|MggIlvH}gCxlDu~DzaEyaAfoHihEv`CcaFyGmeAh~@y~AcDuvBlxC}nD|~BqZvjAosCdjKqdKvsG}aEpuAuOvcCx}BnyCrp@jmBo|BjsF}t@vvG}vIzsDv`Ax|E}y@bpEzs@hoMkpBl{IkbCnjOz{AlyB{cAzg[kw@rwD`zBpdBvwFvjLzyExuCrEdnA`bDfwEjvB`aGn@fh@ldAbtIn\\roFocDzaEoAl_Cn_@x{DzxCb_Gt`CnhIjuAnrBdpBfM`uCvsAhtEzn@xwJcCda@u_Bff@qu@tcBhqFxqMdz@bdG~iBdrAfaC|nFfnHqf@sGny@~dCzkD~IfpC|kCr{KzcFhgIlu@fpGrbD|_ErwCpsJt`@`OrsCqsLauCvsLdgCvs@||WtgPxxAkd@bn@{mBl}AukApbLit@tdDn~D`fBay@b}Ap~Ut`E~lIlgHxcI|iEbIveAby@fdIflTlcG`pKnsOhyj@drK|lHf}@psCl}GriKtxEvjAr|LjdLvtGl{X|aA`}@dvAbyVnvAlbAxd@`kCfiGpf@biG{^`{P`mAfuDxq@v|AbeA}XfrIgjBpnF{cE`uEirAtuC`S{dAg[vbBaGlnDm_BruImAzcFrcB`gEaAbnDstCfxBoxFjwBeuAyJiw@xcAon@n@eh@|kBizA`ZvtDrvGwCbuEh|DbzEjmAdoD}zCr`DmCpiDgpBntFwiCvUipBxgFxiAlbB|`LbZ",
      highlights: [
        { name: "Arches National Park", note: "US-191 runs right past the entrance at Moab. Even without going in, the red rock along the road is unreal.", g: "Arches National Park entrance" },
        { name: "Wilson Arch", note: "A natural arch right beside 191 south of Moab. Free ten-minute leg stretch.", g: "Wilson Arch Utah" },
        { name: "Goosenecks State Park", note: "Fifteen minutes off the route near Mexican Hat: the San Juan River doubles back on itself 1,000 feet down.", g: "Goosenecks State Park" },
        { name: "Desert View Watchtower", note: "Your AZ-64 route enters Grand Canyon through the east gate, so the canyon views start 25 miles before the hotel. The 1932 watchtower is worth the stop.", g: "Desert View Watchtower" }
      ],
      stops: [
        { name: "Rifle, CO", note: "70 west, then 191 and 491 south into the red rock.", lat: 39.5266, lng: -107.7729 },
        { name: "Forrest Gump Point, UT", note: "That road. That view.", lat: 37.1015, lng: -109.9887 },
        { name: "Monument Valley Visitor Center", note: "Oljato-Monument Valley.", lat: 36.9832, lng: -110.1104 },
        { name: "Little Colorado River Gorge • Cameron, AZ", note: "Navajo Tribal Park overlook on AZ-64.", lat: 35.9250, lng: -111.5670 },
        { name: "Tusayan, AZ", note: "Grand Canyon Hotel & Suites. Canyon sunset if there's time.", lat: 35.9735, lng: -112.1258 }
      ] },
    { date: "Day 7 • Wed Jul 8", title: "Grand Canyon → Goodyear", miles: "230 mi", drive: "~3h 55m in traffic", color: "#e86aa6",
      highlights: [
        { name: "Williams", note: "Route 66 town at the bottom of AZ-64. Good coffee before the last leg.", g: "Williams AZ Route 66" },
        { name: "Montezuma Castle", note: "An 800-year-old cliff dwelling five minutes off I-17 at exit 289.", g: "Montezuma Castle National Monument" },
        { name: "Sunset Point rest area", note: "The big I-17 overlook on the long descent out of the high country. Last stop before the desert floor.", g: "Sunset Point Rest Area I-17" }
      ],
      route: "gaqzEhqjkTkbKiSumBkmBwm@jX~n@{VbhB~jB|gIpDbxCrt@bjo@_Br}S`|AluW`bEjbCuk@fjJkFrzBsn@hlEl^lpH}{CjgFx}@|KslL_j@erDzjBsgMoz@i|Hd~@ctGkB_tEbqCurI``C}`Ed~DgoR~fEvpBnfCcZr{E`m@xjAa`@p_RfQthBgo@duB{iD|tCov@nwDkB`vBqsAhiAezBftAgUbkC`z@b{Ai`B|kBj|@`wB~_HnlJ~{OdoC`c@ptA|`En{DnnEde@v}BrvBloBhm@jtB~eEhkBdsBblCxqBdW~|@|gFsK~}DbgItjGpeI`gD~j@|sAzuD`dCfcDzfEfdKzkA~~DeuAdnFlPt_Bwb@j`CzqBxlEjbBz{Ela@`jIofAnkDjt@nuDNxnHa`CrbCviAlgK`q@d~IwQp|JuzAoAreFqpAhnEl|A`}NblEpyC`vE`hAfq@~zLbtBfbChaB`q@va]jB`nGzx@ruKgEjgB_k@`bCfMoAk]nbAv^tvCwa@",
      stops: [
        { name: "Mather Point • Grand Canyon", note: "6:00 AM sunrise over the canyon. Worth the alarm.", lat: 36.0616, lng: -112.1078 },
        { name: "Estrella • Goodyear, AZ", note: "New home. Migration complete.", lat: 33.3270, lng: -112.3930 }
      ] }
  ]
};

/* ---- no edits needed below this line ---- */
(function () {
  var el = document.getElementById('mig-map');
  if (!el || typeof L === 'undefined') return;

  function decodePoly(s) {
    var pts = [], i = 0, lat = 0, lng = 0;
    while (i < s.length) {
      for (var w = 0; w < 2; w++) {
        var shift = 0, result = 0, b;
        do { b = s.charCodeAt(i++) - 63; result |= (b & 0x1f) << shift; shift += 5; } while (b >= 0x20);
        var d = (result & 1) ? ~(result >> 1) : (result >> 1);
        if (w === 0) lat += d; else lng += d;
      }
      pts.push([lat / 1e5, lng / 1e5]);
    }
    return pts;
  }

  var map = L.map(el, { scrollWheelZoom: false, zoomControl: true, attributionControl: true });

  /* Basemaps: satellite with boundaries + labels (default) and the dark map */
  var esriAttr = 'Imagery &copy; <a href="https://www.esri.com/">Esri</a> | &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';
  var satellite = L.layerGroup([
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19, attribution: esriAttr }),
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19 })
  ]);
  var dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd', maxZoom: 19
  });
  satellite.addTo(map);

  var bounds = L.latLngBounds([]);
  var legend = document.getElementById('mig-legend');
  var daysList = document.getElementById('mig-days');

  /* Basemap toggle chip */
  var baseChip = document.createElement('button');
  baseChip.className = 'mig-day mig-base';
  var onSat = true;
  function baseLabel() {
    baseChip.innerHTML = '<span class="dot" style="background:#fff"></span><span>' +
      (onSat ? 'Satellite' : 'Dark map') + '</span><span class="dt">tap for ' +
      (onSat ? 'dark map' : 'satellite') + '</span>';
  }
  baseLabel();
  baseChip.addEventListener('click', function () {
    onSat = !onSat;
    if (onSat) { map.removeLayer(dark); satellite.addTo(map); }
    else { map.removeLayer(satellite); dark.addTo(map); }
    baseLabel();
  });
  legend.appendChild(baseChip);

  MIGRATION.days.forEach(function (day) {
    var group = L.layerGroup().addTo(map);

    var path = day.route ? decodePoly(day.route)
                         : day.stops.map(function (s) { return [s.lat, s.lng]; });
    L.polyline(path, { color: '#1f1419', weight: 6, opacity: .55 }).addTo(group); /* dark casing so routes read on satellite */
    L.polyline(path, { color: day.color, weight: 3.5, opacity: .95 }).addTo(group);
    path.forEach(function (p) { bounds.extend(p); });

    day.stops.forEach(function (stop, si) {
      var isEnd = si === day.stops.length - 1;
      var m = L.circleMarker([stop.lat, stop.lng], {
        radius: isEnd ? 8 : 5.5, color: '#1f1419', weight: 2,
        fillColor: day.color, fillOpacity: 1
      }).addTo(group);
      m.bindTooltip(
        '<div class="mig-tip"><span class="tip-day" style="color:' + day.color + '">' + day.date + '</span>' +
        '<b>' + stop.name + '</b>' +
        (stop.note ? '<span class="tip-note">' + stop.note + '</span>' : '') + '</div>',
        { direction: 'top', offset: [0, -8], opacity: 1, className: 'mig-tooltip' }
      );
      m.bindPopup(
        '<div class="mig-pop"><div class="mp-day">' + day.date + '</div>' +
        '<div class="mp-name">' + stop.name + '</div>' +
        (stop.note ? '<div class="mp-note">' + stop.note + '</div>' : '') + '</div>'
      );
      bounds.extend([stop.lat, stop.lng]);
    });

    /* Day row with expandable drawer */
    var row = document.createElement('div');
    row.className = 'mig-row';
    var stopsHtml = day.stops.map(function (s) {
      return '<li><b>' + s.name + '</b>' + (s.note ? ' — ' + s.note : '') + '</li>';
    }).join('');
    var hlHtml = (day.highlights || []).map(function (h) {
      var name = h.g
        ? '<a href="https://www.google.com/maps/search/' + encodeURIComponent(h.g) + '" target="_blank" rel="noopener">' + h.name + ' &nearr;</a>'
        : h.name;
      return '<li><b>' + name + '</b> — ' + h.note + '</li>';
    }).join('');
    row.innerHTML =
      '<div class="mr-head">' +
        '<button class="mr-dot" title="Show/hide this day on the map"><span class="dot" style="background:' + day.color + '"></span></button>' +
        '<button class="mr-main">' +
          '<span class="mr-title">' + day.title + '</span>' +
          '<span class="mr-meta">' + day.date + ' &bull; ' + day.miles + ' &bull; ' + day.drive + '</span>' +
          '<span class="mr-chev">&#9662;</span>' +
        '</button>' +
      '</div>' +
      '<div class="mr-drawer"><div class="mr-inner">' +
        '<div class="mr-h">The stops</div><ul>' + stopsHtml + '</ul>' +
        (hlHtml ? '<div class="mr-h">Worth knowing on the way</div><ul>' + hlHtml + '</ul>' : '') +
      '</div></div>';
    daysList.appendChild(row);

    row.querySelector('.mr-dot').addEventListener('click', function () {
      var on = map.hasLayer(group);
      if (on) map.removeLayer(group); else group.addTo(map);
      row.classList.toggle('off', on);
    });
    row.querySelector('.mr-main').addEventListener('click', function () {
      row.classList.toggle('open');
    });
  });

  var here = null;
  function placeHere(lat, lng, label) {
    if (!here) {
      here = L.marker([lat, lng], {
        icon: L.divIcon({ className: 'mig-here', iconSize: [18, 18], html: '<span></span>' }),
        zIndexOffset: 1000
      }).addTo(map);
    } else {
      here.setLatLng([lat, lng]);
    }
    here.bindPopup('<div class="mig-pop"><div class="mp-name">' + label + '</div></div>');
    here.bindTooltip('<div class="mig-tip"><b>' + label + '</b></div>',
      { direction: 'top', offset: [0, -10], opacity: 1, className: 'mig-tooltip' });
  }

  if (MIGRATION.current) {
    placeHere(MIGRATION.current.lat, MIGRATION.current.lng, MIGRATION.current.label);
    bounds.extend([MIGRATION.current.lat, MIGRATION.current.lng]);
  }

  map.fitBounds(bounds, { padding: [36, 36] });

  /* ---- live tracker: actual GPS breadcrumb + moving pin ---- */
  if (MIGRATION.tracker && MIGRATION.tracker.url) {
    var crumbCasing = L.polyline([], { color: '#1f1419', weight: 6, opacity: .55 }).addTo(map);
    var crumb = L.polyline([], { color: '#ffffff', weight: 3, opacity: .95, dashArray: '1 7', lineCap: 'round' }).addTo(map);

    function fmtWhen(iso) {
      var d = new Date(iso);
      var mins = Math.round((Date.now() - d.getTime()) / 60000);
      if (mins < 2) return 'just now';
      if (mins < 90) return mins + ' min ago';
      return d.toLocaleString([], { weekday: 'short', hour: 'numeric', minute: '2-digit' });
    }

    function refreshTrack() {
      fetch(MIGRATION.tracker.url)
        .then(function (r) { return r.json(); })
        .then(function (j) {
          if (!j || !j.ok || !j.pings || !j.pings.length) return;
          var pts = j.pings.map(function (p) { return [p.lat, p.lng]; });
          crumbCasing.setLatLngs(pts);
          crumb.setLatLngs(pts);
          var last = j.pings[j.pings.length - 1];
          placeHere(last.lat, last.lng, 'We are here — live, ' + fmtWhen(last.ts));
        })
        .catch(function () { /* offline or endpoint down: keep what we have */ });
    }

    refreshTrack();
    setInterval(refreshTrack, (MIGRATION.tracker.pollSeconds || 60) * 1000);
  }
})();
