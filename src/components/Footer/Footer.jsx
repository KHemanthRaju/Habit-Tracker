import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  const getCopyrightText = `© ${new Date().getFullYear()} | All Rights Reserved`;
  return (
    <footer className="footer">
      <div className="footer-text-container">
        <div className="developer-txt">
          <p>
            Deleveloped with
            <a
              className="link"
              target="_blank"
              href="https://khr-portfolio.netlify.app/"
              rel="noopener noreferrer"
            >
              <span className="heart">
                <FaHeart size={12} />
              </span>
            </a>{" "}
            by Hemanth Raju
          </p>
        </div>
        <div className="copyryt-txt">
          <p>{getCopyrightText}</p>
        </div>
      </div>
      <ul>
        <li className="social-media-icons unordered list-inline">
          <a
            className="link"
            target="_blank"
            href="https://github.com/KHemanthRaju"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            className="link"
            target="_blank"
            href="https://www.linkedin.com/in/hemanth-raju-aba388176/"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            className="link"
            target="_blank"
            href="https://twitter.com/codewithash"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
      </ul>
    </footer>
  );
};
