// import React, {useEffect, useState} from 'react';
// import Icon1 from '../../assets/images/nature.svg'
// import Icon2 from '../../assets/images/flowers.svg'
// import Icon3 from '../../assets/images/farmGirl.svg'
// import {CardContainer, CardH1, CardWrapper, Card, CardIcon, CardH2, Details,BtnWrap} from './ProfilerElements';
// import { Button } from '../ButtonElement';



// export default class Profiler extends React.Component {

//     state = {
//         loading: true,
//         profile: null,
//         details: false
//     };

//     async componentDidMount() {
//         const url = "http://localhost:3000/csa/browsecsas";
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data)
//         this.setState({ profile: data, loading: false});
//     }

//     async handleSubmit(csaID) {
//         fetch(`http://localhost:3000/junction/csa/${csaID}`, {
//             method: 'POST',
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Authorization': localStorage.getItem('sessionToken')
//             })
//         }) .then(
//             (response) => response.json()
//         ).then((data) => {
//             console.log(data)
//         }) .catch((err) => {
//             console.log(err)
//         })
            
        
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.loading || !this.state.profile ? (
//                     <div>loading...</div>
//                 ) : (
//                     <div>
//                         <div>
//                         <CardContainer id="Card">
//                             <CardH1>Browse CSAs</CardH1>
//                                 <CardWrapper>
                                
//                                     {this.state.profile.map((info) =>
                                    
//                                         <Card>
//                                             <CardIcon src={Icon1}/>
//                                                 <CardH2>{info.farmName}</CardH2>
//                                                 <CardH2>{info.email}</CardH2>
//                                                 <Details open={this.setState({bio: true})}>
//                                                 {info.bio}
//                                                 </Details> 

//                                                 (sessionToken ?
//                                                 <BtnWrap>
//                                                     <Button onClick = {() => this.handleSubmit(info.id)}
                                                    
//                                                     >Join this CSA</Button> 
//                                                 </BtnWrap>: null)
//                                         </Card>
//                                     )}

//                              </CardWrapper>
//                             </CardContainer>

//                         </div>

//                     </div>
//                 )}
//             </div>
//         )
//     }



// }