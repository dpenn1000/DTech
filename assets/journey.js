/* The Great Pennington Migration — journey map (home page)
   ------------------------------------------------------------------
   EDIT THE ITINERARY HERE. Each entry is one day of driving:
   date label, color, and stops in order (first = start, last =
   that night's stop). "current" is the We Are Here pin - move it
   as we go, or set to null to hide it.

   "route" is the pre-computed driving path (encoded polyline).
   If you change a day's stops, delete its route line - the map
   falls back to a straight line until we regenerate it.
   ------------------------------------------------------------------ */
var MIGRATION = {
  current: { lat: 39.768, lng: -86.158, label: "We are here — I-70 West, Day 3" },
  days: [
    { date: "Day 1 • Thu Jul 2", title: "Manchester, CT → Moosic, PA", miles: "190 mi", color: "#ffa24a",
      route: "kj~}FjjsyLp]fhCxj@iJ{E~vD{u@tyAb`AbcI_o@zkGz_AbwBv~@b`@rGjnDfmAjn@fw@lkBx`@txEb`InzDxHtfCdmEhwCvyCv_EnfBdXtiA_[xbCtbBhxBv|Dhd@`nBim@t`Cbc@l_CkQ|bBo`AliAtTl{E`aAtnBr{Atg@jaH|oVp~Cr|ExhBmBprBbuBkK`nC_kAjaD|_@lxKb_AtxDqZv{ApwBzpHlkApLxRlk@sx@zxG|y@rrHsk@|zBehFpcEsyIr_DcxJfoJq^psClpB|dLiLhsDpp@tsDpL|}Fwm@|iG~iA`_DiRnnFnn@n|Fmx@lwHp_AhmEe]rjJp|BpmLfjD~xIx_@nyCd{F|hJvlAhqEnm@laF}PteEd_Ap|GdlCnuKlDfjD~xBzlFab@|fDluBf{Lka@vcBnqAftJkjBl|Q|U|fHihAv`ItFf|GaeAnaGjs@|tFaGbrF`aCdrPcVfwDm|@l~Bt\\hqGo~Bv|H{~BrkBsmBvoGnw@thE~mCbwEetCh~@kiC~mCxcHbkKtKdgBdp@Ef{@{pA",
      stops: [
        { name: "26 Hampton Dr • Manchester, CT", note: "6:00 PM. Keys handed over, truck rolling. Goodbye, Connecticut.", lat: 41.7759, lng: -72.5215 },
        { name: "Moosic, PA", note: "SpringHill Suites, Montage Mountain. I-84 through New York, 380 south.", lat: 41.3541, lng: -75.6704 }
      ] },
    { date: "Day 2 • Fri Jul 3", title: "Moosic → Dublin, OH", miles: "470 mi", color: "#2fb9ad",
      route: "oel{F|a{lMxq@~gDgo@jzCtzEznApy@`uCtdGl`HhnCzuA|qBdyHhaG~fHdnA`|EjmDzp@|~Je@liC~bDv`B~cDpdClqOlxB`eGjDfvB_}AdqAh_A|{K_JhkIiwC~pGsW||BfxAf{H_Sz{C`_@nyDxsApiFhz@~iXdz@lxDnXttI}eDbjLe|DvcEm|@fsKauCxyHdPb{RroEjfSo|@zuAsRl`JgeAdaA~hBjpSaNzhC}dA~lCjEf}Cyt@j`BrlDluItHx{DdmC|nPzhHhiJf}C~yO_}@bcC_SxkDowCphCuyA`{IupDthJzItrEh{AtgCx_ClmKpeA~rApuAp{JgfBhiC__AdbEbSzaE}dAlzEtTh}E_yBvlDi_AhlNaoA|_B}PtgDkkBhgDoiAbiHifI|eLed@rnBrh@h}JwKrrHqoCtyMg@frDmqAneGjz@t~CyRfvMdyAndGq{@rqCqlC|eCmAvkOwgBptMaQzcGvUhpCl}@prAfWphEqt@|vE~T|uIinBhtKm[h|HhoBtfFkOziDg_AhnCno@hpDkbAx`DbvB|`Kxz@|jAw\\rjGuhCdkLnh@xeI_|AdcJp~@hsz@zuAdeOyb@ppB`a@vo^mZnkChq@vaC|KzpFldBjgH?fqE|`AdcCtB~zDxmCzbHfwA|aNa`GhcKueG`oHqnCn}@moC~bFeVzhj@qbBbmv@rf@nk@crBrmC{[hbBebBqF}DekByc@ei@}c@fSvnCh_AdoC~nEzb@htCdjB|kApj@ntDf}DrrKlaApzJjmCb_BtWltBxnEtpArbKpxH~kEb}EboEftOjj@|wInzFf_Hf_C`sGb_Cn{CncAf}D|mCvrEjnA||Fn~B`uDl`InzWxkEboDtlNhzQl~DhrB|wCmqA~g@}bB_h@|bB}wClqAndMxoJt}BzvF`nIzsJjoLd~Sx|Axy@zsGfj@j~KxtPb|Aji@|oPvi@ruGjaFd_H~p@b^~`YldA~lDl@obA",
      stops: [
        { name: "Moosic, PA", note: "81 south, 80 west, 76 west, 71 south. Big day.", lat: 41.3541, lng: -75.6704 },
        { name: "Brandywine Falls • Sagamore Hills, OH", note: "Easy 20-minute waterfall stop in Cuyahoga Valley.", lat: 41.2766, lng: -81.5397 },
        { name: "Der Dutchman • Bellville, OH", note: "Amish comfort food for dinner.", lat: 40.6206, lng: -82.5158 },
        { name: "Dublin, OH", note: "Hyatt Place Dublin/Columbus. Overnight.", lat: 40.0980, lng: -83.1264 }
      ] },
    { date: "Day 3 • Sat Jul 4", title: "Dublin → St. Louis, MO", miles: "430 mi", color: "#7a5cff",
      route: "osvsFbsjzNhGn~@rw@tKv`O{{BhpDxYqYz{VxmB|iK|cCp}X_@`pLh}@jrPoQxuK|wGn~LaSzta@tqDz|Nu`@nr\\~f@~dT|u@rqGgJ|cTpsBnnFhPxzq@bj@`gFgDb|K_mEtjFu~@zzDvxBxfd@MxynAlr@~wDdCr{EvpBhrLzi@zxy@tcBxhJ|\\zbM}s@tdBtu@duIdxAzdDx}Dr\\nK`gOrhFdhErTnsBlvA|uB`qEbnOxwGpcOz{I|ob@juD|`[k@hkJrm@ptE`jDjuPzkDnoIbdCruOmJvsNdc@xkK~_BfeHaDr}TkkB|iD{AtqDrnAt~Jfw@viBfm@~n]rzAnjDt{BvmPjlCf`H`_DrwNphCdeItaEloHl|@pyInfBntE~ZtyE`tBh}DptH`sYdlA~xBj~Dl`d@ry@`fAn_E|aAvu@zoAb{U|lkAeTp}YzzGfcVp~Ar}Afa@~mDngErzKhxEzaZjlAhtDrIznEttGjnNdPfnSbqBnjEdxAr_Zl[jq@dzDz_AzbB|jLtaDllEtkA`vGxGxnFffDvzEfi@lpCxhAdq@gUplBoz@iL|rAxi@p`@tuAat@jeIep@sc@",
      stops: [
        { name: "Dublin, OH", note: "70 west, Fourth of July on the interstate.", lat: 40.0980, lng: -83.1264 },
        { name: "Gateway Arch • St. Louis", note: "Cross the Mississippi, walk under the Arch.", lat: 38.6245, lng: -90.1866 },
        { name: "The Grove • St. Louis", note: "Airbnb night. Laundry night.", lat: 38.6270, lng: -90.2530 }
      ] },
    { date: "Day 4 • Sun Jul 5", title: "St. Louis → Hays, KS", miles: "530 mi", color: "#6db28f",
      route: "siwjFfpzePo_@nq@vUdeIw`Anob@axA`oKi`Bx}Bgj@xuMknEpmCavArnH_lGppGwgGloLgJrdFlc@d_Du`D~pUfhAr}QyKp_Mgs@z_DafBppCkQrxGwmIbdc@sf@tvLdvAldPydBhzE{Gp{KybDpeRag@t`Wgo@rnCuKxib@sn@d~Zch@tbDzWhuFg{@ly\\bU~eBj}DlzHzh@h`lA{sAnsCkuAhhg@u~@boIwp@hvg@k~AfaXh\\bfG}Tt`M_p@n`D}cBrxqAukD`dk@oUfbOo|C|jLipC`fAoSlwM|q@xbAwuAfkH|Fto`@pjFjpb@jkCpnJzdHr~Pfm@b}Lgo@noEyYbtZgmDtsY{^tjOci@hwBs}AsEcuAtgFjVf{CrmAbsCxVp~J{n@pdFq@bf|@ym@peDdBdt_Bnh@nfJppC~_D`bApqFxzCbcG{E~nKdeAtyUjyGllU`D|uHhuAvoN~F`yTn_C~rFxd@z`Wp{CbyI{HnynA~aAzeNvr@l}A`aAbqINft~@ct@~|MZrin@yj@d}EhIxmm@qaBpfHkA|`[gdCvbH",
      stops: [
        { name: "The Grove • St. Louis", note: "70 west. All day.", lat: 38.6270, lng: -90.2530 },
        { name: "Hays, KS", note: "TownePlace Suites. Middle of the map, middle of the trip.", lat: 38.9000, lng: -99.3180 }
      ] },
    { date: "Day 5 • Mon Jul 6", title: "Hays → Rifle, CO", miles: "560 mi", color: "#ff7a59",
      route: "_tllF`ae}QccC~cK}EbtGcjD|qR{Ev~LmoDfoQqNbaFgbGvpf@}Ghpm@ofMr`^[vaPgxA|gNuG`yz@evO~uNueTjyOgkAv{CcxFveFqa@hqAcH~at@j~EldOjFduaCnuBrw`@ncBltE`DjhuBbaCz_V_jA|oIoPfzOtaAtabAphAz{LsPfuMrh@~xE}iAfuCe@vtH}q@hdFawCbnHczElzC}cCtiE}sHpuC_mVnpP_iR`{JgtE`{EiiCxiFmkGnb]gt@faY}Ktp|@exDt_Nes@zsP}v@vlb@vVjeIfg@v|AjtBlEtkAps@xzHrkJkuBzsRpnAhmCq_At|BcgAhcKcjClgCp]f_O{iClnJcQ~vHzc@|wCziBrzDzsEp}A~xAdpDvOxiOq{@neIjxBliD|t@ttNbaBjhC|oBdnI~pAx}C`sAvSjtHbtIh~CzvAr}@k^vw@vq@foA}J`[z{Boe@|cFkjB`yAekC|[gxDdsDgxAqSij@jzCehBjw@eoAaDgqBvnEz]rvHeV~uDfdF|tJqdEz{MrJnuBqgB~bJmIjlDkkF`|EomBjvEzg@ddD~cCnvDxiAhzGboBb_FyKn{YzgAtxHmCreIzwBnkD|GxgBzhHbwO~@zxA|vBtgC}y@voDnh@pv@oBbwDjjArsAsjAbjDhSbfHelB~~FjJ`xE`m@fwBo\\ldF~rAfeEpoAlzMsGftD`rAxvDfi@vxM",
      stops: [
        { name: "Hays, KS", note: "70 west into the Rockies.", lat: 38.9000, lng: -99.3180 },
        { name: "Eisenhower Tunnel, CO", note: "Under the Continental Divide at 11,000 feet.", lat: 39.6795, lng: -105.9022 },
        { name: "Vail Pass Rest Area, CO", note: "Stretch stop at 10,600 feet.", lat: 39.5305, lng: -106.2175 },
        { name: "Glenwood Canyon • Hanging Lake, CO", note: "The prettiest stretch of interstate in America.", lat: 39.6019, lng: -107.1866 },
        { name: "Rifle, CO", note: "Hampton Inn & Suites. Overnight.", lat: 39.5266, lng: -107.7729 }
      ] },
    { date: "Day 6 • Tue Jul 7", title: "Rifle → Tusayan, AZ", miles: "500 mi", color: "#ffd166",
      route: "ezfpFrhxpSh`@zvMj`CdhL{Ev`ClhC`sFpZ|qG|hAfpCtaIdpIdnFhuLxiBpYlcAnzBjqJfjF|h@bpBtoBhjAb~BwTlj@|iB~m@e~Ad_BoBfuAvmAbKnhA|jABn`BzpBrxAbW|`@pfA~sDdyAmN`dHlqBpeN{g@t~HnVpiDkaAlxAld@djTisGd_Nk`DxwPq_Fd~GakBn{F`gAteHrsDxeI`YxwCgk@hnDjl@zeIfhKpoIn{OpgUttE`lExmLpmRul@zwi@iv@f}Je`A`~C|vBrzQvpMqi@r|MggIlvH}gCxlDu~DzaEyaAfoHihEv`CcaFyGmeAh~@y~AcDuvBlxC}nD|~BqZvjAosCdjKqdKvsG}aEpuAuOvcCx}BnyCrp@jmBo|BjsF}t@vvG}vIzsDv`Ax|E}y@bpEzs@hoMkpBl{IkbCnjOz{AlyB{cAzg[kw@rwD`zBpdBvwFvjLzyExuCrEdnA`bDfwEjvB`aGn@fh@ldAbtIn\\roFocDzaEoAl_Cn_@x{DzxCb_Gt`CnhIjuAnrBdpBfM`uCvsAhtEzn@xwJcCda@u_Bff@qu@tcBhqFxqMdz@bdG~iBdrAfaC|nFfnHqf@sGny@~dCzkD~IfpC|kCr{KzcFhgIlu@fpGrbD|_ErwCpsJt`@`OrsCqsLauCvsLdgCvs@||WtgPxxAkd@bn@{mBl}AukApbLit@tdDn~D`fBay@b}Ap~Ut`E~lIlgHxcI|iEbIveAby@fdIflTlcG`pKnsOhyj@drK|lHf}@psCl}GriKtxEvjAr|LjdLvtGl{X|aA`}@dvAbyVnvAlbAxd@`kCfiGpf@biG{^`{P`mAfuDxq@v|AbeA}XfrIgjBpnF{cE`uEirAtuC`S{dAg[vbBaGlnDm_BruImAzcFrcB`gEaAbnDstCfxBoxFjwBeuAyJiw@xcAon@n@eh@|kBizA`ZvtDrvGwCbuEh|DbzEjmAdoD}zCr`DmCpiDgpBntFwiCvUipBxgFxiAlbB|`LbZ",
      stops: [
        { name: "Rifle, CO", note: "70 west, then 191 and 491 south into the red rock.", lat: 39.5266, lng: -107.7729 },
        { name: "Forrest Gump Point, UT", note: "That road. That view.", lat: 37.1015, lng: -109.9887 },
        { name: "Monument Valley Visitor Center", note: "Oljato-Monument Valley.", lat: 36.9832, lng: -110.1104 },
        { name: "Little Colorado River Gorge • Cameron, AZ", note: "Navajo Tribal Park overlook on AZ-64.", lat: 35.9250, lng: -111.5670 },
        { name: "Tusayan, AZ", note: "Grand Canyon Hotel & Suites. Canyon sunset if there's time.", lat: 35.9735, lng: -112.1258 }
      ] },
    { date: "Day 7 • Wed Jul 8", title: "Grand Canyon → Goodyear", miles: "230 mi", color: "#e86aa6",
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

  /* Basemaps: satellite with labels (default) and the dark map */
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
      m.bindPopup(
        '<div class="mig-pop"><div class="mp-day">' + day.date + '</div>' +
        '<div class="mp-name">' + stop.name + '</div>' +
        (stop.note ? '<div class="mp-note">' + stop.note + '</div>' : '') + '</div>'
      );
      bounds.extend([stop.lat, stop.lng]);
    });

    var chip = document.createElement('button');
    chip.className = 'mig-day';
    chip.innerHTML = '<span class="dot" style="background:' + day.color + '"></span><span>' +
      day.title + '</span><span class="dt">' + day.date + ' • ' + day.miles + '</span>';
    chip.addEventListener('click', function () {
      var on = map.hasLayer(group);
      if (on) map.removeLayer(group); else group.addTo(map);
      chip.classList.toggle('off', on);
    });
    legend.appendChild(chip);
  });

  if (MIGRATION.current) {
    var here = L.marker([MIGRATION.current.lat, MIGRATION.current.lng], {
      icon: L.divIcon({ className: 'mig-here', iconSize: [18, 18], html: '<span></span>' }),
      zIndexOffset: 1000
    }).addTo(map);
    here.bindPopup('<div class="mig-pop"><div class="mp-name">' + MIGRATION.current.label + '</div></div>');
    bounds.extend([MIGRATION.current.lat, MIGRATION.current.lng]);
  }

  map.fitBounds(bounds, { padding: [36, 36] });
})();
