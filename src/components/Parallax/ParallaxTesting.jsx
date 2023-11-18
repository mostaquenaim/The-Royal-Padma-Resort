import { ParallaxProvider } from 'react-scroll-parallax';
import TestParallax from './TestParallax';

const ParallaxTesting = () => {
    return (
        <>
            <ParallaxProvider>
                <TestParallax></TestParallax>
            </ParallaxProvider>
        </>
    );
};

export default ParallaxTesting;
