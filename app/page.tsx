import Head from 'next/head';
import Counter from './components/Counter';
import Header from '../app/layout';
import Image from 'next/image';
import styles from '../app/page.module.css'; // Importa tus estilos CSS

export default function Home() {
  return (
    <div className={styles.container}> {/* Utiliza el contenedor y aplica estilos */}
     
      <Head>
        <title>Contador</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.content}> {/* Utiliza el contenedor de contenido y aplica estilos */}
        <picture>
          <source srcSet="https://media.istockphoto.com/id/1320532557/es/foto/fondo-criptomoneda-bitcoin-un-mont%C3%B3n-de-bitcoin-de-oro-moneda-digital.jpg?s=612x612&w=0&k=20&c=-lsl-JIYl0iuOtd4kFyT9GxakIllFKg_E2EfC4vRD4w=" type="image/webp" />
          <img
            src="https://media.istockphoto.com/id/1320532557/es/foto/fondo-criptomoneda-bitcoin-un-mont%C3%B3n-de-bitcoin-de-oro-moneda-digital.jpg?s=612x612&w=0&k=20&c=-lsl-JIYl0iuOtd4kFyT9GxakIllFKg_E2EfC4vRD4w="
            alt="Landscape picture"
            width={800}
            height={500}
          />
        </picture>
        <p className={styles.description}>¿El bitcoin sigue siendo buena inversion?</p>
        <Counter />
      </main>
      
    </div>
  );
}
