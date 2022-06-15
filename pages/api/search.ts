// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';  // file system

const  projectPath = process.cwd();
const  filesPath = path.join(projectPath, 'files');

type ResponseData = {
    contents: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const  filePath = filesPath + '/JavaScript.yaml';
    const  contents = fs.readFileSync(filePath).toString();

    res.status(200).json({ contents });
}
