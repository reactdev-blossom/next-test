"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiConfig } from "@/lib/apiUrlConfig";

const Profile = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          `${apiConfig.baseURL}/api/user/profileDetails`,
          {
            headers: { Authorization: `Bearer tokentokentokenetojkasfdj` },
          }
        );
        setData(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col justify-start items-start p-2 w-full h-auto">
      <h1>My Profile</h1>
      {renderBox("Firstname", data?.firstName)}
      {renderBox("Lastname", data?.lastName)}
    </div>
  );
};

const renderBox = (name: string, value: string) => {
  return (
    <div className="flex flex-row w-full py-2 border border-gray-300 px-10">
      {name} : {value}
    </div>
  );
};

export default Profile;
