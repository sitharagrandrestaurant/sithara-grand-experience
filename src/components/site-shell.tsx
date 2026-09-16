import { Link, NavLink } from "react-router-dom";
import { Menu, Phone, X, MessageCircle, Mail, MapPin, Clock, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { BrandMark } from "./brand-mark";
import { Button } from "./button";
import { OpenStatus } from "./open-status";
import { whatsappFor } from "@/data/menu";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/cart-context";
import { CartDrawer } from "@/components/cart-drawer";

const navLinks = (
  <>
    <NavLink to="/" end className={({ isActive }) => cn("nav-link", isActive && "nav-link-active")}>
      Home
    </NavLink>
    <NavLink to="/menu" className={({ isActive }) => cn("nav-link", isActive && "nav-link-active")}>
      Menu
    </NavLink>
    <a href="/#combos" className="nav-link">Combos</a>
    <NavLink
      to="/about"
      className={({ isActive }) => cn("nav-link", isActive && "nav-link-active")}
    >
      About
    </NavLink>
    <NavLink
      to="/contact"
      className={({ isActive }) => cn("nav-link", isActive && "nav-link-active")}
    >
      Contact
    </NavLink>
  </>
);

export function Header() {
  const [open, setOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  return (
    <header className="site-header">
      <div className="site-container flex h-20 items-center justify-between">
        <Link to="/" aria-label="Sithara Grand home">
          <BrandMark />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks}
        </nav>
        <div className="header-actions">
          <button className="cart-trigger" type="button" onClick={openCart} aria-label={`Open cart with ${totalItems} item${totalItems === 1 ? "" : "s"}`}>
            <ShoppingBag />
            <span>Cart ({totalItems})</span>
          </button>
          <div className="hidden md:block">
            <Button asChild size="sm">
              <a href="tel:+919121577737">
                <Phone className="size-4" />
                Call now
              </a>
            </Button>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          <Link to="/" onClick={() => setOpen(false)} className="mobile-nav-link">
            Home
          </Link>
          <Link to="/menu" onClick={() => setOpen(false)} className="mobile-nav-link">
            Menu
          </Link>
          <a href="/#combos" onClick={() => setOpen(false)} className="mobile-nav-link">
            Combos
          </a>
          <Link to="/about" onClick={() => setOpen(false)} className="mobile-nav-link">
            About
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="mobile-nav-link">
            Contact
          </Link>
          <Button asChild>
            <a href="tel:+919121577737">
              <Phone className="size-4" />
              Call now
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-brand-deep">
      <div className="site-container grid gap-12 py-16 md:grid-cols-[1.2fr_.7fr_1fr_1fr]">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">
            Premium Multi Cuisine Family Restaurant in Piduguralla.
          </p>
        </div>
        <div>
          <h2 className="footer-title">Navigate</h2>
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/menu" className="footer-link">
            Menu
          </Link>
          <Link to="/about" className="footer-link">
            About
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </div>
        <div>
          <h2 className="footer-title">Contact</h2>
          <a className="footer-link" href="tel:+919121577737">
            <Phone />
            +91 91215 77737
          </a>
          <a className="footer-link break-all" href="mailto:sitaragrandpdrl@gmail.com">
            <Mail />
            sitaragrandpdrl@gmail.com
          </a>
          <p className="footer-link">
            <MapPin />
            Near By Pass Junction, Piduguralla - 522413
          </p>
        </div>
        <div>
          <h2 className="footer-title">Hours</h2>
          <p className="footer-link">
            <Clock />
            Monday–Sunday
            <br />
            12:00 PM – 11:30 PM
          </p>
          <OpenStatus />
        </div>
      </div>
      <div className="border-t border-border">
        <div className="site-container py-6 text-xs text-muted-foreground">
          © 2026 Sithara Grand Family Restaurant. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappFor()}
      target="_blank"
      rel="noreferrer"
      aria-label="Enquire on WhatsApp"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <CartDrawer />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
