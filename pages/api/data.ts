// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
import type { Destination, Crew, Technology } from "../../types";

type Data = {
  destination: Array<Destination>;
  crew: Array<Crew>;
  technology: Array<Technology>;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");
  const jsonData = JSON.parse(fileContents);
  res.status(200).json(jsonData);
}
