import { headers } from "next/headers"
import { auth } from "./auth"

export const getDestination = async () => {
    const res = await fetch('http://localhost:5000/destinations')
    const data = await res.json()
    return data
}

