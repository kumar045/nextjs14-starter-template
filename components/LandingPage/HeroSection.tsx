"use client"
import { BorderBeam } from "../magicui/border-beam";
import { AnimatedGradientTextComponent } from './AnimatedGradientComponent';
export default function HeroSection() {

    return (
        <div className='flex flex-col items-center justify-center leading-6'>
            <div className="my-5">
                <AnimatedGradientTextComponent />
            </div>
            <h1 className="scroll-m-20 text-4xl sm:text-4xl md:text-6xl font-semibold tracking-tight lg:text-7xl text-center max-w-[1120px] bg-gradient-to-b from-black to-gray-700/80 dark:from-white dark:to-slate-400 inline-block text-transparent bg-clip-text">
                Build & Ship Fast with the Ultimate Nextjs Starter Kit
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg text-center mt-2 dark:text-gray-400">
                Everything you need to quickly build your SaaS, AI product, or any other web application fast giving you time to focus on what really matters
            </p>
            
            <div>
                <div className="relative flex max-w-6xl justify-center overflow-hidden mt-7">
                    <div className="relative rounded-xl">
                        <img
                            src="/dash-light.png"
                            alt="Hero Image"
                            className="block w-[1200px] rounded-[inherit] border object-contain shadow-lg dark:hidden"
                        />
                        <img
                            src="/dash.png"
                            alt="Hero Image"
                            className="dark:block w-[1200px] rounded-[inherit] border object-contain shadow-lg hidden"
                        />
                        <BorderBeam size={250} duration={12} delay={9} />
                    </div>
                </div>
            </div>

        </div>
    )
}
