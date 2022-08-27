import React from "react";
import "./Footer.css"

export const Footer = () => {
  const linkText = [
    {
      id: 1,
      title: "COUNTRY/REGION: INDIA",
      to: "/",
    },
    {
      id: 2,
      title: "NEWSLETTER SIGNUP",
      to: "/",
    },
    {
      id: 3,
      title: "CUSTOMER CARE",
      to: "/",
    },
    {
      id: 4,
      title: "LOCATION",
      to: "/",
    },
    {
      id: 5,
      title: "EDITORIAL ARCHIVE",
      to: "/",
    },
    {
      id: 6,
      title: "CAREERS",
      to: "/",
    },
    {
      id: 7,
      title: "AFFLIATES",
      to: "/",
    },
    {
      id: 8,
      title: "SITEMAP",
      to: "/",
    },
  ];
  const SocialIcons = [
    {
      id: 1,
      logo: "https://toppng.com/uploads/preview/facebook-logo-svg-png-icon-free-download-facebook-icon-black-11562874203izuix8nneu.png",
      to: "https://www.facebook.com/SSENSEofficial",
    },
    {
      id: 2,
      logo: "https://www.pngfind.com/pngs/m/159-1595562_logo-twitter-nero-vector-twitter-icon-svg-hd.png",
      to: "https://twitter.com/ssense",
    },
    {
      id: 3,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Black_Instagram_icon.svg/1200px-Black_Instagram_icon.svg.png",
      to: "https://instagram.com/ssense",
    },
    {
      id: 4,
      logo: "https://toppng.com/uploads/preview/svg-png-youtube-icon-sv-11563261497ttfopyh7qy.png",
      to: "https://www.youtube.com/user/ssense",
    },
  ];
  const bottemLinks = [
    {
      id: 1,
      title: "@2022ssense.com",
      to: "/",
    },
    {
      id: 2,
      title: "Terms & Conditions",
      to: "/",
    },

    {
      id: 3,
      title: "Privacy Policy",
      to: "/",
    },
    {
      id: 4,
      title: "Cookies",
      to: "/",
    },
    {
      id: 5,
      title: "Accessibility",
      to: "/",
    },
  ];
  return (
    <footer className="footer">
      <div className="footer-conatiner">
        <div className="footer-up">
          <div className="textLinks">
            {linkText.map((link) => (
              <a href={link.to} key={link.id} className="link">
                {link.title}
              </a>
            ))}
          </div>
          <div className="socialIcons">
            {SocialIcons.map((icon) => (
              <a href={icon.to} key={icon.id} className="link">
                <img className="logoicon" src={icon.logo} alt="icon" />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          {bottemLinks.map((link) => (
            <a href={link.to} key={link.id} className="bottemlink">
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer

