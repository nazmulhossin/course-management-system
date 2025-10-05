import { Facebook, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-footerBg text-footerText">
      <div className="custom-container py-12">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 xl:gap-12">
          <div className="footer-section">
            <h4>CPS Academy</h4>
            <p>Empowering the next generation to excel in competitive programming and build successful careers in tech.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="#">Practice Problems</Link></li>
              <li><Link href="#">Tutorials</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Community</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="flex flex-col gap-1">
              <p><span className="font-semibold">Phone:</span> 01xxxxxxxxx</p>
              <p><span className="font-semibold">whatsapp:</span> 01xxxxxxxxx</p>
              <p><span className="font-semibold">Email:</span> smm@cpsacademy.io</p>
              <div className="flex gap-8 mt-2">
                <Link href="https://www.facebook.com/bd.cpsacademy" target="_blank" className="color: var(--text-secondary); font-size: 1.25rem; transition: color 0.3s;" title="Facebook">
                  <Facebook />
                </Link>
                <Link href="https://www.linkedin.com/company/cps-academy/" target="_blank" className="color: var(--text-secondary); font-size: 1.25rem; transition: color 0.3s;" title="LinkedIn">
                  <Linkedin />
                </Link>
                <Link href="https://www.youtube.com/@CPSAcademy" target="_blank" className="color: var(--text-secondary); font-size: 1.25rem; transition: color 0.3s;" title="YouTube">
                  <Youtube />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center border-t border-[#2d3748] text-[0.95rem]">
          <p>&copy; 2025 <span className="text-primary">CPS Academy</span>. All rights reserved. Building the future of competitive programming education.</p>
        </div>
      </div>
    </footer>
  )
}
