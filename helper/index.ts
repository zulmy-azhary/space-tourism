import { Fetcher } from "swr";
import { Data } from "../types";

// Fetcher for useSWR
export const fetcher: Fetcher<Data> = (apiURL: string) => fetch(apiURL).then(res => res.json());