import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Stats = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const storedTimeline =
      JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(storedTimeline);
  }, []);

  const callCount = timeline.filter((item) => item.type === "Call").length;
  const textCount = timeline.filter((item) => item.type === "Text").length;
  const videoCount = timeline.filter((item) => item.type === "Video").length;

  const chartData = [
    { name: "Text", value: textCount },
    { name: "Call", value: callCount },
    { name: "Video", value: videoCount },
  ];

  const COLORS = ["#2563eb", "#111827", "#10b981"];

  return (
    <div className="w-full bg-slate-100 px-10 py-10">
      <h1 className="text-4xl font-bold mb-8">Friendship Analytics</h1>

      {timeline.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-10 text-center text-gray-400 text-lg">
          No interactions logged yet.
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm p-8 max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold mb-6">
            By Interaction Type
          </h2>

          <div className="w-full h-90">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  innerRadius={90}
                  outerRadius={130}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* legend */}
          <div className="flex justify-center gap-8 mt-4">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-blue-600"></span>
              <p>Text</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-gray-900"></span>
              <p>Call</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-emerald-500"></span>
              <p>Video</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stats;