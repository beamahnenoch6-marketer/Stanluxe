import logo from "@/assets/logo.png";



const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div>
                <div className="relative ">
                  <img src={logo} alt="StanLuxeProperty" className="h-10 md:h-14 w-auto rounded-full" />
                </div>
              <br />
            <p className="text-white/50 text-xs">
              © {new Date().getFullYear()} StanLuxeProperty, Inc.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Apartments", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-white/70 hover:text-gold text-sm transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-gold text-sm font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {["Short-stays", "Long-stays", "Policies", "FAQs"].map((item) => (
                <li key={item}>
                  <span className="text-white/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect with Us */}
          <div>
            <h4 className="text-gold text-sm font-semibold mb-4">Connect with Us</h4>
            <ul className="space-y-2">
              {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-gold text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-xs text-center md:text-left">
              Official Partner of Douglas Luxury Apartments • Serving East Legon, Shiashie, Adenta & surrounding areas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
