import React from 'react';
import Icon1 from '../../assets/images/nature.svg'
import Icon2 from '../../assets/images/flavor.svg'
import Icon3 from '../../assets/images/farmGirl.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="foodmatters">
            <ServicesH1>Did You Know?</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>About Bees?</ServicesH2>
                    <ServicesP>Organic farms don’t use pesticides, which protects critical insect populations.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>About Flavor?</ServicesH2>
                    <ServicesP>Organic strawberries have been scientifically proven to have more flavor!</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>About Glyphosate?</ServicesH2>
                    <ServicesP>Glyphosate is a pesticide that has been linked to liver damage and diabetes. Not in our CSAs though!</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
