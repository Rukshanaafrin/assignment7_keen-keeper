import { FaFacebookF, FaInstagram, FaTimes } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white mt-0">
      <div className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-5xl font-bold">KeenKeeper</h2>

        <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

        <h3 className="mt-8 text-lg font-semibold">Social Links</h3>

        <div className="flex justify-center gap-4 mt-4">
          <button className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center">
            <FaInstagram />
          </button>

          <button className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center">
            <FaFacebookF />
          </button>

          <button className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center">
            <FaTimes />
          </button>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-slate-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 justify-center mt-4 md:mt-0">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;