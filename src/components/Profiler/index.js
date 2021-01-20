import React, {useEffect, useState} from 'react';
import Icon1 from '../../assets/images/nature.svg'
import Icon2 from '../../assets/images/flowers.svg'
import Icon3 from '../../assets/images/farmGirl.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP,BtnWrap} from './ProfilerElements';
import { Button } from '../ButtonElement';



export default class Profiler extends React.Component {

    state = {
        loading: true,
        profile: null
    };

    async componentDidMount() {
        const url = "http://localhost:3000/csa/browsecsas";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({ profile: data, loading: false});
    }

    async handleSubmit(event) {
        event.preventDefault();
        fetch(`http://localhost:3000/junction/csa/:${this.state.profile.id}`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('sessionToken')
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.profile ? (
                    <div>loading...</div>
                ) : (
                    <div>
                        <div>
                        <ServicesContainer id="services">
                            <ServicesH1>Browse CSAs</ServicesH1>
                                <ServicesWrapper>
                                
                                    {this.state.profile.map((info) =>
                                    
                                        <ServicesCard>
                                            <ServicesIcon src={Icon1}/>
                                                <ServicesH2>{info.farmName}</ServicesH2>
                                                <ServicesH2>{info.email}</ServicesH2>
                                                <ServicesP>{info.farmName} sell carrots, beef, and chicken.</ServicesP>
                                                (sessionToken ?
                                                <BtnWrap>
                                                    <Button onClick = {this.handleSubmit}
                                                    
                                                    >Join this CSA</Button> 
                                                </BtnWrap>: null)
                                        </ServicesCard>
                                    )}

                             </ServicesWrapper>
                            </ServicesContainer>

                        </div>

                    </div>
                )}
            </div>
        )
    }



}

