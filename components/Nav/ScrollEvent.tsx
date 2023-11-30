'use client'

import { Router, useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import _ from 'lodash';

type direction = string | undefined


const ScrollEvent = () => {
    const router = useRouter()
    const currentURL = router.asPath;

    const wheelToPage = (upUrl: string, downUrl: string, direction: direction) => {
        if (direction != null && direction === 'up') router.push(upUrl)
        if (direction === 'down') router.push(downUrl)
    }

    const handleWheel = useCallback(
        _.throttle((event: any) => {
            let wheelDirection

            if (event.deltaY > 0) wheelDirection = 'up'
            else if (event.deltaY < 0) wheelDirection = 'down'

            console.log(wheelDirection)

            switch (currentURL) {
                case "/":
                    wheelToPage('', '/about', wheelDirection)
                    break
                case "/about":
                    wheelToPage('/', '/work', wheelDirection)
                    break
                case "/work":
                    wheelToPage('/about', '/contact', wheelDirection)
                    break
                case "/contact":
                    wheelToPage('/contact', '', wheelDirection)
            }
        }, 200),
        []
    );

    useEffect(() => {
        window.addEventListener('wheel', (event) => {
            handleWheel(event)
        });
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [])



    return null
}

export default ScrollEvent;