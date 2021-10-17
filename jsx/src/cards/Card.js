import faker from 'faker'

const Card = () => {
    return (
        <div className="card" style={{width: '25vw', border: '1px solid black', borderRadius: '8px'}}>
            <img src={faker.image.image()} style={{width: '100%'}} />
            <h3 style={{paddingLeft: '10px'}}>Title</h3>
            <p style={{paddingLeft: '10px'}}>description description description </p>
            <input type="Button" value="SHARE" style={{color: 'orange', backgroundColor: 'white', border: '1px solid white', margin: '10px 20px'}} />
            <input type="Button" value="EXPLORE" style={{color: 'orange', backgroundColor: 'white', border: '1px solid white', margin: '10px 20px'}} />
        </div>
    );
}

export default Card;

// 