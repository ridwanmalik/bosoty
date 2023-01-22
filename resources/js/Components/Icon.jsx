import {
    BiArea,
    BiBath,
    BiBed,
    BiEnvelope,
    BiMap,
    BiPhoneCall,
    BiWallet,
} from "react-icons/bi";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

export const ICONS = {
    phone: BiPhoneCall,
    mail: BiEnvelope,
    location: BiMap,
    bed: BiBed,
    bath: BiBath,
    area: BiArea,
    money: BiWallet,
    facebook: FaFacebookF,
    twitter: FaTwitter,
    linkedin: FaLinkedinIn,
    youtube: FaYoutube,
};

export const ICON_NAMES = Object.keys(ICONS);

export const Icon = ({ name, onClick, className }) => {
    if (!ICON_NAMES.includes(name)) return null;

    const Component = ICONS[name];
    return <Component className={className} onClick={onClick} />;
};
