import "@fontsource/poppins";
import Link from 'next/link';

const HeroBanner = () => {
    return (
        <section className="hero bg-cover bg-center relative min-h-[500px]">
            <div className="hero-overlay absolute inset-0 bg-black opacity-50"></div>
            <div className="blue-fade absolute inset-0"></div>
            <div className="hero-content relative z-10 container mx-auto py-20 px-4"> {/* Added px-4 for mobile padding */}
                <div className="text-left">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 poppins mt-8 md:mt-0"> {/* Added mt for mobile margin */}
                        OJT Monitoring System
                    </h1>
                    <p className="text-lg md:text-xl text-white mb-8 poppins">
                        An OJT Monitoring System is a tool for tracking and evaluating interns' progress and performance during on-the-job training.
                    </p>
                    <div className="hero-buttons flex space-x-6">
                        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-lg poppins">
                            <Link href="/login">
                                Login
                            </Link>
                        
                        <span className="lg:inline text-white">/</span>
                        <Link href="/register">
                            Register
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;