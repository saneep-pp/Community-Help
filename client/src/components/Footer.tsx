const Footer: React.FC = () => {
  return (
    <footer className=" bg-gradient-to-r from-[#624985] via-[#815EEA] to-[#927fce] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Branding */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Community Help</h3>
            <p className="text-sm text-gray-400">
              Connecting communities for a better tomorrow.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <a href="/about" className="hover:text-[#ead7ff] transition">
              About
            </a>
            <a href="/contact" className="hover:text-[#ead7ff] transition">
              Contact
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ead7ff] transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} CommunityHelp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
