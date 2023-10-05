'use client'

import Image from 'next/image';

const imageLoader = ({ src, width, quality }) => {
    return `https://images.contentstack.io/v3/assets/bltb564490bc5201f31/blte3f202a35a967ea1/651c2d19a452a245cc8b4c35${src}?w=${width}&q=${quality || 75}`
}

export default function Page() {
    return (
        <Image
            alt="The guitarist in the concert."
            src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
            width={2250}
            height={1390}
            layout="responsive"
        />
    )
}