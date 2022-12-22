import withCounter from './Hoc/withCounter'

const HoverCounter = (props) =>{ 
    
    
        const {count, incrementCount}=props;
        return(
            <div>
                <h1 onMouseOver={incrementCount}>click {count} Times</h1>
            </div>
            );
    };
export default withCounter(HoverCounter);