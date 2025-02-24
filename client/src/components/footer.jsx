import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 px-4 md:px-12">
      <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Address */}
        <div>
          <img
            src="../../images/iiitn_logo.svg"
            alt="IIIT Nagpur Logo"
            className="w-16 h-16 mb-4"
          />
          <p className="mb-2">
            Survey No. 140,141/1 behind Br. Sheshrao Wankhade Shetkari Sahkari Soot Girni, Village - Waranga, PO - Dongargaon(Butibori), Tahsil- Nagpur (Rural), District Nagpur, Maharashtra- 441108
          </p>
          <p className="mb-1">📞 9405215010</p>
          <p>✉️ registrar@iiitn.ac.in</p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Important Links</h3>
          <ul className="space-y-2">
            {[
              'Grievance',
              'Networking Complaint',
              'Grievance Committee SC/ST Cell',
              'Anti-Ragging Committee',
              'Internal Complaint Committee',
              'Policy for Prevention of Sexual Harassment of Women at Workplace',
              'Equal Opportunity Cell'
            ].map((link) => (
              <li key={link} className="hover:text-blue-400 cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              'Institute Webmail',
              'Online Fees Payment',
              'Academic Calendar',
              'How to Reach',
              'Location',
              'Tender',
              'Recruitment',
              'Guest House',
              'Contact Us'
            ].map((link) => (
              <li key={link} className="hover:text-blue-400 cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>Copyright © 2025 | All Rights Reserved. Indian Institute of Information Technology, Nagpur</p>
      </div>
    </footer>
  );
}
