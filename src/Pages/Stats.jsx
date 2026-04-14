import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Stats = () => {
  const timeline = JSON.parse(localStorage.getItem("timeline")) || [];

  const callCount = timeline.filter((item) => item.type === "Call").length;
  const textCount = timeline.filter((item) => item.type === "Text").length;
  const videoCount = timeline.filter((item) => item.type === "Video").length;

  const data = [
    { name: "Call", value: callCount },
    { name: "Text", value: textCount },
    { name: "Video", value: videoCount },
  ];

  const COLORS = ["#244D3F", "#6474FF", "#2CB67D"];

  return (
    <div className="w-full min-h-screen bg-slate-50 px-10 py-10">
      <h1 className="text-5xl font-bold mb-8">Friendship Analytics</h1>

      <div className="bg-white rounded-2xl shadow p-6 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-6">By Interaction Type</h2>

        <div className="flex justify-center">
          <PieChart width={500} height={350}>
            <Pie
              data={data}
              innerRadius={80}
              outerRadius={120}
              dataKey="value"
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Stats;