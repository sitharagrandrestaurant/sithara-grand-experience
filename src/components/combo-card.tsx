import { Check, ShoppingBag } from "lucide-react";
import { useState } from "react";
import type { Combo } from "@/data/combos";
import { useCart } from "@/context/cart-context";

export function ComboCard({ combo }: { combo: Combo }) {
  const { addCombo } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addCombo(combo);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <article className="combo-card">
      <div className="combo-image-wrap">
        <img src={combo.image} alt={`${combo.name} combo`} width={800} height={560} loading="lazy" />
        {combo.badge && <span className="combo-badge">{combo.badge}</span>}
      </div>
      <div className="combo-card-body">
        <div className="combo-card-heading">
          <div>
            <p className="combo-kicker">Curated combo</p>
            <h3>{combo.name}</h3>
            {combo.serving && <p className="combo-serving">{combo.serving}</p>}
          </div>
          <strong className="combo-price">₹{combo.price.toLocaleString("en-IN")}</strong>
        </div>
        <ul className="combo-items">
          {combo.items.map((item) => (
            <li key={`${item.name}-${item.quantity}`}><Check /> <span>{item.name} <b>- {item.quantity}</b></span></li>
          ))}
        </ul>
        <button className={`combo-add-button${added ? " combo-add-button-added" : ""}`} type="button" onClick={handleAdd}>
          {added ? <><Check /> Added to Cart</> : <><ShoppingBag /> Add to Cart</>}
        </button>
      </div>
    </article>
  );
}
