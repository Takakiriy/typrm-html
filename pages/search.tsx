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
            const  contents = response.contents;

            setContents(contents);
        }

        asyncFunction()
            .catch(console.error);
    }, []);

    return <>
        <p>#keyword: {keyword}</p>
            <pre>
                <code className='contents'>
                    {contents.split('\n').map((line,i) =>
                        <><a id={`L${i+1}`}>{`     ${i+1}`.substring((i+1).toString().length)}</a>: {line}<br/></>
                    )}
                </code>
            </pre>
        <a id="last">(Last)</a>
    </>;
}

export default Post
