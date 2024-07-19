import { FaBlind, FaDeaf, FaBaby, FaWheelchair } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';

const BlindIcon = FaBlind;
const DeafIcon = FaDeaf;
const BabyIcon = FaBaby;
const WheelchairIcon = FaWheelchair;
const LocationIcon = (props) => <FontAwesomeIcon icon={faMapMarkerAlt} {...props} />;
const StarIcon = (props) => <FontAwesomeIcon icon={faStar} {...props} />;

export { BlindIcon, DeafIcon, BabyIcon, WheelchairIcon, LocationIcon, StarIcon };