import { useRouter } from 'next/router';
import { useEffect } from 'react';
import React from 'react';

const Post = () => {
    const router = useRouter();
    var keyword = router.query.q;

    return <>
        <p>#keyword: {keyword}</p>
    </>;
}

export default Post
