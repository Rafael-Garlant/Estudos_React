import styles from './Frase.module.css';  

export default function Frase(){
  return (
    <div className={styles.fraseContainer}>
      <p className={styles.fraseContent}>Essa é uma frase: <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut odit facere alias ab tempora perspiciatis magni molestias ut ea, maxime sint asperiores, incidunt corrupti? Laudantium provident expedita dolorum blanditiis temporibus.</p>
    </div>
  )
}