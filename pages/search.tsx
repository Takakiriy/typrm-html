import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Post = () => {
    const router = useRouter();
    var keyword = router.query.q;
    const [contents, setContents] = useState<string>('');

    useEffect(() => {
        const asyncFunction = async () => {
            const response = await fetch('/api/search');  // __Project__/pages/api/search.ts
            const aJSON = JSON.stringify(await response.json(), null, '    ');
            setContents(aJSON);
        }

        asyncFunction()
            .catch(console.error);
    }, []);

    return <>
        <p>keyword: {keyword}</p>
        <p>{contents}</p>
    </>;
}

export default Post
