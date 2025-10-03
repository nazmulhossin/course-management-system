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
            <h4>Courses</h4>
            <ul>
              <li><Link href="#">Data Structures</Link></li>
              <li><Link href="#">Algorithms</Link></li>
              <li><Link href="#">Competitive Programming</Link></li>
              <li><Link href="#">Interview Prep</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
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
        </div>
        <div className="mt-8 pt-8 text-center border-t border-[#2d3748] text-[0.95rem]">
          <p>&copy; 2025 <span className="text-primary">CPS Academy</span>. All rights reserved. Building the future of competitive programming education.</p>
        </div>
      </div>
    </footer>
  )
}
