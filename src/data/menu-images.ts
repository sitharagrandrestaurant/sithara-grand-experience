const assetUrls = import.meta.glob("/src/assets/**/*.{jpg,jpeg,png}", { eager: true, import: "default", query: "?url" }) as Record<string, string>;

const normalize = (value: string) => value.toUpperCase().replace(/[^A-Z0-9]+/g, "");
const imageFileByDishName = new Map<string, string>();

Object.keys(assetUrls)
  .sort()
  .forEach((path) => {
    const filename = path.split("/").pop() ?? "";
    const basename = filename.replace(/\.(?:jpg|jpeg|png)$/i, "");
    if (!/^\d{3}$/.test(basename)) {
      imageFileByDishName.set(normalize(basename), path);
    }
  });

const explicitImageFiles: Record<string, string> = {
  "CHI LEMAN CORIENDER SOUP": "/src/assets/menu-generated/010.jpg",
  "KAJU FRY": "/src/assets/menu-generated/014.jpg",
  "KAJU PAKODA": "/src/assets/menu-generated/015.jpg",
  "POT FRUIT LASSI": "/src/assets/menu-generated/177.jpg",
  "FISH FRY B/L": "/src/assets/FISH FRY B-L.png",
  "POT CHICKEN B/L BIRIYANI": "/src/assets/POT CHICKEN B-L BIRIYANI.png",
  "ANDHRA CHICKEN CURRY B/L": "/src/assets/ANDHRA CHICKEN CURRY BL.png",
  "CHILLY BABYCORN": "/src/assets/CHILLY BABYCORN.png",
  "CHILLY MUSHROOM": "/src/assets/CHILLY MUSHROOM.png",
};

const legacyNumberedFiles: Record<number, string> = {
  1: "/src/assets/menu-generated/001.jpg",
  2: "/src/assets/menu-generated/002.jpg",
  3: "/src/assets/menu-generated/003.jpg",
  4: "/src/assets/menu-generated/004.jpg",
  5: "/src/assets/menu-generated/005.jpg",
  6: "/src/assets/menu-generated/006.jpg",
  7: "/src/assets/menu-generated/007.jpg",
  8: "/src/assets/menu-generated/008.jpg",
  9: "/src/assets/menu-generated/009.jpg",
  10: "/src/assets/menu-generated/010.jpg",
  11: "/src/assets/menu-generated/011.jpg",
  12: "/src/assets/menu-generated/012.jpg",
  13: "/src/assets/menu-generated/013.jpg",
  14: "/src/assets/menu-generated/014.jpg",
  15: "/src/assets/menu-generated/015.jpg",
  177: "/src/assets/menu-generated/177.jpg",
  178: "/src/assets/menu-generated/178.jpg",
  179: "/src/assets/menu-generated/179.jpg",
  180: "/src/assets/menu-generated/180.jpg",
  181: "/src/assets/menu-generated/181.jpg",
  182: "/src/assets/menu-generated/182.jpg",
  183: "/src/assets/menu-generated/183.jpg",
  184: "/src/assets/menu-generated/184.jpg",
  185: "/src/assets/menu-generated/185.jpg",
  186: "/src/assets/menu-generated/186.jpg",
  187: "/src/assets/menu-generated/187.jpg",
  188: "/src/assets/menu-generated/188.jpg",
  189: "/src/assets/menu-generated/189.jpg",
  190: "/src/assets/menu-generated/190.jpg",
  191: "/src/assets/menu-generated/191.jpg",
  192: "/src/assets/menu-generated/192.jpg",
  193: "/src/assets/menu-generated/193.jpg",
  194: "/src/assets/menu-generated/194.jpg",
  195: "/src/assets/menu-generated/195.jpg",
};

export const imageFileForMenuItem = (name: string, index: number) =>
  explicitImageFiles[name] ?? imageFileByDishName.get(normalize(name)) ?? legacyNumberedFiles[index];

export const menuAssetUrls = assetUrls;
