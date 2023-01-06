import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = props => {
    const {icon, link} = props.socialProfile;
    return(
        <span>
            <a href={link}><img src={icon} style={{width:32, height: 32, margin: 10}} alt='social-profile'/></a>
        </span>
    )
}
const SocialProfiles = () => (
    <div>
        <h2>Connect with me!</h2>
        <div>
            {
                SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                    return(
                        <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}/>
                    )
                })
            }
        </div>
    </div>
)

export default SocialProfiles;