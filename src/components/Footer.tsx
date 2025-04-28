
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const pharmacies = [
  { name: "MediPharma", url: "https://example.com/medipharma" },
  { name: "HealthRx", url: "https://example.com/healthrx" },
  { name: "WellPharm", url: "https://example.com/wellpharm" },
  { name: "VitalMeds", url: "https://example.com/vitalmeds" },
];

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">VitaBloom</h3>
            <p className="text-muted-foreground mb-4">
              Your personal health companion for tracking and improving your wellness journey.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Features", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Pharmacy Partners</h3>
            <p className="text-muted-foreground mb-4">
              Order your prescription medications from our trusted pharmacy partners.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {pharmacies.map((pharmacy) => (
                <Button 
                  key={pharmacy.name} 
                  variant="outline" 
                  asChild 
                  className="justify-start"
                >
                  <a 
                    href={pharmacy.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="truncate"
                  >
                    {pharmacy.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Separator />

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} VitaBloom. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
