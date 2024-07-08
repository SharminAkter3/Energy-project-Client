import '../../../App.css';
import missionImage from '../../../assets/Images/Mission/mission_image.jfif'
const Mission = () => {
    return (
        <div className='mission-card px-40 py-20'>
            <div>
                <img className='mission-image'
                    src={missionImage}
                    alt="mission-image"
                />
            </div>
            <div>
                <h1>text</h1>
            </div>
        </div>
    );
};

export default Mission;