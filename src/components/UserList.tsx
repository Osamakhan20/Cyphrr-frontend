import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, fetchUserById } from "../features/auth/authSlice";
import type { AppDispatch, RootState } from "../app/store";

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, singleUser, loading, error } = useSelector(
    (state: RootState) => state.auth
  );
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handleUserClick = (userId: number) => {
    setSelectedUserId(userId);
    dispatch(fetchUserById(userId));
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-semibold text-gray-600">...Loading</h1>
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-semibold text-red-600">{error}: Error</h1>
      </div>
    );

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">User List</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {users && users.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {users.map((user) => (
                    <button
                      key={user.id}
                      onClick={() => handleUserClick(user.id)}
                      className={`w-full text-left p-4 hover:bg-indigo-50 transition-colors duration-200 cursor-pointer border-l-4 ${
                        selectedUserId === user.id
                          ? "border-indigo-600 bg-indigo-50"
                          : "border-transparent"
                      }`}
                    >
                      <p className="text-lg font-semibold text-gray-800">
                        {user.name.firstname} {user.name.lastname}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">{user.email}</p>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-gray-500">No users found</p>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            {singleUser ? (
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  User Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase">
                      Name
                    </p>
                    <p className="text-lg font-semibold text-gray-800">
                      {singleUser.name.firstname} {singleUser.name.lastname}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase">
                      Email
                    </p>
                    <p className="text-lg text-gray-700 break-all">
                      {singleUser.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase">
                      Username
                    </p>
                    <p className="text-lg text-gray-700">
                      {singleUser.username}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-medium text-gray-500 uppercase mb-2">
                      ID
                    </p>
                    <p className="text-indigo-600 font-mono font-bold">
                      {singleUser.id}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8 text-center">
                <p className="text-gray-500">Select a user to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
