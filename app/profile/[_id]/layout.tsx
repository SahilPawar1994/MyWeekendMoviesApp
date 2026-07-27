import React, { type PropsWithChildren } from 'react';
import { } from 'next/server';
import axiosInstance from '@/axios';

const Profile = (props: PropsWithChildren) => {

    // const response = axiosInstance.get('')
    return (

        <div className="min-h-[calc(100vh-88px)] bg-[#e9e9eb] flex justify-center items-start p-[40px_20px]">
            <div className="w-full max-w-[820px] bg-white/72 backdrop-blur-[12px] rounded-[24px] p-8 shadow-[0_14px_40px_rgba(35,28,72,0.12)] border border-[rgba(110,98,167,0.12)] transition-[transform,box-shadow] duration-250 ease-out">
                <div className="flex items-center gap-5 mb-[30px] pb-6 border-b border-[#504682]/12">
                    <div className="shrink-0">
                        <div className="w-[76px] h-[76px] rounded-full bg-gradient-to-br from-[#27203e] to-[#8b86a8] text-white flex items-center justify-center text-[24px] font-bold tracking-[1px] shadow-[0_8px_18px_rgba(55,46,96,0.25)]">SP</div>
                    </div>

                    <div className="flex-1">
                        <h1 className="m-0 text-[15px] text-[#6b6b75] font-bold" >Sahil Pawar</h1>
                        <p className="mt-2 text-[15px] text-[#6b6b75]">
                            Manage your personal information and account settings
                        </p>
                    </div>
                </div>

                {props.children}
            </div>
        </div>

    )
}

export default Profile;