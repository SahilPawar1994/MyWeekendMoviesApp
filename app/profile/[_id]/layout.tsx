"use client";
import React, { useMemo, type PropsWithChildren } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/app/api/profileApi";
import { useParams } from "next/navigation";

interface PARAMS {
  _id: string;
}

interface ProfileInterface {
  contact: string;
  email: string;
  firstName: string;
  lastName: string;
  id: number;
}

interface ProfileData {
  profile: ProfileInterface;
}

export const ProfileContext = React.createContext<ProfileInterface | null>(
  null
);
const Profile = (props: PropsWithChildren) => {
  const { _id } = useParams<PARAMS>();

  let initials: string = "";
  let fullName: string = "";

  const { data } = useQuery({
    queryKey: ["profile", _id],
    queryFn: () => getProfile(_id),
  });

  initials = useMemo(() => {
    const { firstName = "", lastName = "" } = data?.profile || {};
    return `${firstName[0]?.toUpperCase()}${lastName[0]?.toUpperCase()}`;
  }, [data?.profile]);

  fullName = useMemo(() => {
    const { firstName = "", lastName = "" } = data?.profile || {};

    return `${firstName} ${lastName}`;
  }, [data?.profile]);

  return (
    <ProfileContext value={data?.profile}>
      <div className="min-h-[calc(100vh-88px)] bg-[#e9e9eb] flex justify-center items-start p-[40px_20px]">
        <div className="w-full max-w-[820px] bg-white/72 backdrop-blur-[12px] rounded-[24px] p-8 shadow-[0_14px_40px_rgba(35,28,72,0.12)] border border-[rgba(110,98,167,0.12)] transition-[transform,box-shadow] duration-250 ease-out">
          <div className="flex items-center gap-5 mb-[30px] pb-6 border-b border-[#504682]/12">
            <div className="shrink-0">
              <div className="w-[76px] h-[76px] rounded-full bg-gradient-to-br from-[#27203e] to-[#8b86a8] text-white flex items-center justify-center text-[24px] font-bold tracking-[1px] shadow-[0_8px_18px_rgba(55,46,96,0.25)]">
                {initials}
              </div>
            </div>

            <div className="flex-1">
              <h1 className="m-0 text-[15px] text-[#6b6b75] font-bold">
                {fullName}
              </h1>
              <p className="mt-2 text-[15px] text-[#6b6b75]">
                Manage your personal information and account settings
              </p>
            </div>
          </div>

          {props.children}
        </div>
      </div>
    </ProfileContext>
  );
};

export default Profile;
