import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter();
    const keyword = router.query.q;

    return <p>keyword: {keyword}</p>
}

export default Post
