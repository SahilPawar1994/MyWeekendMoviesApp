import { NextResponse } from 'next/server'
import UserSchema from '@/model/UserSchema'

export const GET = async (request: Request) => {
    try {

        const { searchParams } = new URL(request.url);

        const payload = Object.fromEntries(searchParams.entries());

        const data = await UserSchema.findOne(payload)
        return NextResponse.json({
            data: data,
            success: true,
            message: 'User Registered Successfully!'
        }, {
            status: 201,
            statusText: 'success',
            headers: { "Content-Type" : 'application/json'}
        })
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
        console.log("post response => ", response)
        return NextResponse.json({
            user: {
                _id: response._id
            },
            success: true,
            message: 'User Registered Successfully!!!',  
        }, {
            status: 201,
            headers: { "Content-Type": "application/json" }
        })
    } catch (e) {
        return new Response(JSON.stringify(e), {
            status: 409,
            headers: { "Content-Type": "application/json" }
        })
    }
}