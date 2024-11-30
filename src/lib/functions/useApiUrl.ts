import { env } from "$env/dynamic/private"; 

export const useApiUrl = () => {
    return env.API_URL
}