import React from 'react';
import WA from '../assets/img/WhatsApp_icon.png';

const Contact = () => {
  return (
    <div className="halaman">
      <header className="halaman-header">
        <h1 className="mb-4">Contact Whatshaap</h1>
        <div className="container shadow">
          <div className="nama">Moh Hasbi Rizqulloh</div>
          <a href="https://wa.link/875q17">
            <img src={WA} alt="" />
          </a>
          <div className="no-wa">
            <a href="https://wa.link/875q17">+62 857-2737-8226</a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Contact;
