import { Link } from "react-router-dom";
import { Heart, Sparkles, Users, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/button";
import { SectionHeading } from "@/components/section";
import interiorImage from "@/assets/FAMILY PACK CHICKEN DUM BIRIYANI.jpg";
import signatureImage from "@/assets/SITARA GRAND SPL BIRIYANI.jpg";

const values = [
  {
    Icon: Heart,
    title: "Warm hospitality",
    copy: "A welcoming setting for everyday meals and meaningful occasions.",
  },
  {
    Icon: UtensilsCrossed,
    title: "Generous choice",
    copy: "A broad multi-cuisine menu with something for every table.",
  },
  {
    Icon: Sparkles,
    title: "Memorable flavour",
    copy: "Familiar favourites and signature combinations worth returning for.",
  },
  {
    Icon: Users,
    title: "Family first",
    copy: "Comfortable dining designed for time shared together.",
  },
];

export function About() {
  return (
    <>
      <section className="page-hero about-hero">
        <div className="site-container">
          <span className="eyebrow">Our restaurant</span>
          <h1>
            A GRAND TABLE,
            <br />
            <em>OPEN TO EVERY FAMILY.</em>
          </h1>
          <p>Multi-cuisine flavour and welcoming hospitality in the heart of Piduguralla.</p>
        </div>
      </section>
      <section className="story">
        <div className="site-container story-grid">
          <div className="story-image">
            <img src={interiorImage} alt="Warm dining room with rich wood and bronze details" />
            <span>
              PIDUGURALLA
              <br />
              522413
            </span>
          </div>
          <div>
            <SectionHeading
              eyebrow="The Sithara spirit"
              title={
                <>
                  Gather well.
                  <br />
                  <em>Dine grand.</em>
                </>
              }
              copy="Sithara Grand Family Restaurant is built around the pleasure of sharing a generous meal with the people who matter."
            />
            <p className="body-copy">
              Our extensive menu brings Indian favourites, tandoor dishes, Indo-Chinese starters,
              seafood, biryanis, breads, desserts and refreshing drinks together for relaxed family
              dining.
            </p>
            <Button asChild>
              <Link to="/menu">View complete menu</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="section-warm">
        <div className="site-container">
          <SectionHeading
            eyebrow="What we value"
            title={
              <>
                Every detail, <em>warmly considered.</em>
              </>
            }
            align="center"
          />
          <div className="values-grid">
            {values.map(({ Icon, title, copy }) => (
              <article key={title}>
                <Icon />
                <h2>{title}</h2>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="image-story">
        <img src={signatureImage} alt="A generous table of Sithara dishes" loading="lazy" />
        <div className="site-container">
          <div>
            <span className="eyebrow">Your table awaits</span>
            <h2>
              COME HUNGRY.
              <br />
              <em>LEAVE WITH A MEMORY.</em>
            </h2>
            <Button variant="outline" asChild>
              <Link to="/contact">Plan your visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
