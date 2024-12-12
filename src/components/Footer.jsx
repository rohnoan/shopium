import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-violet-500 mt-[100px] text-white py-6">
      <div className="container mx-auto px-4 max-w-full">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-sm sm:text-base">
              Shopium is committed to providing the best services to our customers. Our mission is to deliver quality and satisfaction for all of you guys.
            </p>
          </div>
          {/* Links Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#home" className="hover:underline">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:underline">Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">Contact</a>
              </li>
              <li>
                <a href="#about" className="hover:underline">About</a>
              </li>
            </ul>
          </div>
          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <ul className="text-sm sm:text-base space-y-2">
              <li>Email: support@example.com</li>
              <li>Phone: +123-456-7890</li>
              <li>Address: 123 Main Street, City</li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="text-center mt-8 text-sm sm:text-base border-t border-white/50 pt-4">
          &copy; 2024 SHOPIUM. All rights reserved.
        </div>
        <div className="text-center mt-4 text-sm sm:text-base border-t border-white/50 pt-4">
          with love &lt;3
        </div>
      </div>
    </footer>
  );
}