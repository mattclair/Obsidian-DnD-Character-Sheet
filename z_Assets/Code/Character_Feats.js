const char = dv.current() ?? {};
const BASE_FOLDER = char.BASE_FOLDER;
const phbClassPath = `${BASE_FOLDER}/classes`;
const rawFeats = dv.current().feats ?? [];

// Normalize feats into `{ name, data }`
const feats = rawFeats.map(f => {
   if (typeof f === "string") {
      return { name: f, data: null };
   }
   if (typeof f === "object") {
       const key = Object.keys(f)[0];
       return { name: key, data: f[key] };
   }
});

// build the list
const listItems = feats.map(feat => {
    const featFile = `${BASE_FOLDER}/feats/${feat.name.toLowerCase().replace(/ /g, "-")}-xphb`;
   return dv.fileLink(featFile, false, feat.name);
});

// Render as diamond-style list (same as your class features)
dv.list(listItems);