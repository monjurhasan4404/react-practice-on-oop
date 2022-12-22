import withCounter from './Hoc/withCounter'

const Clickcounter = (props) =>{ 
    
    
        const {count, incrementCount}=props;
        return(
            <div>
                <button type="button" onClick={incrementCount}>click {count} Times</button>
            </div>
            );
    };
export default withCounter(Clickcounter);