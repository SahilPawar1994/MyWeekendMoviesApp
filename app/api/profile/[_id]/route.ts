import { NextResponse } from 'next/server'
import UserSchema from '@/model/UserSchema'
import { getAcceToken, getRefreshToken } from '@/axios/token'
import connectToDatabase from '@/config/DatabaseConnection';
import { cookies } from 'next/headers';

export const GET = async (request: Request) => {

    try {
        await connectToDatabase();

        const accessToken = (await cookies()).get('access_token');

        console.log("access token =>", accessToken)
        if (!accessToken) {
            return await NextResponse.json({
                message: 'Unauthorised Token'
            }, {
                status: 401,
                statusText: 'Unauthorised User'
            })
        }
        return await NextResponse.json({
            status: 200,
            statusText: 'Success'
        })
    } catch (e) {

    }
}

