import React from 'react';

export default class Form extends React.Component{
    state={
        title:'',
        text:'Javascript is awsome',
        library:'React',
        isawsome:true,
    };
    handleChange=(e) =>{
        if(e.target.type==='text'){
        this.setState({
            title:e.target.value,
        });
          }
        else if(e.target.type==='textarea'){
            this.setState({
                text:e.target.value,
            });
        }
        else if(e.target.type==='select-one'){
            this.setState({
                library:e.target.value,
            });
        }
        else if(e.target.type==='checkbox'){
                this.setState({
                    isawsome:e.target.checked,
                });
            }
        else{
            console.log('Nothing Here');
        }

    

    };
    submitHandler=(e) =>{
        e.preventDefault();
        const {title, text, library, isawsome}=this.state;
        console.log(title, text, library, isawsome);

    }
    render(){
        const {title, text, library, isawsome}=this.state;
      return (
        
        <div>
            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="Enter Tittle"
                value={title} onChange={this.handleChange}/>
                <br/>
                <br/>
                <input type="textarea" placeholder="Enter Tittle"
                value={text} onChange={this.handleChange}/>
                <br/>
                <br/>
                <select value={library} onChange={this.handleChange} >
                    <option value="React">React</option>
                    <option value="Node">Node</option>

                </select>
                <br/>
                <br/>
                <input type="checkbox" checked={isawsome}
                onChange={this.handleChange} />

                <input type="submit" value="submit"/>
            </form>
        </div>


        );

    }
}