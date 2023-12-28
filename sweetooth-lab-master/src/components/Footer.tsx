import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoYoutube,
} from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-background mt-8">
      <div className="container pt-8 pb-8 w-3/5 flex flex-wrap border-t border-primary items-center">
        <div className="w-full md:w-1/2 flex flex-col">
          <p className="font-serif font-bold">Connect With</p>
          <p className="text-3xl leading-none font-serif font-bold">
            Sweetooth Lab
          </p>
          <div className="flex gap-2 my-6">
            <IoLogoInstagram className="text-2xl text-accent bg-primary drop-shadow-md rounded-full p-1" />
            <IoLogoFacebook className="text-2xl text-accent bg-primary drop-shadow-md rounded-full p-1" />
            <IoLogoTiktok className="text-2xl text-accent bg-primary drop-shadow-md rounded-full p-1" />
            <IoLogoYoutube className="text-2xl text-accent bg-primary drop-shadow-md rounded-full p-1" />
          </div>
          <p className="text-xs">© Sweetooth Lab. Terms | Privacy</p>
        </div>
        <div className="w-full md:w-1/2 flex-wrap hidden">
          <div className="text-center md:text-left text-xs flex flex-wrap justify-evenly">
            <p className="drop-shadow-lg w-1/3 mt-8 md:mt-6">Columns</p>
            <p className="drop-shadow-lg w-1/3 mt-8 md:mt-6">Recipes</p>
            <p className="drop-shadow-lg w-1/3 mt-8 md:mt-6">Contests</p>
            <p className="drop-shadow-lg w-1/3 mt-8 md:mt-6">Shop</p>
            <p className="drop-shadow-lg w-1/3 mt-8 md:mt-6">Articles</p>
            <p className="drop-shadow-lg w-1/3 mt-8 md:mt-6">About Us</p>
            <p className="drop-shadow-lg w-1/3 mt-8 md:mt-6">Our Team</p>
            <p className="drop-shadow-lg w-1/3 mt-8 md:mt-6">Careers</p>
            <p className="drop-shadow-lg w-1/3 mt-8 md:mt-6">Contact</p>
            <p className="drop-shadow-lg w-1/3 mt-8 md:mt-6">FAQs</p>
            <p className="drop-shadow-lg w-1/3 mt-8 md:mt-6">Gift Cards</p>
            <p className="drop-shadow-lg w-1/3 mt-8 md:mt-6">Collections</p>
            <p className="drop-shadow-lg w-1/3 mt-8 md:mt-6">Support</p>
            <p className="drop-shadow-lg w-1/3 mt-8 md:mt-6">
              Affiliate Program
            </p>
            <p className="drop-shadow-lg w-1/3 mt-8 md:mt-6">Advertising</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
