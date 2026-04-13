import { FaPlus } from "react-icons/fa";

const Banner = () => {
  const stats = [
    { number: 10, label: "Total Friends" },
    { number: 3, label: "On Track" },
    { number: 6, label: "Need Attention" },
    { number: 12, label: "Interactions This Month" },
  ];

  return (
    <div className="bg-slate-100 py-16">
      {/* Top Banner */}
      <div className="max-w-6xl mx-auto bg-slate-500 rounded-xl py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Friends to keep close in your life
        </h1>

        <p className="text-slate-200 mt-4 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

        <button className="mt-6 bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-md inline-flex items-center gap-2 font-medium">
          <FaPlus />
          Add a Friend
        </button>
      </div>

      {/* 4 Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 px-2">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl py-8 text-center shadow-sm"
          >
            <h2 className="text-4xl font-bold text-slate-700">
              {item.number}
            </h2>
            <p className="text-gray-500 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;