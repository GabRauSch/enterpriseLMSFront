import styles from '@/styles/components/user/profileInfo.module.css';
import { InfoAreaButton } from '@/components/Buttons/InfoAreaButton';
import { ProfileDetails } from './ProfileDetails';

type ProfileProps = {
    name: string,
    position: string,
    segment: string,
    pontuation: number
}

export const ProfileInfo = ({name, position, segment, pontuation}: ProfileProps)=>{
    return (
        <div className={styles.profileInfo}>
            <div className={styles.profileLogo}>
                {/* <img src="logoprofileExample.png" alt="profile Logo" width="100" /> */}
            </div>
            <ProfileDetails name={name} position={position} segment={segment} points={pontuation} />
            <div className={styles.buttonsProfile}>
                <InfoAreaButton name="Contact administration"/>
                <InfoAreaButton name="Suggest course"/>
            </div>
        </div>
    )
}