import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { MyContext } from '../lib/MyContext';
import React from 'react';

const Post = () => {
    const router = useRouter();
    var fileName = router.query.fileName;
    const [contents, setContents] = useState<string>('');
    const [loaded, setLoaded] = useState<boolean>(false);
    const context = React.useContext( MyContext );

    if (contents === ''  &&  context.contents !== '') {
        setLoaded(false);
        setContents(context.contents);
    }

    useEffect(() => { // componentDidMount
        if (context.contents === '') {
            const abortController = new AbortController();
            (async () => {

                const  responseData = await fetch('/api/search');  // __Project__/pages/api/search.ts
                const  response = await responseData.json();
                var  loadedContents: string = response.contents;
                context.contents = loadedContents;
                setLoaded(true);
                setContents(loadedContents);
                if ( ! router.asPath.includes('[fileName]')) {
                    router.replace(router.asPath.replace('#','?#'));  // router fix (1): asPath.replace is required from router.replace.
                }
            })().catch(console.error);

            return () => {  // componentWillUnmount
                abortController.abort();
            };
        }
    }, [loaded, context]);

    if (router.asPath.includes('?#')  &&  ! router.asPath.includes('[fileName]')) {
        router.replace(router.asPath.replace('?#','#'));  // router fix (2): return the URL
    }

    return <>
        <p>file name: {fileName}, {loaded ? 'loaded' : 'not loaded'}</p>
            <pre>
                <code className='contents'>
                    {contents.split('\n').map((line,i) =>
                        <span key={i}><a id={`L${i+1}`}>{`     ${i+1}`.substring((i+1).toString().length)}</a>: {line}<br/></span>
                        // span avoids key property check error
                    )}
                </code>
            </pre>
        <a id="last">(Last)</a>
    </>;
}

export default Post
