'use client'

import Image from 'next/image';

const imageLoader = ({ src, width, quality }) => {
    return `https://images.contentstack.io/v3/assets/bltb564490bc5201f31/blte3f202a35a967ea1/651c2d19a452a245cc8b4c35${src}?w=${width}&q=${quality || 75}`
}

export default function Page() {

    return (
        <Image
            alt="The guitarist in the concert."
            src={`https://media.giphy.com/media/l2be3XyhClViY06dTt/giphy.gif`}
            width={1200}
            height={400}
            quality={100}
            layout="responsive"
        />
    )
}