import Image from "next/image";
import LogoImage from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import { link } from "fs";
const navLinks = [
  { label: "الرئيسية", href: "#" },
  { label: "المميزات", href: "#features" },
  { label: "التكاملات", href: "#integrations" },
  { label: "الأسئلة الشائعة", href: "#faqs" },
];

export default function Navbar() {
  return (
    <section className="py-4 lg:py-8">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 items-center">
          <div>
            <Image
              src={LogoImage}
              alt="صورة الشعار"
              className="h-9  md:h-auto w-auto mr-2"
            />
          </div>
          <div className="lg:flex justify-center items-center hidden">
            <nav className="flex gap-6 font-medium">
              {navLinks.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex justify-end ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              color="white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" sm:flex lg:hidden feather feather-menu ml-2 hidden mt-3"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <Button variant="primary">أنظم الينا</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
