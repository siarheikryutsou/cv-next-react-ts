"use client"

import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context";

export default function Page404() {

    const router:AppRouterInstance = useRouter();
    const [secondsLeft, setSecondsLeft] = useState(5);
    const intervalDelay:number = 200;
    let interval:number;
    let startTime:number;

    const stopTimer = ():void => {
        if(interval) {
            clearInterval(interval);
            interval = 0;
        }
    }

    const startTimer = ():void => {
        stopTimer();
        startTime = Date.now();
        interval = window.setInterval(():void => tick(), intervalDelay);
    }

    const tick = ():void => {
        const currentTime:number = Date.now();
        const secondsPassed = Math.round((currentTime - startTime) / 1000);
        const timeLeft = Math.max(0, secondsLeft - secondsPassed);

        if(timeLeft <= 0) {
            stopTimer();
            router.push("/");
        }

        setSecondsLeft(timeLeft);
    }

    useEffect(() => {
        startTimer();
        return () => {
            stopTimer();
        }

    }, []);

    return (
        <>
            <h1>404</h1>
            <h3>The requester URL was not found</h3>
            <p>You will be redirected to <Link href="/">Home</Link> after {secondsLeft} seconds</p>
        </>
    )
}
