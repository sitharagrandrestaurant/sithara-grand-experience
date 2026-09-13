import { MessageCircle } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { whatsappFor } from "@/data/menu";
import { menuAssetUrls } from "@/data/menu-images";
import biryaniImage from "@/assets/sithara-biryani.jpg";
import signatureImage from "@/assets/sithara-signatures.jpg";
import seafoodImage from "@/assets/sithara-seafood.jpg";
import dessertImage from "@/assets/sithara-desserts.jpg";
const fallbackImages={biryani:biryaniImage,signature:signatureImage,seafood:seafoodImage,dessert:dessertImage};
export function MiniMenuCard({item,featured=false}:{item:MenuItem;featured?:boolean}){
  const mappedImage=item.imageFile?menuAssetUrls[item.imageFile]:undefined;
  const image=mappedImage??fallbackImages[item.imageKey];
  return <article className={featured?"dish-card dish-card-featured":"dish-card"}><div className="dish-media"><img src={image} alt={`${item.name} presentation`} loading="lazy" width={512} height={512}/><span className="dish-price">₹{item.price}</span><span className={`diet-dot diet-${item.dietary}`} aria-label={item.dietary==="nonVeg"?"Non-vegetarian":item.dietary==="veg"?"Vegetarian":"Dietary classification unspecified"}/></div><div className="dish-body"><div><p>{item.category}</p><h3>{item.name}</h3></div><a href={whatsappFor(item.name)} target="_blank" rel="noreferrer" aria-label={`Enquire about ${item.name} on WhatsApp`}><MessageCircle/></a></div></article>
}
