import { Check, MessageCircle } from "lucide-react";
import { useState } from "react";
import type { MenuItem } from "@/data/menu";
import { whatsappFor } from "@/data/menu";
import { menuAssetUrls } from "@/data/menu-images";
import { useCart } from "@/context/cart-context";
export function MiniMenuCard({item,featured=false}:{item:MenuItem;featured?:boolean}){
  const mappedImage=item.imageFile?menuAssetUrls[item.imageFile]:undefined;
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const handleAdd = () => {
    addItem(item, mappedImage);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };
  return <article className={featured?"dish-card dish-card-featured":"dish-card"}><div className="dish-media">{mappedImage && <img src={mappedImage} alt={`${item.name} presentation`} loading="lazy" width={512} height={512}/>}<span className="dish-price">₹{item.price}</span><span className={`diet-dot diet-${item.dietary}`} aria-label={item.dietary==="nonVeg"?"Non-vegetarian":item.dietary==="veg"?"Vegetarian":"Dietary classification unspecified"}/></div><div className="dish-body"><div><p>{item.category}</p><h3>{item.name}</h3><button className={`add-cart-button${added ? " add-cart-button-added" : ""}`} type="button" onClick={handleAdd}>{added ? <><Check /> Added to Cart</> : "Add to Cart"}</button></div><a href={whatsappFor(item.name)} target="_blank" rel="noreferrer" aria-label={`Enquire about ${item.name} on WhatsApp`}><MessageCircle/></a></div></article>
}
