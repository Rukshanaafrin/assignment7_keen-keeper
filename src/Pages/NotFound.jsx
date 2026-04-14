import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white">
      <h1 className="text-8xl font-bold text-slate-900">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>

      <p className="text-gray-500 mt-3 max-w-md">
        Looks like this friendship link is broken. The page you’re looking
        for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 bg-sky-700 text-white px-6 py-3 rounded-lg"
      >
        <Home size={18} />
        Back to Home
      </Link>

      <p className="mt-10 text-pink-500 text-2xl">
        mst.rukshanaafrin@gmail.com
      </p>
    </div>
  );
};

export default NotFound;