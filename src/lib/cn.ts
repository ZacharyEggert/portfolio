import {ClassValue, clsx} from "clsx";

import { twMerge } from "tw-merge";

const cn = (...inputs:ClassValue[]) => twMerge(clsx(...inputs)); 

export default cn;
