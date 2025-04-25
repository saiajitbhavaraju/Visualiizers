import React from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
    const router = useRouter();

    return (
        <>

        <div>
            <h1>Hello!</h1>
            <div className="buttons flex gap-2 items-center justify-center">
                <button onClick={() => setTimeout(() => router.push('/Pathfinder'), 0)}>Go to PathFinder</button>
                <button onClick={() => setTimeout(() => router.push('/Sorter'), 0)}>Go to Sorter</button>
            </div>
        </div>
        </>
    )
}  