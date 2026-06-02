'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function NoDataAnimation() {
    return (
        <DotLottieReact
            src="/animations/no-data.lottie"
            autoplay
            loop
            style={{ width: 350, height: 350 }}
        />
    );
}