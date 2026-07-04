/* The Great Pennington Migration — journey map (home page)
   ------------------------------------------------------------------
   EDIT THE ITINERARY HERE. Each entry is one day of driving:
   date label, color, and stops in order (first = start, last =
   that night's stop). "current" is the We Are Here pin - move it
   as we go, or set to null to hide it.

   "route" is the pre-computed driving path (encoded polyline).
   If you change a day's stops, just delete its route line - the
   map falls back to a straight line between stops until we
   regenerate it.
   ------------------------------------------------------------------ */
var MIGRATION = {
  current: { lat: 40.3285, lng: -74.7907, label: "We are here — New Jersey" },
  days: [
    { date: "Day 1 • Jul 2", title: "Manchester, CT → New Jersey", color: "#ffa24a",
      route: "kj~}FjjsyLp]fhCxj@iJ{E~vDqu@puAlPl_Ch`CrgI``Bng@biAwpAlgCqm@b{Bjy@heTxoLn{FncHx`Bzj@p_F|{GjeNjeGdcFxsIjvAxkGljEnrF|y@d}Dl_Ctt@vyFbpFhjAziMnaBvnDn_Dd`B~}CaGld@nkGv~A`rAbs@tuEb}BxbF|Cf~In_Bz_ItfBdqDbtAjcAhj@|zEpbA`hAvt@r|CnkAnnIzpBncG`xDjdEzuArzI~fLnkLftBzfAdx@`aExgGyt@|c@~q@gyCpnYeuBbtAhBjzAvw@nyAffEngAnzChmG||GxhH~tG|iCbs@ttAtcIpmFzy@nwApzKt|FtfDf_DhhFjgQfqFbrG}c@zkAvfBboBz{AllIzu_@pzf@ef@pjPicFdp@",
      stops: [
        { name: "26 Hampton Dr • Manchester, CT", note: "6:00 PM. Keys handed over, truck rolling. Goodbye, Connecticut.", lat: 41.7759, lng: -72.5215 },
        { name: "New Jersey", note: "Family stop before the long haul west.", lat: 40.3285, lng: -74.7907 }
      ] },
    { date: "Day 2 • Jul 5", title: "New Jersey → Roanoke, VA", color: "#2fb9ad",
      route: "gtcuF|ongMneF}g@nTxcExhDvpD~tAbnEl}At_@xaFuZxxEdyJfmDloD_O|mCckD`}J|GvrLpzCjvIteEne[~eB~hE_^zlHrpAdkIjk@`|KcY|cDfkA`wE~XzyGenApcLqmAb}DozIhpOmi@nhHgoDt|Lh\\tkI}bFllGgu@j~IsvAn~G}t@t`A_c@p{NbnC|we@wg@|oAhIdrKpOdnC~wAh{ChSfoDzRrpTif@ptM}\\b`E{hF|hDeVjaHcmAhjAnRdt@gxAp~@kNc{@g`CeDyqA|qG`lBd~HdmCbwAf_@rpH`_D~`Hl`@f}EleCxfElbDvrA|y@ncN|tQpga@btCjgJpiD`iCxoChqFphDbtDnrE~qBf`@~{DbqIfrIdlZpwJj_DwKbcBpaBlpCqy@dnCvb@fvGr`Glu@~wBrrCvdBf|@ltKn`CduCdhHrbEvtB`zE`vBjiBzpEdKjlE|zExkCz^dbFbrD~qPbgGbuDh_Fv|FmEh|MblKnaDzpAzdJjjJ||BrsE|O~nBccAxoEbhDfiJlqJ`jLptFbyEfjE`yBnmG|hJ`iFbrCl|CryDbgE~lA~{DmZdoH||ClgFffFtiHd~DjfQpuMpqCj|Cbf@lnC|iEzcFptIpwCf`GqUv~Eps@zaIdbIllFtaAriGb~CtbFxwG|cCjuAxpBbrDxvDrxBruCxbFxhDv|A|{GbiG~|GvsIhmFdyNz`Jt|EjbF~gAhoEthDzvIzdMdqB~lGlcFtuFdYfiCnvKrxI~fEtlL|vAfmAfoBxlEbvExbNfjM`rIpkAzwIxlBbaD|dFibD`eBq|DxrAcVf^z\\",
      stops: [
        { name: "New Jersey", note: "Westbound for real now.", lat: 40.3285, lng: -74.7907 },
        { name: "Harrisburg, PA", note: "Fuel and snacks.", lat: 40.2732, lng: -76.8867 },
        { name: "Roanoke, VA", note: "Overnight in the Blue Ridge.", lat: 37.2710, lng: -79.9414 }
      ] },
    { date: "Day 3 • Jul 6", title: "Roanoke → Nashville, TN", color: "#7a5cff",
      route: "{mnbFxp|fNob@mf@cqA|_@s~AzuDi~Ej~D|hGjeO~~@vbF~bFdoKzsAxtH~tAtiC|sDv}Av{KfpRpzAtdLtxB~gG{b@dfMrwAj{EcKvhHn_AlhJdi@xbAlhJzqEd}ChlNrxEvsH|cB|vWoy@j~IihA~t@gm@pbC|iBtbKdbAh`B~oGfbf@lbDhmI`fBv|L`nDn`E|K`wD`~@brDtK|_PhoCd~EiMpyBxoB|rMlK`uEniBvrIxcEt`G`tBvhGn|@tfJlgIh`OvsAbvEl@dtG~|Jz_XvlCtuEna@pfGzjC~yDvwArzF~eIfsNl`@zaCzeFpgIxKpmFraGdgH`u@jxKxlAtfGxcQffa@pbG``V|{An_P`cHh_NxnBxnJ``GhwG|pJhkS`tFzeVnX`{EokCvsWdKtwEw`ArgNt{D~kJzxBuRpVhc@y\\~TdGpbDjuDvcL~mGtyc@tbCfwHvDneIyjAb_G|`C`|I_pAh}GrDfqGmnCddGcpB~hLfdDblNoeAdbDje@vlEus@|lH|jBncDelE|sO_nDzcEk~ApqG}lOfcZclA`oJq}EzcI_pGtvEa_@l`AgCxiExgAj~Gg}AloBuMruFbiAd`Lsc@|{Xl{A`~Ll|Afv@vbCp`FonBvoGsjEbqCgf@~wMwtCjtFgx@||GwCzzFdiA``Kag@prCxs@`wCi\\rgDenBrqFi_@bqErCxqGzdAt_IePdiThnBtoWsO``MdtDv|Iw@vdMaeC`uH",
      stops: [
        { name: "Roanoke, VA", note: "", lat: 37.2710, lng: -79.9414 },
        { name: "Knoxville, TN", note: "Lunch stop.", lat: 35.9606, lng: -83.9207 },
        { name: "Nashville, TN", note: "Music City overnight.", lat: 36.1627, lng: -86.7816 }
      ] },
    { date: "Day 4 • Jul 7", title: "Nashville → Little Rock, AR", color: "#6db28f",
      route: "e`v{EhotpO`Zbx@syAtbAtfBtxCtn@bsHdrG~~I|eBrcA`uAhsDmR||Jwz@rtBgBlmC`kAfvGpkEzxDpuB~eF}h@~fCjoAbpFuq@xiE`JtbEd`@lgIprC~dMaHvtEphEtyMf}EzzF|kGbiN`gAvjHo|@rjI|]baE_PxuGboA~iD`^b|Fqi@`fVraGbrNd}@zfFzZvvK_[d~H|_CfkRv_DzmNrmDl_X`jKbk_@dkA`cSpyXrjpAv~JvxCxtOx{Yz_J|oYbiHhiLd|Ybzs@Bv_Qjp@`Li]jxHq]jqBmXsF_DtgR_aB`lGhqCzvMiUnxX~fBtpFxV|nMhkGp|WpuIvtOwJdlMnfE||I`{C~gKz[jtEdfKjsj@rc@vbIl|DfbHroCj{K~c@dzPdfDzvPrExaYf`B~~FnXhvMkg@h{QvLxzUnvC|}f@cAxgKtVtl@j{ArGrAx|@rnAfPx@|vA",
      stops: [
        { name: "Nashville, TN", note: "", lat: 36.1627, lng: -86.7816 },
        { name: "Memphis, TN", note: "BBQ checkpoint.", lat: 35.1495, lng: -90.0490 },
        { name: "Little Rock, AR", note: "Overnight.", lat: 34.7465, lng: -92.2896 }
      ] },
    { date: "Day 5 • Jul 8", title: "Little Rock → Amarillo, TX", color: "#ff7a59",
      route: "slasEzhhrPoAcwAe{@yJwNfl@{fDcJuL`yAo`FvxHeaFpr@ylDz}Dif@fiBs}Dlu@u}AdrA{sPgoAehEdw@suBcXc~DjhCmgAftLoaB|vBmpBnvGc`@bqS}aA`rDkKfkGa~BjnI}~HptLqe@tfKxt@~rCmXjrMg{LhtYieB~yNmRnqJ}y@`}CssFfcDq`A`nBwxA`^ynFlxHev@z}MgwB|jGarB``Ps~@nt\\s`Dng[rp@feIoL||OjyDnuNhbAbnNzwDthLjMtxBq`AvbJxg@f_BiNfeE`wDnyJzgE~lHxl@tiGqHhoNmzIndQfStrFiv@huJn@j|Iqp@|wC}rCjeFeg@jbGhTxiNzp@`_Esd@d`K~e@j}RnxCjeUeNdyj@lw@buX~kB~sIcWl}C~m@btMw[x{Rxg@vvJkYr{IhU~cXbtAhzOfqDp~Otb@r}Ta_@vsEzFbwm@{e@|_G~vAxde@om@frD_Knf`@ykHplXyB~jEymElbJx]||AvAffEo`@lU~i@||Hx@zuYgyFxbPmDhs^apDlyPp@vs`@uw@nhH~aBnkF_g@jdEal@`oaAryArqCgCxaWbg@~ePt_B`qFnb@jnHbxAxnDvD~iPl_AdtCtuCzxDplC~zIqWb|J``@dkN|yEbbHzDb_SzyHltOtlL|lFne@pgOnxDnsLdGz{cDzfAn{F`PreRrtEfwIeS|tFz\\p}Bc[vyWaiAzsKmpB~iE|d@buFm@`fg@avArcGjDvob@erEjqKdsEl~TuFrrM",
      stops: [
        { name: "Little Rock, AR", note: "", lat: 34.7465, lng: -92.2896 },
        { name: "Oklahoma City, OK", note: "Halfway across the plains.", lat: 35.4676, lng: -97.5164 },
        { name: "Amarillo, TX", note: "Cadillac Ranch drive-by. Overnight.", lat: 35.2220, lng: -101.8313 }
      ] },
    { date: "Day 6 • Jul 9", title: "Amarillo → Flagstaff, AZ", color: "#ffd166",
      route: "gh~uEr|olR|At_KbdDlfCrn@rqCs\\bh^efBjpLuKjxN}nDxi\\nLlmDonAzlDwtCf{WhVtuZvlI~~b@rzDnyMrW~jPbmLh{g@pBn~MasEpeOudDtyGnEnpb@t}BpqGy\\d_IdbBjqJrxCfhHiy@rzNvlJf|j@qPx{H~jCr_\\bhEbyLft@`oL|fJhrVzc@zzDa`@d`B`PnrCemBnxEi`@|`HuiF||oClZb|Csu@jk\\lg@b{BkBvlw@ezAntLuvQ|hn@hhB|eGhhBbrBpHl_ChyAnoBn\\rvEkMbjCq{Fh_SiKnzGtmCts@qHrkAuiCiRg@x_JryGp~Pt~Fthf@biGtaZa{Al}Q}IluKovFdlGk\\z}BllAjpEsJjmJgnAtdGasAtxCmvBfpBeP|~SzwAxnImjAj}IclLzsQ{qCd_H}~Bfh@}_NbmMubIl|AmkErkCo`Cb_IyyArkKwoC||Zm}Ldc]y{A`vKi`F|vS?`pLeb@ntAbg@vrNxcB|cKtiA|xAf~AbgLdiBnxDz~GjjIpcFf~Cj~ArrDxeH`kGjcGvrPiJpsJhm@zcDhgKngNriD`zTr{IrlPrhCrxJ`rAneMfpD`tQdxJjrTpbE`~f@|}Dz|F~_DpuBboAxxGuj@hiIqoD~sF_{Aj~Ei{Bngg@o`E|_QygAthJedCd|BwKj|He{Hri`@iqB`{TwlAhtYgtFvfTnR|_DoqGztTvAvhL_hBpwPfa@ntC`dCr`Eef@|oD",
      stops: [
        { name: "Amarillo, TX", note: "", lat: 35.2220, lng: -101.8313 },
        { name: "Albuquerque, NM", note: "Green chile lunch.", lat: 35.0844, lng: -106.6504 },
        { name: "Flagstaff, AZ", note: "Welcome to Arizona. Last night on the road.", lat: 35.1983, lng: -111.6513 }
      ] },
    { date: "Day 7 • Jul 10", title: "Flagstaff → Estrella", color: "#e86aa6",
      route: "otyuEb|mhT|o@j{@jrBvFnlAb{AroB~n@vkCmYr{E`m@xjAa`@p_RfQthBgo@duB{iDtgKk{AjlDu`E`xDpw@biA}zArs@KnsAtcAnlB`oGhdHhzLbsAjmBteCtZptA|`En{DnnEde@v}BrvBloBhm@jtB~eEhkBdsBblCxqBdW~|@|gFsK~}DbgItjGpeI`gD~j@|sAzuD`dCfcDzfEfdKzkA~~DeuAdnFlPt_Bwb@j`CzqBxlEjbBz{Ela@`jIofAnkDjt@nuDNxnHa`CrbCviAlgK`q@d~IwQp|JuzAoAreFqpAhnEl|A`}NblEpyC`vE`hAfq@~zLbtBfbChaB`q@va]jB`nGzx@ruKgEjgB_k@`bCfMoAk]nbAv^tvCwa@",
      stops: [
        { name: "Flagstaff, AZ", note: "Down out of the pines.", lat: 35.1983, lng: -111.6513 },
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
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd', maxZoom: 19
  }).addTo(map);

  var bounds = L.latLngBounds([]);
  var legend = document.getElementById('mig-legend');

  MIGRATION.days.forEach(function (day) {
    var group = L.layerGroup().addTo(map);

    var path = day.route ? decodePoly(day.route)
                         : day.stops.map(function (s) { return [s.lat, s.lng]; });
    L.polyline(path, { color: day.color, weight: 3.5, opacity: .9 }).addTo(group);
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
      day.title + '</span><span class="dt">' + day.date + '</span>';
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
