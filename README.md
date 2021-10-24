Automatic APKs downloader and analyzer aiming to search for specific term usage (like a domain dame) within apps downloaded apps.

Process:
1. Search for apps to download on Google Play Store
2. Download APKs from the Play Store
3. Decompile the APKs
4. Search for the given term reference in specific files

# How to use:

```
node --experimental-specifier-resolution=node  -r dotenv/config src/index.js -s "plant identification" -t "plantnet.org" -e "org.plantnet" -c 100
```

or
```
npm run cli -- -s "plant identification" -t "plantnet.org" -e "org.plantnet" -c 100
```

### Example output:
<details>
  <summary>Click to expand!</summary>

```
> Searching apps
Found 96 apps
> Downloading 4 apps (92 already downloaded)
Downloading  io.ionic.seed2spoon
Downloading  com.darxide.android.plantguide
Downloading  com.extension.idweeds
Downloading  net.aidanmontare.wild_plant_id

> Extracting 4 apps
Decompile  io.ionic.seed2spoon
Decompile  com.darxide.android.plantguide
Decompile  com.extension.idweeds
Decompile  net.aidanmontare.wild_plant_id

> Inspecting 88 apps
Inspect  cn.danatech.xingseus
Inspect  com.stromming.planta
Inspect  plant.identification.snap
Inspect  com.myplantin.app
Inspect  com.fws.plantsnap2
Inspect  com.fourdesire.plantnanny2
Inspect  com.conceptivapps.blossom
Inspect  com.ablenas.plant_collector
Inspect  plant.identification.flower.tree.leaf.identifier.identify.cat.dog.breed.nature
Inspect  app.plant.identification
Inspect  com.plantspot.plantidentifier
Your term was found in file: /temp/apks-search/cache/decompiledApks/com.plantspot.plantidentifier/smali_classes2/com/plantfinder/identification/util/Config.smali
Inspect  com.abc.plantdetect
Inspect  org.inaturalist.seek
Inspect  findplant.com.bian
Inspect  com.findplant.plantidentification
Inspect  org.inaturalist.android
Inspect  com.floraincognita.app.floraincognita
Inspect  com.tl.plantidentification
Your term was found in file: /temp/apks-search/cache/decompiledApks/com.tl.plantidentification/smali/com/tl/plantidentification/Utils/GlobalRetro.smali
Inspect  com.vtpn.plantid
Your term was found in file: /temp/apks-search/cache/decompiledApks/com.vtpn.plantid/assets/index.android.bundle
Inspect  plant.identification.identifier.identity
Your term was found in file: /temp/apks-search/cache/decompiledApks/plant.identification.identifier.identity/smali_classes3/plant/identification/identifier/identity/serverTask/GetResultPlantnetNameTask.smali
Your term was found in file: /temp/apks-search/cache/decompiledApks/plant.identification.identifier.identity/smali_classes3/plant/identification/identifier/identity/serverTask/UploadImagePlantnetTask.smali
Inspect  identifyplants.floweridentify.plantfinder.plant.identification.snap.plantsearch
Your term was found in file: /temp/apks-search/cache/decompiledApks/identifyplants.floweridentify.plantfinder.plant.identification.snap.plantsearch/smali_classes2/re/plant/identification/Api/RestApi.smali
Your term was found in file: /temp/apks-search/cache/decompiledApks/identifyplants.floweridentify.plantfinder.plant.identification.snap.plantsearch/smali_classes2/re/plant/identification/Utils/GlobalRetro.smali
Inspect  tree.plant.flower.identification.freeplantfinder
Your term was found in file: /temp/apks-search/cache/decompiledApks/tree.plant.flower.identification.freeplantfinder/smali_classes2/com/re/newplantfloweridentification/Api/RestApi.smali
Your term was found in file: /temp/apks-search/cache/decompiledApks/tree.plant.flower.identification.freeplantfinder/smali_classes2/com/re/newplantfloweridentification/Utils/GlobalRetro.smali
Inspect  com.plantsnap.plant.identify.plantsearch
Inspect  com.perfecttools.plantsidentifier
Inspect  com.plantidentifierapp.plantandtreeidentifier.plantcare.plantbased
Inspect  com.plantid.picturethis.plantin.plantsnap.natureid
Your term was found in file: /temp/apks-search/cache/decompiledApks/com.plantid.picturethis.plantin.plantsnap.natureid/smali/com/plantidentified/app/ui/detail/DetailActivity.smali
Your term was found in file: /temp/apks-search/cache/decompiledApks/com.plantid.picturethis.plantin.plantsnap.natureid/smali/g/f/a/m/q.smali
Your term was found in file: /temp/apks-search/cache/decompiledApks/com.plantid.picturethis.plantin.plantsnap.natureid/smali/g/f/a/o/b/k.smali
Your term was found in file: /temp/apks-search/cache/decompiledApks/com.plantid.picturethis.plantin.plantsnap.natureid/smali/g/f/a/o/d/p/g.smali
Inspect  com.dstteam.minecraftvn123.theplantae
Inspect  com.gardentags
Inspect  com.plantidentification.plusfree21
Inspect  air.be.trendsco.plantifier
Inspect  sk.ab.herbs
Inspect  com.touchberry.plant.story.identification.gardening
Inspect  com.google.ar.lens
Inspect  cc.forestapp
Inspect  com.labs.merlinbirdid.app
Inspect  com.picturerock.rock
Inspect  de.tu_chemnitz.mi.kahst.birdnet
Inspect  com.ecosia.android
Inspect  com.glority.pictureinsect
Inspect  com.unlogical.jane
Inspect  lt.farmis.apps.farmiscatalog
Inspect  com.glority.picturebird
Inspect  com.htec.gardenize
Inspect  asak.pro.planting
Inspect  com.lofstudio.gardens
Inspect  com.fouxa.plantdiseasedetection
Inspect  plants.flowers.trees.species.identification.id.plantas.flores
Inspect  com.lucidcentral.mobile.appw
Inspect  com.famoconnect.plant.identifier.rose.sunflowers.daisy.orchids.flowers.lavender.weeds
Inspect  com.plantiary
Inspect  com.identifier.plant.flower.scan
Inspect  com.romancedawn.smartscan
Inspect  org.pottssoftware.agps21
Inspect  com.shekhsirajulstore.plantidentificationtrainingguide
Inspect  e.fruit.natureai
Inspect  com.coolgame.findflower
Inspect  com.jg.plantidentifier
Inspect  com.couchmadeapps.ediblewildplants
Inspect  com.leafdoctor
Inspect  com.ornamental.plant.aglaonema.lg
Inspect  de.iflora.europe
Inspect  com.lucidcentral.mobile.scotia
Inspect  com.amicho.serawit
Inspect  identifier.neural.plants
Inspect  com.floraincognita.app.floracapture
Inspect  com.masud.plant_identifier
Inspect  com.MyCameraSol.PlantsIdentifier
Inspect  com.andromo.dev58263.app71191
Inspect  com.makor.hotornot
Inspect  com.onurhazar.bbook
Inspect  com.godrej.ngcpr.endemicplants
Inspect  mayatana.co.in.scientificnameofaplants
Inspect  com.feiji.babyanimals.baby_animals
Inspect  com.soft24hours.dictionaries.dictionary8
Inspect  com.kesiflerdunyasi.foresttreeidentification
Inspect  co.uk.app.rightplants4me
Inspect  de.coogni.baum
Inspect  com.askattis.planticus
Inspect  com.oboae.example.beta.planteck
Inspect  rakta.plant.identification
Inspect  com.straitonapps.plantcare
Inspect  com.plantidentification.floweridentifier
Your term was found in file: /temp/apks-search/cache/decompiledApks/com.plantidentification.floweridentifier/smali/plant/finder/app/Api/RestApi.smali
Your term was found in file: /temp/apks-search/cache/decompiledApks/com.plantidentification.floweridentifier/smali/plant/finder/app/Utils/GlobalRetro.smali
Inspect  com.PlantsIdentifier.Camera
Inspect  com.andromo.dev601172.app655482
Inspect  com.hanoi.plantabcd
Your term was found in file: /temp/apks-search/cache/decompiledApks/com.hanoi.plantabcd/assets/index.android.bundle
Inspect  com.weedidnew
Inspect  com.smartplant
Inspect  com.thefrenchsoftware.flowerident

9 app contain the term plantnet.org, here is the details:

{
    "com.plantspot.plantidentifier": [
        "/temp/apks-search/cache/decompiledApks/com.plantspot.plantidentifier/smali_classes2/com/plantfinder/identification/util/Config.smali"
    ],
    "com.tl.plantidentification": [
        "/temp/apks-search/cache/decompiledApks/com.tl.plantidentification/smali/com/tl/plantidentification/Utils/GlobalRetro.smali"
    ],
    "com.vtpn.plantid": [
        "/temp/apks-search/cache/decompiledApks/com.vtpn.plantid/assets/index.android.bundle"
    ],
    "plant.identification.identifier.identity": [
        "/temp/apks-search/cache/decompiledApks/plant.identification.identifier.identity/smali_classes3/plant/identification/identifier/identity/serverTask/GetResultPlantnetNameTask.smali",
        "/temp/apks-search/cache/decompiledApks/plant.identification.identifier.identity/smali_classes3/plant/identification/identifier/identity/serverTask/UploadImagePlantnetTask.smali"
    ],
    "identifyplants.floweridentify.plantfinder.plant.identification.snap.plantsearch": [
        "/temp/apks-search/cache/decompiledApks/identifyplants.floweridentify.plantfinder.plant.identification.snap.plantsearch/smali_classes2/re/plant/identification/Api/RestApi.smali",
        "/temp/apks-search/cache/decompiledApks/identifyplants.floweridentify.plantfinder.plant.identification.snap.plantsearch/smali_classes2/re/plant/identification/Utils/GlobalRetro.smali"
    ],
    "tree.plant.flower.identification.freeplantfinder": [
        "/temp/apks-search/cache/decompiledApks/tree.plant.flower.identification.freeplantfinder/smali_classes2/com/re/newplantfloweridentification/Api/RestApi.smali",
        "/temp/apks-search/cache/decompiledApks/tree.plant.flower.identification.freeplantfinder/smali_classes2/com/re/newplantfloweridentification/Utils/GlobalRetro.smali"
    ],
    "com.plantid.picturethis.plantin.plantsnap.natureid": [
        "/temp/apks-search/cache/decompiledApks/com.plantid.picturethis.plantin.plantsnap.natureid/smali/com/plantidentified/app/ui/detail/DetailActivity.smali",
        "/temp/apks-search/cache/decompiledApks/com.plantid.picturethis.plantin.plantsnap.natureid/smali/g/f/a/m/q.smali",
        "/temp/apks-search/cache/decompiledApks/com.plantid.picturethis.plantin.plantsnap.natureid/smali/g/f/a/o/b/k.smali",
        "/temp/apks-search/cache/decompiledApks/com.plantid.picturethis.plantin.plantsnap.natureid/smali/g/f/a/o/d/p/g.smali"
    ],
    "com.plantidentification.floweridentifier": [
        "/temp/apks-search/cache/decompiledApks/com.plantidentification.floweridentifier/smali/plant/finder/app/Api/RestApi.smali",
        "/temp/apks-search/cache/decompiledApks/com.plantidentification.floweridentifier/smali/plant/finder/app/Utils/GlobalRetro.smali"
    ],
    "com.hanoi.plantabcd": [
        "/temp/apks-search/cache/decompiledApks/com.hanoi.plantabcd/assets/index.android.bundle"
    ]
}
```
</details>

### Full help:
```
$ npm run cli -- --help
Usage: index [options]

Options:
  -s, --search [name...]     App search term for the store to finds apps
  -c, --count <number>       Search results count for each search (default: 1)
  -si, --similar             Similarity app search to find related apps to the one given on this params (ex: org.plantnet).
  -e, --exclude <packageId>  Exclude given app id in the app search
  -co, --country <country>   Country to find the app in (default: "us")
  --skip-old                 Skip already inspected file in cache (cache includes all download apps no matter the initial search term) (default: false)
  -t, --term <term>          Search term (one) to be find in decompiled app
  -h, --help                 display help for command
```

### Setup

1. npm i
2. Copy `.env.example` to `.env` and fill missing values according to the doc in the file itself
3. Install `apktool` [here](https://ibotpeaches.github.io/Apktool/install/)
4. Run `npm run cli`
