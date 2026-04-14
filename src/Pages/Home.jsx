import { useLoaderData, useNavigation } from "react-router-dom";
import FriendsCard from "../Component/FriendsCard";

const Home = () => {
  const friends = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-100">
        <div className="w-10 h-10 border-4 border-teal-700 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-100">
      {/* HERO SECTION */}
      <div className="bg-slate-100 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-slate-900">
            Friends to keep close in your life
          </h1>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            Your personal shelf of meaningful connections. Browse, tend,
            and nurture the relationships that matter most.
          </p>

          <button className="mt-5 bg-teal-800 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-slate-800">
            + Add a Friend
          </button>

          {/* SMALL STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="bg-white rounded-lg shadow-sm py-5">
              <h2 className="text-3xl font-bold">{friends.length}</h2>
              <p className="text-sm text-gray-500">Total Friends</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm py-5">
              <h2 className="text-3xl font-bold">3</h2>
              <p className="text-sm text-gray-500">On Track</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm py-5">
              <h2 className="text-3xl font-bold">6</h2>
              <p className="text-sm text-gray-500">Need Attention</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm py-5">
              <h2 className="text-3xl font-bold">12</h2>
              <p className="text-sm text-gray-500">
                Interactions This Month
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FRIENDS */}
      <div className="max-w-5xl mx-auto px-6 py-10">
         <hr className="mb-10 border-gray-300" />
        <h2 className="text-3xl font-bold mb-8">Your Friends</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <FriendsCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;