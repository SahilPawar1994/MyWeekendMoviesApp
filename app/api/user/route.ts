import { NextResponse } from 'next/server'
import UserSchema from '@/model/UserSchema'
import { getAcceToken, getRefreshToken } from '@/axios/token'

export const GET = async (request: Request) => {
    try {

        const { searchParams } = new URL(request.url);

        const entries = Object.fromEntries(searchParams.entries());
        const payload = {
            [/^\d{10}$/.test(entries.username) ? 'contact' : 'email'] : entries.username,
            password: entries.password
        }

        const data = await UserSchema.findOne(payload)
        const nextResponse = NextResponse.json({
            data: data,
            success: true,
            message: 'User Registered Successfully!'
        }, {
            status: 200,
            statusText: 'success',
            headers: { "Content-Type" : 'application/json'}
        })

        const access_token = getAcceToken(data._id);
        const refresh_token = getRefreshToken(data._id)

        nextResponse.cookies.set('access_token', access_token, {
            httpOnly: true, secure: true
        })

        nextResponse.cookies.set('refresh_token', refresh_token, {
            httpOnly: true, secure: true
        })
        return nextResponse
    } catch (e: any) {
        return NextResponse.json({
            success: false,
            Message: e?.message || 'User Registration Error!!!'
        }, { status: 409, statusText: 'failure'})
    }
}

export const POST = async (request: Request) => {
    try {
        const body = await request.json();

        const response = await UserSchema.insertOne(body);
        const access_token = getAcceToken(response._id);
        const refresh_token = getRefreshToken(response._id)

        const nextResponse = NextResponse.json({
            user: {
                _id: response._id,
                access_token, refresh_token
            },
            success: true,
            message: 'User Registered Successfully!!!',  
        }, {
            status: 201,
            headers: { "Content-Type": "application/json" }
        })

        nextResponse.cookies.set('access_token', access_token, {
            httpOnly: true, secure: true
        })

        nextResponse.cookies.set('refresh_token', refresh_token, {
            httpOnly: true, secure: true
        })

        return nextResponse;
    } catch (e) {
        return new Response(JSON.stringify(e), {
            status: 409,
            headers: { "Content-Type": "application/json" }
        })
    }
}