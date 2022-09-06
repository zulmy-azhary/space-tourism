import { Fetcher } from "swr";
import type { Data } from "../types";

// Fetcher for useSWR
export const fetcher: Fetcher<Data> = (url: string) => fetch(url).then(res => res.json());

// Items
export const dataSection: Readonly<Record<string, string>[]> = [
  {
    index: "00",
    name: "Home",
    url: "/",
  },
  {
    index: "01",
    name: "Destination",
    url: "/destination",
  },
  {
    index: "02",
    name: "Crew",
    url: "/crew",
  },
  {
    index: "03",
    name: "Technology",
    url: "/technology",
  },
]