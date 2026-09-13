import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/button";
import { OpenStatus } from "@/components/open-status";
import { whatsappFor } from "@/data/menu";

const maps =
  "https://www.google.com/maps/search/?api=1&query=Sithara%20Grand%20Family%20Restaurant%2C%20Near%20By%20Pass%20Junction%2C%20Piduguralla%20-%20522413";

export function Contact() {
  return (
    <>
      <section className="page-hero contact-hero">
        <div className="site-container">
          <span className="eyebrow">Visit Sithara Grand</span>
          <h1>
            YOUR TABLE IS
            <br />
            <em>WAITING.</em>
          </h1>
          <p>Call, message or find your way to us near By Pass Junction.</p>
        </div>
      </section>
      <section className="contact-section">
        <div className="site-container contact-grid">
          <div>
            <span className="eyebrow">Get in touch</span>
            <h2>
              COME DINE
              <br />
              <em>WITH US</em>
            </h2>
            <p className="body-copy">
              We are open every day for lunch, dinner and everything in between.
            </p>
            <OpenStatus />
          </div>
          <div className="contact-cards">
            <a href="tel:+919121577737">
              <Phone />
              <span>
                <small>Call us</small>+91 91215 77737
              </span>
            </a>
            <a href={whatsappFor()} target="_blank" rel="noreferrer">
              <MessageCircle />
              <span>
                <small>WhatsApp</small>Message Sithara Grand
              </span>
            </a>
            <a href="mailto:sitaragrandpdrl@gmail.com">
              <Mail />
              <span>
                <small>Email</small>sitaragrandpdrl@gmail.com
              </span>
            </a>
            <a href={maps} target="_blank" rel="noreferrer">
              <MapPin />
              <span>
                <small>Directions</small>Near By Pass Junction, Piduguralla - 522413
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="location-panel">
        <div className="site-container location-grid">
          <div>
            <MapPin />
            <h2>SITHARA GRAND FAMILY RESTAURANT</h2>
            <p>
              Near By Pass Junction
              <br />
              Piduguralla - 522413
            </p>
            <Button asChild>
              <a href={maps} target="_blank" rel="noreferrer">
                Open directions
              </a>
            </Button>
          </div>
          <div>
            <Clock />
            <h2>OPEN EVERY DAY</h2>
            <p>
              Monday – Sunday
              <br />
              <strong>12:00 PM – 11:30 PM</strong>
            </p>
            <OpenStatus />
          </div>
        </div>
      </section>
    </>
  );
}
