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
  "AFGANI BIRIYANI": "/src/assets/AFGANI BIRYANI.jpg",
  "ANDHRA CHICKEN CURRY B/L": "/src/assets/ANDHRA CHICKEN CURRY BL.jpg",
  "CHICKEN BONELESS BIRIYANI": "/src/assets/CHICKEN BONELESS BIRYANI.jpg",
  "CHILLY PRAWNS": "/src/assets/CHILLI PRAWNS.jpg",
  "FISH FRY B/L": "/src/assets/FISH FRY BL.jpg",
  "POT CHICKEN B/L BIRIYANI": "/src/assets/POT CHICKEN BL BIRIYANI.jpg",
};

const explicitImageFilesByIndex: Record<number, string> = {
  109: "/src/assets/GINGER CHICKEN (2).jpg",
};

export const imageFileForMenuItem = (name: string, index: number) =>
  explicitImageFilesByIndex[index] ?? explicitImageFiles[name] ?? imageFileByDishName.get(normalize(name));

export const menuAssetUrls = assetUrls;
