import { useParams } from "react-router-dom";
import friendsData from "../Data/Friends.json";
import {
  Phone,
  MessageSquare,
  Video,
  Archive,
  Trash2,
  Clock3,
} from "lucide-react";
import { toast } from "react-toastify";

const FriendDetails = () => {
  const { id } = useParams();
  const friend = friendsData.find((f) => f.id === parseInt(id));

  const handleCheckIn = (type) => {
    const oldTimeline = JSON.parse(localStorage.getItem("timeline")) || [];

    const newEntry = {
      id: Date.now(),
      type,
      title: `${type} with ${friend.name}`,
      date: new Date().toLocaleDateString(),
    };

    localStorage.setItem(
      "timeline",
      JSON.stringify([newEntry, ...oldTimeline])
    );

    toast.success(`${type} with ${friend.name} added`);
  };

  return (
    <div className="w-full bg-slate-100 px-8 py-8">
      <div className="max-w-6xl mx-auto scale-[0.95] origin-top">
        <div className="grid md:grid-cols-4 gap-6">
          
          {/* LEFT SIDE */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />

              <h2 className="text-3xl font-bold">{friend.name}</h2>

              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                {friend.status}
              </span>

              <div className="mt-3">
                {friend.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-gray-500">{friend.bio}</p>
              <p className="text-gray-400">{friend.email}</p>
            </div>

            <button className="w-full bg-white p-4 rounded-xl flex items-center gap-2 shadow">
              <Clock3 size={18} /> Snooze 2 Weeks
            </button>

            <button className="w-full bg-white p-4 rounded-xl flex items-center gap-2 shadow">
              <Archive size={18} /> Archive
            </button>

            <button className="w-full bg-white p-4 rounded-xl flex items-center gap-2 shadow text-red-500">
              <Trash2 size={18} /> Delete
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-3 space-y-6">
            
            {/* TOP STATS */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <h2 className="text-4xl font-bold">
                  {friend.days_since_contact}
                </h2>
                <p>Days Since Contact</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow text-center">
                <h2 className="text-4xl font-bold">{friend.goal}</h2>
                <p>Goal (Days)</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow text-center">
                <h2 className="text-4xl font-bold">
                  {friend.next_due_date}
                </h2>
                <p>Next Due</p>
              </div>
            </div>

            {/* RELATIONSHIP GOAL */}
            <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center">
              <div>
                <h2 className="text-4xl font-bold">Relationship Goal</h2>
                <p className="text-xl">
                  Connect every {friend.goal} days
                </p>
              </div>
              <button className="btn">Edit</button>
            </div>

            {/* QUICK CHECK IN */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-4xl font-bold mb-6">Quick Check-In</h2>

              <div className="grid md:grid-cols-3 gap-4">
                <button
                  onClick={() => handleCheckIn("Call")}
                  className="border rounded-xl p-8 flex flex-col items-center gap-2 hover:bg-gray-100"
                >
                  <Phone size={28} />
                  Call
                </button>

                <button
                  onClick={() => handleCheckIn("Text")}
                  className="border rounded-xl p-8 flex flex-col items-center gap-2 hover:bg-gray-100"
                >
                  <MessageSquare size={28} />
                  Text
                </button>

                <button
                  onClick={() => handleCheckIn("Video")}
                  className="border rounded-xl p-8 flex flex-col items-center gap-2 hover:bg-gray-100"
                >
                  <Video size={28} />
                  Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;