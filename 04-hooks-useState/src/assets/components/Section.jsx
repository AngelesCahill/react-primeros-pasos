import '../styles/section.css';
import '../styles/card.css';
import userImg from '../img/user.png';

const users = [
    {
        id: 1,
        name: 'Andy',
        description: 'fullStack',
        image: userImg 
    },
    {
        id: 2,
        name: 'Ana',
        description: 'UX / UI',
        image: userImg
    },
            {
        id: 3,
        name: 'Carol',
        description: 'FrontEnd',
        image: userImg
    }        
];

const Section = () => {

    const handleClick = (event) => {
        console.log(event);
        return alert(`Hola, te has contactado con ${event}`) 
    }; 
    return (
        <section className='cardSection'>
            {users.map(user => {
                return (
                    <div className="card" key={user.id}>
                        <img className="image" src={user.image} alt="" />
                        <h1 className="card-title">{user.name}</h1>
                        <p className="description">{user.description}</p>
                            <button id={user.id} className="cardButton" onClick= {() => handleClick(user.name)}>
                        Contactar
                        </button>
                    </div>
                );
        })}
        </section>
    );
}

export default Section
