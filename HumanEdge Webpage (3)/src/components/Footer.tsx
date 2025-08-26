import { Button } from "./ui/button";
import logoImage from 'figma:asset/7a2f69ff05bfcb3dddecd9c253ecb4a17a02fd39.png';

export function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top CTA Section */}


        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-200 pt-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="mb-4">
              <img 
                src={logoImage} 
                alt="Infocepts Data & AI" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Transforming businesses with AI and data-driven solutions for over 15 years.
            </p>
          </div>

          {/* What We Do */}
          <div>
            <h4 className="font-semibold text-primary mb-4" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              What We Do
            </h4>
            <ul className="space-y-2 text-sm text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              <li><a href="#" className="hover:text-primary">AI Consulting</a></li>
              <li><a href="#" className="hover:text-primary">Data Analytics</a></li>
              <li><a href="#" className="hover:text-primary">Machine Learning</a></li>
              <li><a href="#" className="hover:text-primary">Digital Transformation</a></li>
            </ul>
          </div>

          {/* Who We Are */}
          <div>
            <h4 className="font-semibold text-primary mb-4" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              Who We Are
            </h4>
            <ul className="space-y-2 text-sm text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Our Team</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
              <li><a href="#" className="hover:text-primary">News & Insights</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary mb-4" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              Contact
            </h4>
            <div className="space-y-2 text-sm text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              <p>1234 Business Ave</p>
              <p>Suite 100</p>
              <p>City, State 12345</p>
              <p className="mt-4">
                <a href="mailto:contact@infocepts.com" className="hover:text-primary">
                  contact@infocepts.com
                </a>
              </p>
              <p>
                <a href="tel:+1234567890" className="hover:text-primary">
                  (123) 456-7890
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          <p>&copy; 2024 Infocepts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}