import { SignOut } from '@/components/signOut';
import { auth } from '@/lib/auth'
import Image from 'next/image';
import React from 'react'



async function page() {
    const session = await auth()
    if (!session?.user) return <p>sign in first</p>;
    return (
        <div>
            <Image width={50} height={50} src={session.user.image!} alt="User Avatar" />
            <SignOut />
        </div>
    )
}

export default page