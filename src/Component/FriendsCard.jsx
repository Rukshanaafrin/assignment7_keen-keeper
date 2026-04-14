import { Link } from "react-router-dom";

const FriendsCard = ({ friend }) => {
  const statusColors = {
    "almost due": "bg-orange-500",
    overdue: "bg-red-500",
    "on-track": "bg-blue-700",
  };

  return (
    <Link to={`/friend/${friend.id}`}>
      <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md duration-300 cursor-pointer h-[320px] flex flex-col justify-center">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-20 h-20 rounded-full mx-auto object-cover"
        />

        <h2 className="text-3xl font-bold mt-4">{friend.name}</h2>

        <p className="text-gray-400 mt-2">
          {friend.days_since_contact}d ago
        </p>

        <div className="flex justify-center gap-2 mt-3 flex-wrap">
          {friend.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        <div className="mt-3">
          <span
            className={`${statusColors[friend.status]} text-white px-4 py-1 rounded-full text-sm`}
          >
            {friend.status}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FriendsCard;