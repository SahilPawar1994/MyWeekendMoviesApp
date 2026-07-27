import { NextResponse } from 'next/server'

export const POST = () => {
    const response = NextResponse.json({
        statusText: 'success',
        message: 'Successfully Logged out!'
    }, {
        status: 200,
    })

    response.cookies.set('refresh_token', '', {
        httpOnly: true,
        path: '/',
        maxAge: 0,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
    });

     response.cookies.set('access_token', '', {
        httpOnly: true,
        path: '/',
        maxAge: 0,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
    })

    return response;
}