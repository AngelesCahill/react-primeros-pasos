import '../styles/section.css';

const frutas = ['manzana', 'pera', 'naranja'];

const Section = () => {
    return (
        <ul>
        {
            frutas.map(fruta =>{
            return <li key={fruta}>{fruta}</li>
            })
        }
        </ul>
        
    )
}

export default Section
