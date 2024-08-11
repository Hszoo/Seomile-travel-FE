import { FaBlind, FaDeaf, FaBaby, FaWheelchair, FaHome, FaTasks, FaHeart } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar} from '@fortawesome/free-solid-svg-icons';
import { MdElderly } from "react-icons/md";




const HomeIcon = FaHome;
const ProgramIcon = FaTasks;
const FavoritesIcon = FaHeart;
const WheelchairIcon = FaWheelchair;
const BlindIcon = FaBlind;
const DeafIcon = FaDeaf;
const BabyIcon = FaBaby;
const ElderIcon = MdElderly;
const LocationIcon = (props) => <FontAwesomeIcon icon={faMapMarkerAlt} {...props} />;
const StarIcon = (props) => <FontAwesomeIcon icon={faStar} {...props} />;

export { HomeIcon, FavoritesIcon, ProgramIcon, BlindIcon, DeafIcon, BabyIcon, WheelchairIcon, LocationIcon, StarIcon, ElderIcon };