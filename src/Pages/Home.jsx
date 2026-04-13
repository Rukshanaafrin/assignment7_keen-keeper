import Banner from "../Component/Banner";
import friendsData from "../Data/Friends.json";
import FriendsCard from "../Component/FriendsCard";

const Home = () => {
  return (
    <div className="bg-slate-100">
      <Banner />

      <div className="max-w-7xl mx-auto px-6 bg-slate-100">
        <div className="w-[95%] mx-auto">
          
          {/* straight line */}
          <div className="border-t border-sky-200"></div>

          <h2 className="text-3xl font-bold pt-10 mb-8">
            Your Friends
          </h2>

          {/* friends cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-20">
            {friendsData.map((friend) => (
              <FriendsCard key={friend.id} friend={friend} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;