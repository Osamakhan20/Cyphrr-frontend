import { PhoneIcon, MailIcon, IgIcon, FacebookIcon, TwitterIcon } from "../Helper/Icons";

export const Header = () => {
    return (
        <header className="bg-primary text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">

                <div className="flex items-center gap-4 sm:gap-8">
                    <div className="flex items-center gap-2 text-sm">
                        <PhoneIcon className="size-4 text-white" />
                        <span className="text-secondary font-bold text-xs sm:text-sm">+0123456789</span>
                    </div>

                    <div className="hidden md:flex items-center gap-2 text-sm">
                        <MailIcon className="size-4 text-white" />
                        <span className="text-secondary font-bold">info@cypher.com</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <IgIcon className="size-5 text-white cursor-pointer hover:opacity-90" />
                    <FacebookIcon className="size-5 text-white cursor-pointer hover:opacity-90" />
                    <TwitterIcon className="size-5 sm:size-6 text-white cursor-pointer hover:opacity-90" />
                </div>

            </div>
        </header>
    );
};

