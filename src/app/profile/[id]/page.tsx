"use client";

interface ParamProps {
  id: string;
}

const Profile = (params: ParamProps) => {
  return <div>Profile {params.id}</div>;
};

export default Profile;
