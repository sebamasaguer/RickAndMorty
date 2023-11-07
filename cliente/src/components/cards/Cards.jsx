import Card from '../card/Card.jsx';
import styles from './cards.module.css'

export default function Cards(props) {

   const { characters} = props;

   return (
      <div className={styles.unorderedList}>
         {characters.map((personaje) => {
            const {
               id,
               name,
               status,
               species,
               gender,
               origin,
               image
            } = personaje;

            return (
               <Card
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin.name}
                  image={image}
                  onClose={props.onClose}
               />
            )
         })}
      </div>
   );
}

