import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import Navbar from "../components/layout/Navbar";

const Home = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div>
      <Navbar />

      <div className="p-10">
        <h2 className="text-2xl font-bold mb-4">
          Dashboard
        </h2>

        {user ? (
          <div className="bg-white shadow-md p-6 rounded-lg">
            <p className="text-lg">
              Welcome back, <span className="font-semibold">{user.name}</span>
            </p>

            <p className="text-gray-600 mt-2">
              Email: {user.email}
            </p>

            <p className="mt-4 text-gray-700">
              This is your Support AI dashboard where you can manage support tickets and analytics.
            </p>
          </div>
        ) : (
          <p>Please login to access dashboard</p>
        )}
      </div>
    </div>
  );
};

export default Home;