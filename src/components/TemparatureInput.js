import React from 'react';
const scaleName={
    c:'celcius',
    f:'fahrenheit'
};


export default class TemparatureInput extends React.Component{
    state={
        temparature: ''
    };
    onTemparatureChange=(e) =>{
     this.setState({
        temparature:e.target.value
     });
    }

    render(){
        const{temparature}=this.state;
        const {scale}=this.props;

        return(
            <div><fieldset>
                <legend>Enter Temparature in {scaleName[scale]}</legend>
                <input type="text" value={temparature} onChange={this.onTemparatureChange}/>
            </fieldset>
            


            </div>
            
        );
    }
}