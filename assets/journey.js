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
    { ymd: "2026-06-29", date: "Day 0 • Mon Jun 29", title: "Manchester, CT → Jersey Shore", miles: "180 mi", drive: "4h with the truck", color: "#f0c7a8",
      route: "kj~}FjjsyLp]fhCxj@iJ{E~vDqu@puAlPl_Ch`CrgI``Bng@biAwpAlgCqm@b{Bjy@heTxoLn{FncHx`Bzj@p_F|{GjeNjeGdcFxsIjvAxkGljEnrF|y@d}Dl_Ctt@vyFbpFhjAziMnaBvnDn_Dd`B~}CaGld@nkGv~A`rAbs@tuEb}BxbF|Cf~In_Bz_ItfBdqDbtAjcAhj@|zEpbA`hAvt@r|CnkAnnIzpBncG`xDjdEzuArzI~fLnkLftBzfAdx@`aExgGyt@rc@dq@kyC|pY_bB~z@y\\bgAjeAvcCzmEjoAdfClsFbhDdiEzsCz~BvcGh}Bvq@rsAtcIpmFv~@f{A~oLbmGhqCprCxaBtdFbu@mr@zsGf\\txAok@buDgbEb|CajJl|DgvDp_A{lD~|A}lAtnCc}EpzH}aAvuB{hAr|BnXvyC|`BhfLdL",
      highlights: [
        { name: "George Washington Bridge", note: "Across the Hudson at dawn, before the city woke up.", g: "George Washington Bridge" },
        { name: "The Shore send-off", note: "A few days with family at the Jersey Shore before the run west.", g: "Wall Township NJ" }
      ],
      stops: [
        { name: "26 Hampton Dr • Manchester, CT", note: "4:36 AM start. Keys handed over, truck rolling. Goodbye, Connecticut.", lat: 41.7759, lng: -72.5215 },
        { name: "Jersey Shore • Monmouth County", note: "Family send-off at the Shore, June 29 to July 2.", lat: 40.1557, lng: -74.1007 }
      ] },
    { ymd: "2026-07-02", date: "Day 1 • Thu Jul 2", title: "Jersey Shore → Moosic, PA", miles: "150 mi", drive: "3h 30m", color: "#ffa24a",
      route: "o}atFnxgcMclKvhDm|@htBmaHlaCbmAv|Dwv@l{BkpEh|Cq}@dzBukHbiEaeC|dF}bHhuIm{H~cDoa@pjC{qBteBg^teEkbC`qBwkA`jEymEndFye@diFo|@huA_xFjaCwlFrDswBn{AkgBpXs}B`fDqnCvk@akCoYq_EfiCigEk^arFelBsdBb_@qFvbB_nB`wBef@jiGiv@ziAvt@btC{tAdwPtg@rzImgA~nI~oAlbH}k@hcBnLdgBqk@~kAw{EbiBsO`sAsxC|jAtMpvBpeB~sE{xBj~Lu_BruD{dGzwBodBpiMydMzdAohGnvEoeI`eMi|GfpAy|BzcCaiQprFejC~dCdjDp_HrtBvvBtKdgBdp@Ef{@{pA",
      highlights: [
        { name: "Crossing the Delaware", note: "Over the river at Easton and into Pennsylvania as the sun went down.", g: "Easton PA Delaware River" },
        { name: "The Poconos at dusk", note: "Route 33 to 380 north, ridge forest the rest of the way to Scranton.", g: "Pocono Mountains" }
      ],
      stops: [
        { name: "Jersey Shore • Monmouth County", note: "Evening departure, westbound for real now.", lat: 40.1557, lng: -74.1007 },
        { name: "Moosic, PA", note: "SpringHill Suites, Montage Mountain. In by 8:17 PM.", lat: 41.3541, lng: -75.6704 }
      ] },
    { ymd: "2026-07-03", date: "Day 2 • Fri Jul 3", title: "Moosic → Dublin, OH", miles: "470 mi", drive: "7h 45m", color: "#2fb9ad",
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
    { ymd: "2026-07-04", date: "Day 3 • Sat Jul 4", title: "Dublin → St. Louis, MO", miles: "430 mi", drive: "7h 30m", color: "#7a5cff",
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
    { ymd: "2026-07-05", date: "Day 4 • Sun Jul 5", title: "St. Louis → Hays, KS", miles: "530 mi", drive: "~7h 15m in traffic", color: "#6db28f",
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
    { ymd: "2026-07-06", date: "Day 5 • Mon Jul 6", title: "Hays → Rifle, CO", miles: "560 mi", drive: "~8h 05m in traffic", color: "#ff7a59",
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
    { ymd: "2026-07-07", date: "Day 6 • Tue Jul 7", title: "Rifle → Tusayan, AZ", miles: "500 mi", drive: "~8h 40m in traffic", color: "#ffd166",
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
    { ymd: "2026-07-08", date: "Day 7 • Wed Jul 8", title: "Grand Canyon → Goodyear", miles: "230 mi", drive: "~3h 55m in traffic", color: "#e86aa6",
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
    var dayPics = (window.MIGRATION_PHOTOS || []).filter(function (p) {
      return p.ts && day.ymd && p.ts.slice(0, 10) === day.ymd;
    });
    var picsHtml = dayPics.map(function (p, i) {
      return '<button class="mr-pic" data-i="' + i + '"><img src="' + p.t + '" alt="" loading="lazy"></button>';
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
        (picsHtml ? '<div class="mr-h">The camera roll</div><div class="mr-pics">' + picsHtml + '</div>' : '') +
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
    row.querySelectorAll('.mr-pic').forEach(function (btn) {
      btn.addEventListener('click', function () {
        openLightbox(dayPics, parseInt(btn.getAttribute('data-i'), 10));
      });
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

  /* ---- photo journal: lightbox + photo pins ---- */
  var lbEl = null;
  function openLightbox(pics, idx) {
    if (!lbEl) {
      lbEl = document.createElement('div');
      lbEl.className = 'mig-lb';
      lbEl.innerHTML = '<button class="lb-x" aria-label="Close">&times;</button>' +
        '<button class="lb-prev" aria-label="Previous">&#8249;</button>' +
        '<figure><img alt=""><figcaption></figcaption></figure>' +
        '<button class="lb-next" aria-label="Next">&#8250;</button>';
      document.body.appendChild(lbEl);
      lbEl.addEventListener('click', function (e) {
        if (e.target === lbEl || e.target.classList.contains('lb-x')) closeLb();
      });
      lbEl.querySelector('.lb-prev').addEventListener('click', function () { showLb(lbEl._pics, lbEl._i - 1); });
      lbEl.querySelector('.lb-next').addEventListener('click', function () { showLb(lbEl._pics, lbEl._i + 1); });
      document.addEventListener('keydown', function (e) {
        if (!lbEl.classList.contains('on')) return;
        if (e.key === 'Escape') closeLb();
        if (e.key === 'ArrowLeft') showLb(lbEl._pics, lbEl._i - 1);
        if (e.key === 'ArrowRight') showLb(lbEl._pics, lbEl._i + 1);
      });
    }
    showLb(pics, idx);
    lbEl.classList.add('on');
    document.body.style.overflow = 'hidden';
  }
  function closeLb() { lbEl.classList.remove('on'); document.body.style.overflow = ''; }
  function showLb(pics, i) {
    i = (i + pics.length) % pics.length;
    lbEl._pics = pics; lbEl._i = i;
    var p = pics[i];
    lbEl.querySelector('img').src = p.f;
    lbEl.querySelector('figcaption').textContent =
      (p.day ? p.day + (p.time ? ' • ' + p.time : '') : '') +
      (pics.length > 1 ? '  (' + (i + 1) + '/' + pics.length + ')' : '');
    lbEl.querySelector('.lb-prev').style.display = pics.length > 1 ? '' : 'none';
    lbEl.querySelector('.lb-next').style.display = pics.length > 1 ? '' : 'none';
  }

  if (window.MIGRATION_PHOTOS && MIGRATION_PHOTOS.length) {
    var photoLayer = L.layerGroup().addTo(map);
    var phGroups = {};
    MIGRATION_PHOTOS.forEach(function (p) {
      var k = Math.round(p.lat / 0.03) + '_' + Math.round(p.lng / 0.03);
      (phGroups[k] = phGroups[k] || []).push(p);
    });
    Object.keys(phGroups).forEach(function (k) {
      var g = phGroups[k];
      var mk = L.marker([g[0].lat, g[0].lng], {
        icon: L.divIcon({
          className: 'mig-photo', iconSize: [46, 46],
          html: '<img src="' + g[0].t + '" alt="">' + (g.length > 1 ? '<span class="ph-n">' + g.length + '</span>' : '')
        }),
        zIndexOffset: 500
      }).addTo(photoLayer);
      mk.on('click', function () { openLightbox(g, 0); });
      bounds.extend([g[0].lat, g[0].lng]);
    });

    /* Photos on/off chip */
    var phChip = document.createElement('button');
    phChip.className = 'mig-day';
    phChip.innerHTML = '<span class="dot" style="background:#fff;border-radius:4px"></span><span>Photos</span><span class="dt">' +
      MIGRATION_PHOTOS.length + ' pinned</span>';
    phChip.addEventListener('click', function () {
      var on = map.hasLayer(photoLayer);
      if (on) map.removeLayer(photoLayer); else photoLayer.addTo(map);
      phChip.classList.toggle('off', on);
    });
    legend.appendChild(phChip);
  }

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
        .catch(function (e) { console.warn('tracker refresh failed:', e); });
    }

    window.__mig = { map: map, crumb: crumb, refreshTrack: refreshTrack };
    refreshTrack();
    setInterval(refreshTrack, (MIGRATION.tracker.pollSeconds || 60) * 1000);
  }
})();
