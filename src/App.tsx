import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SiteShell } from "@/components/site-shell";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Home } from "@/pages/Home";
import { MenuPage } from "@/pages/Menu";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { NotFound } from "@/pages/NotFound";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <SiteShell>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SiteShell>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
