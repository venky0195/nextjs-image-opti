import Image from 'next/image';

import profilePic from './some-image.png';

export default function Page() {
    return (
        <Image
            src={profilePic}
            alt="Picture of the author"
        />
    )
}