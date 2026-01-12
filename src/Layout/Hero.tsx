import { BackgroundImg, FacebookIcon, IgIcon, TwitterIcon } from '../Helper/Icons';

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-[80vh] flex items-center bg-secondary px-6 py-12 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

               
                <div className="order-2 md:order-1 space-y-6">
                    <h4 className="text-2xl md:text-4xl font-extrabold text-textGray leading-tight">
                        Unlock your dream career by exploring opportunities.
                    </h4>
                    <p className="text-lg text-primary max-w-lg">
                        Build seamless digital experiences with modern tools. Our platform
                        empowers developers to create, scale, and maintain high-performance
                        applications with ease.
                    </p>
                    <h4 className="text-1xl md:text-2xl font-extrabold text-textGray leading-tight">
                        popular Services
                    </h4>
                    <p className="text-lg text-primary max-w-lg">
                        Set yourself apart from the competition by creating a dynamic video resume or CV that highlights your skills, experience, and accomplishments.
                    </p>

                    
                    <div className="flex items-center gap-6 pt-4 ">
                        <p className='text-1xl text-textGray'>Follow Us:</p>
                        <a href="#" className="bg-primary transition-colors">
                            <IgIcon  />
                        </a>
                        <a href="#" className=" bg-primary hover:text-blue-400 transition-colors">
                            <FacebookIcon />
                        </a>
                        <a href="#" className="bg-primary hover:text-blue-700 transition-colors">
                            <TwitterIcon />
                        </a>
                    </div>
                </div>

                
                <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl">

                        <BackgroundImg className='w-4xl min-h-11/12'/>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;