import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center text-center px-4 bg-slate-50">
      <div>
        <h1 className="text-8xl font-bold text-slate-900">404</h1>
        <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>

        <p className="text-gray-500 mt-4 max-w-md mx-auto">
          Looks like this friendship link is broken. The page you're looking
          for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 bg-sky-700 text-white px-6 py-3 rounded-lg hover:bg-sky-800"
        >
          <Home size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;