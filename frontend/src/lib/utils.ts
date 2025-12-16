import { API_URL } from "./api";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getAssetUrl(path: string | null | undefined): string {
    if (!path) return "";
    if (path.startsWith("http") || path.startsWith("https") || path.startsWith("blob:")) return path;

    // Remove leading slash if present to avoid double slashes with API_URL/files/
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    return `${API_URL}/files/${cleanPath}`;
}
