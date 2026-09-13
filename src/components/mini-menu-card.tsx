import { MessageCircle } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { whatsappFor } from "@/data/menu";
import biryaniImage from "@/assets/sithara-biryani.jpg";
import signatureImage from "@/assets/sithara-signatures.jpg";
import seafoodImage from "@/assets/sithara-seafood.jpg";
import dessertImage from "@/assets/sithara-desserts.jpg";
const fallbackImages={biryani:biryaniImage,signature:signatureImage,seafood:seafoodImage,dessert:dessertImage};
const generatedImages=import.meta.glob("/src/assets/menu-generated/*.jpg",{eager:true,import:"default",query:"?url"}) as Record<string,string>;

export function MiniMenuCard({item,featured=false}:{item:MenuItem;featured?:boolean}){
  const itemNumber=item.id.split("-",1)[0]?.padStart(3,"0");
  const generatedImage=itemNumber?generatedImages[`/src/assets/menu-generated/${itemNumber}.jpg`]:undefined;
  const image=generatedImage??fallbackImages[item.imageKey];
  return <article className={featured?"dish-card dish-card-featured":"dish-card"}><div className="dish-media"><img src={image} alt={`${item.name} presentation`} loading="lazy" width={512} height={512}/><span className="dish-price">₹{item.price}</span><span className={`diet-dot diet-${item.dietary}`} aria-label={item.dietary==="nonVeg"?"Non-vegetarian":item.dietary==="veg"?"Vegetarian":"Dietary classification unspecified"}/></div><div className="dish-body"><div><p>{item.category}</p><h3>{item.name}</h3></div><a href={whatsappFor(item.name)} target="_blank" rel="noreferrer" aria-label={`Enquire about ${item.name} on WhatsApp`}><MessageCircle/></a></div></article>
}
