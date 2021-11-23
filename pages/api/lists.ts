// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy';

// type Data = {
//   name: string
// }
const proxy = httpProxy.createProxyServer();
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) { 

    req.headers.cookie = ''

    proxy.web(req, res, {
        target: 'https://613dd94494dbd600172aba1a.mockapi.io',
        changeOrigin: true,
        selfHandleResponse: false,

    })
//   res.status(200).json({ name: 'John Doe' })
}
