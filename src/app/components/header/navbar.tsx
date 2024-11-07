import "boxicons/css/boxicons.min.css";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  // SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <main className="main-navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <div>
              <h1 className="navbar-title">Exclusive</h1>
            </div>
            <div>
              <nav>
                <ul className="navbar-links">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/#">Contact</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/#">Sign Up</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="search-container">
            <input
              className="search-input"
              placeholder="What are you looking for?"
              type="text"
            />
            <i className="bx bx-search search-icon"></i>
          </div>

          <div className="icon-container">
            <i className="bx bx-heart text-3xl"></i>
            <i className="bx bx-cart-alt text-3xl"></i>
          </div>
          <Sheet>
            <SheetTrigger className="navMobileMenu">
              {" "}
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <div>
                    <nav>
                      <ul className="navbar-links navMobileMenuLink ">
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/#">Contact</Link>
                        </li>
                        <li>
                          <Link href="/about">About</Link>
                        </li>
                        <li>
                          <Link href="/#">Sign Up</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </SheetTitle>
                {/* <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription> */}
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </main>
      <div className="divider"></div>
    </>
  );
}
