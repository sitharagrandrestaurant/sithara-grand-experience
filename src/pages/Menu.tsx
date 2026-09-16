import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { menuCategories, menuItems, type Dietary } from "@/data/menu";
import { MiniMenuCard } from "@/components/mini-menu-card";

export function MenuPage() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(
    categoryParam && menuCategories.includes(categoryParam) ? categoryParam : "ALL",
  );
  const [diet, setDiet] = useState<"all" | Dietary>("all");

  useEffect(() => {
    if (categoryParam && menuCategories.includes(categoryParam)) {
      setCategory(categoryParam);
    }
  }, [categoryParam]);

  const filtered = useMemo(
    () =>
      menuItems.filter(
        (i) =>
          (category === "ALL" || i.category === category) &&
          (diet === "all" || i.dietary === diet) &&
          i.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [query, category, diet],
  );

  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <span className="eyebrow">Official menu</span>
          <h1>
            EVERY FLAVOUR.
            <br />
            <em>EXACTLY AS SERVED.</em>
          </h1>
          <p>
            {menuItems.length} items across {menuCategories.length} categories, with prices from the
            official Sithara Grand menu.
          </p>
        </div>
      </section>
      <section className="menu-section">
        <div className="site-container">
          <div className="menu-toolbar">
            <label className="search-box">
              <Search />
              <span className="sr-only">Search menu</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dishes…"
              />
            </label>
          </div>
          <div className="category-tabs" aria-label="Menu categories">
            <button
              className={category === "ALL" ? "category-active" : ""}
              onClick={() => setCategory("ALL")}
            >
              ALL
            </button>
            {menuCategories.map((c) => (
              <button
                key={c}
                className={category === c ? "category-active" : ""}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="result-count">
            Showing {filtered.length} item{filtered.length === 1 ? "" : "s"}
          </p>
          {filtered.length ? (
            <div className="menu-grid">
              {filtered.map((i) => (
                <MiniMenuCard key={i.id} item={i} />
              ))}
            </div>
          ) : (
            <div className="empty-menu">
              <h2>No dishes found</h2>
              <p>Try another search or category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
