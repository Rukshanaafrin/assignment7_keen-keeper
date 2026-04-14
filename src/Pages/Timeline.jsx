import { useEffect, useState } from "react";
import { Phone, MessageSquare, Video, Trash2 } from "lucide-react";

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTimeline =
      JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(storedTimeline.reverse());
  }, []);

  const filteredTimeline =
    filter === "all"
      ? timeline
      : timeline.filter(
          (item) => item.type.toLowerCase() === filter.toLowerCase()
        );

  const getIcon = (type) => {
    if (type === "Call") return <Phone size={20} />;
    if (type === "Text") return <MessageSquare size={20} />;
    return <Video size={20} />;
  };

  const handleClearHistory = () => {
    localStorage.removeItem("timeline");
    setTimeline([]);
  };

  return (
    <div className="w-full px-10 py-10 bg-slate-50">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-5xl font-bold">Timeline</h1>

        <button
          onClick={handleClearHistory}
          className="bg-blue-500 hover:bg-pink-500 text-white px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <Trash2 size={18} />
          Clear History
        </button>
      </div>

      {/* Filter */}
      <select
        className="border-2 border-gray-300 rounded-lg px-4 py-3 mb-8 w-80"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">Filter timeline</option>
        <option value="Call">Call</option>
        <option value="Text">Text</option>
        <option value="Video">Video</option>
      </select>

      {/* Timeline Data */}
      {filteredTimeline.length === 0 ? (
        <div className="text-center mt-20 text-gray-500 text-xl">
          No data found!
        </div>
      ) : (
        <div className="space-y-4">
          {filteredTimeline.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-xl p-4 flex items-center gap-4 shadow-sm"
            >
              <div>{getIcon(item.type)}</div>

              <div>
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;