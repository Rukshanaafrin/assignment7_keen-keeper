import { Link } from "react-router";

const FriendsCard = ({ friend }) => {
  const badgeColor = {
    overdue: "bg-red-500 text-white",
    "almost due": "bg-orange-400 text-white",
    "on-track": "bg-sky-700 text-white",
  };

  return (
    <Link to={`/friend/${friend.id}`}>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md duration-300 p-6 text-center cursor-pointer">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-20 h-20 rounded-full mx-auto object-cover"
        />

        <h2 className="text-2xl font-bold mt-4">{friend.name}</h2>

        <p className="text-gray-400 text-sm mt-2">
          {friend.days_since_contact}d ago
        </p>

        <div className="flex justify-center gap-2 mt-3 flex-wrap">
          {friend.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-3">
          <span
            className={`px-4 py-1 rounded-full text-xs font-semibold ${badgeColor[friend.status]}`}
          >
            {friend.status}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FriendsCard;