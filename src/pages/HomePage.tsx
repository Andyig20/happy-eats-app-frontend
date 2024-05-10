import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white round-1g shadow-md py-8 flex-col gap-5 text-center -mt-16">
        <h1 className="text-5x1 font-bold tracking-tight text-sky-600">
                Happy Eats Away: Delivering Smiles, One Meal at a Time!
        </h1>
        <span className="text-x1">Food is just a click away</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage} />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3x1 tracking-tigher">
                    Order takeaway even faster!
                </span>
                <span>
                    Download the HappyEats App Faster ordering and personalised recommendations 
                </span>
                <img src={appDownloadImage} />

            </div>
        </div>
    </div>
  );
};

export default HomePage;