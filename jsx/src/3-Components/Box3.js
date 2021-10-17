import Box2 from './Box2';

const Box3 = () => {
    return (
        // <div style={{backgroundColor: props.color, width: props.width, height: props.width, display: 'flex', alignItems: 'center', justifyContent:'center'}}>
        <div style={{backgroundColor: 'green', width: '20vw', height: '20vw', display: 'flex', alignItems: 'center', justifyContent:'space-around', flexDirection :'column'}}>
            <Box2 />
            <Box2 />
        </div>
    );
}

export default Box3;