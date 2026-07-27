import { axiosRequest } from '@/axios';
import { redirect } from 'next/navigation';
import React from 'react'

interface profileInfoProps {
    params: {
        _id: string
    }
}
const ProfileInfo = async (props: profileInfoProps) => {
    try {
        const { _id } = props.params;

        const response = await axiosRequest({
            url: `/profile/${_id}`, method: 'get'
        })

        const { data } = response;

        console.log("profile infor response => ", response)
        return (
            <>
                <div className="grid grid-cols-1 gap-[22px]">
                    <div className="flex flex-col gap-[8px]">
                        <label className='text-[15px] font-bold text-[#3b3750]'>First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            className='h-[52px] w-full rounded-[14px] border border-[rgba(100,92,140,0.18)] bg-white px-4 text-[15px] text-[#222] outline-none transition-all duration-200 ease-in-out focus:border-[#6f67a8] focus:shadow-[0_0_0_4px_rgba(111,103,168,0.12)] disabled:cursor-not-allowed disabled:bg-[#f6f6f8] disabled:text-[#555]'
                        //   value={isEditing ? formData.name : profile.name}
                        //   onChange={handleChange}
                        //   disabled={!isEditing}
                        />
                    </div>

                    <div className="flex flex-col gap-[8px]">
                        <label className='text-[15px] font-bold text-[#3b3750]'>Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            className='h-[52px] w-full rounded-[14px] border border-[rgba(100,92,140,0.18)] bg-white px-4 text-[15px] text-[#222] outline-none transition-all duration-200 ease-in-out focus:border-[#6f67a8] focus:shadow-[0_0_0_4px_rgba(111,103,168,0.12)] disabled:cursor-not-allowed disabled:bg-[#f6f6f8] disabled:text-[#555]'
                        //   value={isEditing ? formData.name : profile.name}
                        //   onChange={handleChange}
                        //   disabled={!isEditing}
                        />
                    </div>

                    <div className="flex flex-col gap-[8px]">
                        <label className='text-[15px] font-bold text-[#3b3750]'>Contact Number</label>
                        <input
                            type="text"
                            name="contact"
                            className='h-[52px] w-full rounded-[14px] border border-[rgba(100,92,140,0.18)] bg-white px-4 text-[15px] text-[#222] outline-none transition-all duration-200 ease-in-out focus:border-[#6f67a8] focus:shadow-[0_0_0_4px_rgba(111,103,168,0.12)] disabled:cursor-not-allowed disabled:bg-[#f6f6f8] disabled:text-[#555]'
                        //   value={isEditing ? formData.contact : profile.contact}
                        //   onChange={handleChange}
                        //   disabled={!isEditing}
                        />
                    </div>

                    <div className="flex flex-col gap-[8px]">
                        <label className='text-[15px] font-bold text-[#3b3750]'>Email</label>
                        <input
                            type="email"
                            name="email"
                            className='h-[52px] w-full rounded-[14px] border border-[rgba(100,92,140,0.18)] bg-white px-4 text-[15px] text-[#222] outline-none transition-all duration-200 ease-in-out focus:border-[#6f67a8] focus:shadow-[0_0_0_4px_rgba(111,103,168,0.12)] disabled:cursor-not-allowed disabled:bg-[#f6f6f8] disabled:text-[#555]'
                        //   value={isEditing ? formData.email : profile.email}
                        //   onChange={handleChange}
                        //   disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                    <div />
                    <div className="flex gap-[12px]">
                        <button className="border-none rounded-[14px] px-[22px] py-[13px] text-[14px] font-semibold cursor-pointer transition-all duration-[220ms] ease-in-out bg-gradient-to-r from-[#26213b] to-[#7f7aa2] text-white shadow-[0_10px_22px_rgba(71,62,119,0.22)]">Change Password</button>
                        {true && (
                            <button className="border-none rounded-[14px] px-[22px] py-[13px] text-[14px] font-semibold cursor-pointer transition-all duration-[220ms] ease-in-out bg-[#ececf2] text=[#444]">
                                Cancel
                            </button>
                        )}

                        <button className="border-none rounded-[14px] px-[22px] py-[13px] text-[14px] font-semibold cursor-pointer transition-all duration-[220ms] ease-in-out bg-gradient-to-r from-[#26213b] to-[#7f7aa2] text-white shadow-[0_10px_22px_rgba(71,62,119,0.22)]">
                            {true ? "Save Changes" : "Edit Profile"}
                        </button>
                    </div>
                </div>
            </>
        )

    } catch (e) {
        console.log("server component profile error => ", e)
        redirect('/login')
        return 
    }
}

export default ProfileInfo;