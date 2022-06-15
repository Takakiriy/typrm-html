import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Post = () => {
    const router = useRouter();
    var keyword = router.query.q;
    const [contents, setContents] = useState<string>('');

    useEffect(() => {
        const asyncFunction = async () => {
            const  responseData = await fetch('/api/search');  // __Project__/pages/api/search.ts
            const  response = await responseData.json();
            setContents(response.contents);
        }

        asyncFunction()
            .catch(console.error);
    }, []);

    return <>
        <p>#keyword: {keyword}</p>
        <pre>{contents}</pre>
    </>;
}

export default Post
