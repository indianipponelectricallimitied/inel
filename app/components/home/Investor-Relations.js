import Button from "../Ui/button";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import StockDataCard from "../Common/stockmarket/StockDataCard";

const quickLinks = [
  {
    title: "Corporate Presentation",
    href: "/investor-relations",
  },
  {
    title: "Annual Report FY24",
    href: "/investor-relations",
  },
  {
    title: "Investor Presentation",
    href: "/investor-relations",
  },
  
];

export default function InvestorRelations() {
  return (
    <section className="diamond-gradient clip-path btmright">
      <div className="container mx-auto px-5 md:px-0 py-20 text-white">
        <div className="flex flex-col md:flex-row  gap-12">
          <div className="w-full md:w-1/3 space-y-6">
            <div>
                <h5>Investor Relations</h5>
                <h1>Creating Value,   Driving Growth</h1>
            </div>
            <p>A legacy of strong financial performance, sustainable growth, and innovation-driven expansion.</p>
            <Button variant="white" href="/contact">Explore Our Innovations</Button>
          </div> 
          <div className="w-full md:w-1/3 space-y-6">
            <StockDataCard />
          </div>
          <div className="w-full md:w-1/3 space-y-6">
            <h5>Quick Links</h5>
            <ul className="space-y-5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="font-thin flex justify-between border-b border-white pb-2">
                    {link.title}
                    <GoArrowUpRight className="text-[20px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
