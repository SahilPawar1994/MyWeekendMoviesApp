"use client";
import { axiosRequest } from "@/axios";
import { redirect } from "next/navigation";
import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
} from "react";
import { ProfileContext } from "./layout";
import { useMutation } from "@tanstack/react-query";
import { updateProfile } from '@/app/api/profileApi';


interface profileInfoProps {
  params: {
    _id: string;
  };
}

interface ProfileInterface {
  contact: string;
  email: string;
  firstName: string;
  lastName: string;
  id: number;
}

const initialProfile = {
  contact: "",
  email: "",
  firstName: "",
  lastName: "",
  id: 0,
};
const ProfileInfo = (props: profileInfoProps) => {
  const profileContext = useContext(ProfileContext);

  const [profile, setProfile] = useState<ProfileInterface | any>(
    initialProfile
  );
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const mutation = useMutation({
    mutationKey: ["updateProfile", profile?.id],
    retry: true,
    mutationFn: () => updateProfile(profile?.id, profile),
    onSuccess: () => setIsEditing((prev) => !prev),
    onError: (error) => {
        console.log(error);
    }
  });

  useEffect(() => {
    setProfile(profileContext || initialProfile);
  }, [profileContext]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const {value, name} = e.target;

      setProfile((prev: ProfileInterface) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    },
    [profile]
  );

  const onClickEdit = useCallback(() => {
    setIsEditing((prev) => !prev);
  }, [isEditing]);

  const onClickSave = useCallback(() => {
    if(!isEditing) {
        setIsEditing(true);
        return;
    }

    if(profile?.firstName == "" || profile?.lastName == "" || profile?.email == "" || profile?.contact =="") {
        return;
    }

    console.log("mutation => ", mutation)
    mutation.mutate(profile?.id, profile)
  }, [profile]);

  return (
    <>
      <div className="grid grid-cols-1 gap-[22px]">
        <div className="flex flex-col gap-[8px]">
          <label className="text-[15px] font-bold text-[#3b3750]">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            className="h-[52px] w-full rounded-[14px] border border-[rgba(100,92,140,0.18)] bg-white px-4 text-[15px] text-[#222] outline-none transition-all duration-200 ease-in-out focus:border-[#6f67a8] focus:shadow-[0_0_0_4px_rgba(111,103,168,0.12)] disabled:cursor-not-allowed disabled:bg-[#f6f6f8] disabled:text-[#555]"
            value={profile?.firstName ?? ""}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className="flex flex-col gap-[8px]">
          <label className="text-[15px] font-bold text-[#3b3750]">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            className="h-[52px] w-full rounded-[14px] border border-[rgba(100,92,140,0.18)] bg-white px-4 text-[15px] text-[#222] outline-none transition-all duration-200 ease-in-out focus:border-[#6f67a8] focus:shadow-[0_0_0_4px_rgba(111,103,168,0.12)] disabled:cursor-not-allowed disabled:bg-[#f6f6f8] disabled:text-[#555]"
            value={profile?.lastName ?? ""}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className="flex flex-col gap-[8px]">
          <label className="text-[15px] font-bold text-[#3b3750]">
            Contact Number
          </label>
          <input
            type="text"
            name="contact"
            className="h-[52px] w-full rounded-[14px] border border-[rgba(100,92,140,0.18)] bg-white px-4 text-[15px] text-[#222] outline-none transition-all duration-200 ease-in-out focus:border-[#6f67a8] focus:shadow-[0_0_0_4px_rgba(111,103,168,0.12)] disabled:cursor-not-allowed disabled:bg-[#f6f6f8] disabled:text-[#555]"
            value={profile?.contact ?? ""}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className="flex flex-col gap-[8px]">
          <label className="text-[15px] font-bold text-[#3b3750]">Email</label>
          <input
            type="email"
            name="email"
            className="h-[52px] w-full rounded-[14px] border border-[rgba(100,92,140,0.18)] bg-white px-4 text-[15px] text-[#222] outline-none transition-all duration-200 ease-in-out focus:border-[#6f67a8] focus:shadow-[0_0_0_4px_rgba(111,103,168,0.12)] disabled:cursor-not-allowed disabled:bg-[#f6f6f8] disabled:text-[#555]"
            value={profile?.email ?? ""}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div />
        <div className="flex gap-[12px]">
          <button className="border-none rounded-[14px] px-[22px] py-[13px] text-[14px] font-semibold cursor-pointer transition-all duration-[220ms] ease-in-out bg-gradient-to-r from-[#26213b] to-[#7f7aa2] text-white shadow-[0_10px_22px_rgba(71,62,119,0.22)]">
            Change Password
          </button>
          {isEditing && (
            <button
              onClick={onClickEdit}
              className="border-none rounded-[14px] px-[22px] py-[13px] text-[14px] font-semibold cursor-pointer transition-all duration-[220ms] ease-in-out bg-[#ececf2] text=[#444]"
            >
              Cancel
            </button>
          )}

          <button
            onClick={onClickSave}
            className="border-none rounded-[14px] px-[22px] py-[13px] text-[14px] font-semibold cursor-pointer transition-all duration-[220ms] ease-in-out bg-gradient-to-r from-[#26213b] to-[#7f7aa2] text-white shadow-[0_10px_22px_rgba(71,62,119,0.22)]"
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
