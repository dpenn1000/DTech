# Photo shopping list — Food page

Hand this to a chat or tool that **can download from the web** (this build environment can't — its network is allowlisted, so it can research but not fetch image files).

## What to do
1. For each row, grab **one vibrant, real photo** (the actual venue or its food). No stock, no generic desert shots.
2. Save it with the **exact filename** in the `Filename` column.
3. Make it a **JPEG, landscape ~16:10, about 1200px wide, under ~300KB** (compress it).
4. Drop all files into the repo at **`assets/img/`**.
5. That's it — the cards already point at these filenames, so the photos appear automatically. No code changes needed.

Good sources, in order of preference: the venue's **own website**, its **Instagram**, then **Google Maps / Yelp** review photos. The `Source` column is the place to start; the `Search` column is a fallback query.

---

## Rooftop bars
| Filename | Place | Source to pull from | Search | The shot |
|---|---|---|---|---|
| `food-eden.jpg` | Eden at Kimpton Palomar | https://www.kimptonpalomarphoenix.com | "Eden rooftop Kimpton Palomar Phoenix" | Pool deck + cabanas with skyline behind, golden hour |
| `food-diablo.jpg` | Diablo From the Rooftop (Cambria) | Instagram @diablophx | "Diablo rooftop Cambria Phoenix pool" | Rooftop pool + downtown skyline |
| `food-floor13.jpg` | Floor 13 Rooftop (Hotel San Carlos) | https://www.hotelsancarlos.com | "Floor 13 rooftop Hotel San Carlos Phoenix" | Sundeck with skyline view |
| `food-barsmith.jpg` | Bar Smith | https://barsmithphoenix.com / IG @barsmithphx | "Bar Smith rooftop Phoenix night" | Rooftop crowd / DJ at night, city lights |

## The tables — West Valley (close to home)
| Filename | Place | Source to pull from | Search | The shot |
|---|---|---|---|---|
| `food-litchfields.jpg` | Litchfield's at The Wigwam | https://www.wigwamarizona.com | "Litchfield's restaurant Wigwam Litchfield Park" | Dining patio under palms, or a plated dish |
| `food-hightide.jpg` | High Tide Seafood Bar, Goodyear | Yelp/Google: High Tide Goodyear | "High Tide Seafood Bar Goodyear steam kettle" | Steam-kettle seafood pot or sushi spread |
| `food-coopershawk.jpg` | Cooper's Hawk Winery, Avondale | https://coopershawkwinery.com | "Coopers Hawk Avondale dining room" | Dining room / wine + a signature dish |

## The tables — Phoenix (worth the drive)
| Filename | Place | Source to pull from | Search | The shot |
|---|---|---|---|---|
| `food-lomwong.jpg` | Lom Wong (James Beard) | https://www.lomwongphx.com / IG @lomwongphx | "Lom Wong Phoenix Thai dish" | A colorful regional Thai plate |
| `food-littlemiss.jpg` | Little Miss BBQ | https://www.littlemissbbq.com / IG @littlemissbbq | "Little Miss BBQ Phoenix brisket tray" | Brisket + ribs tray, butcher paper |
| `food-chula.jpg` | Chula Seafood | https://www.chulaseafood.com / IG @chulaseafood | "Chula Seafood Phoenix poke" | Fresh poke bowl or the seafood counter |
| `food-tacoschiwas.jpg` | Tacos Chiwas | https://www.tacoschiwas.com / IG @tacoschiwas | "Tacos Chiwas Phoenix tacos gorditas" | Tacos / gorditas close-up |

## Street markets
| Filename | Place | Source to pull from | Search | The shot |
|---|---|---|---|---|
| `food-verrado.jpg` | Verrado Farmers Market, Buckeye | https://verrado.com | "Verrado Farmers Market Main Street Buckeye" | Market stalls on Main Street |
| `food-uptown.jpg` | Uptown Farmers Market | https://uptownmarketaz.com / IG @uptownmarketaz | "Uptown Farmers Market Phoenix produce" | Produce stalls, busy morning |
| `food-dtphxmarket.jpg` | Downtown Phoenix Farmers Market | https://www.visitphoenix.com/things-to-do/shopping/farmers-markets/ | "Downtown Phoenix Farmers Market" | Crowd + tents + live music |
| `food-gilbert.jpg` | Gilbert Farmers Market | https://gilbertmarket.com / IG @gilbertmarket | "Gilbert Farmers Market water tower food trucks" | Food trucks under the water tower |

## Food halls
| Filename | Place | Source to pull from | Search | The shot |
|---|---|---|---|---|
| `food-churchill.jpg` | The Churchill | https://www.thechurchillphx.com / IG @thechurchillphx | "The Churchill Phoenix shipping container courtyard" | Container courtyard with string lights |
| `food-tempeeats.jpg` | Tempe Eats | Google/Yelp: Tempe Eats | "Tempe Eats food hall interior" | Interior with multiple kitchen stalls |

---

## Optional extras
| Filename | Where it'd go | The shot |
|---|---|---|
| `hero-home.jpg` | Home page hero background (currently a gradient) | A wide, dramatic Estrella Mountain Ranch / North Lake sunset. If added, tell me and I'll wire it into `index.html`. |

## If you'd rather use image URLs instead of files
Paste me a list of `filename = https://image-url` pairs and I'll hotlink them with a fallback instead. Files dropped into `assets/img/` are more reliable for viewers, though.
