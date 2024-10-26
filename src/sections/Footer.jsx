const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-7 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <a
        href="https://github.com/nischay-singh"
        target="_blank"
        rel="noreferror"
      >
        <div className="flex justify-center items-center gap-2">
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
          <p className="text-white hover:underline font-semibold">Github</p>
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/nischay-singh/"
        target="_blank"
        rel="noreferror"
      >
        <div className="flex justify-center items-center gap-2">
          <div className="social-icon">
            <img
              src="/assets/linkedin.svg"
              alt="linkein"
              className="w-1/2 h-1/2"
            />
          </div>
          <p className="text-white hover:underline font-semibold">LinkedIn</p>
        </div>
      </a>

      <p className="text-white">© {new Date().getFullYear()} Nischay Singh. </p>
    </footer>
  );
};

export default Footer;
