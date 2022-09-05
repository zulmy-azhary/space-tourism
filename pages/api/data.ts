// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
import type { Data } from "../../types";

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");
  const jsonData: Data = JSON.parse(fileContents);
  
  res.status(200).json(jsonData);
}

export default handler;