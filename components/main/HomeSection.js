import styles from './HomeSection.module.scss';
import shirts from '../../assets/imgs/main/T-Shirts..jpg';
import sneakers from '../../assets/imgs/main/Sneakers.jpg';
import collection from '../../assets/imgs/main/Conjuntos.jpg';
import HomeDiv from './HomeDiv';

function HomeSection() {
    return ( 
        <section className={styles.grid_container}>
            <HomeDiv imageBanner={shirts} title={'Camisetas'} redirectTo={'jerseys'}/>

            <HomeDiv imageBanner={sneakers} title={'Zapatillas'} redirectTo={'sneakers'}/>

            <HomeDiv imageBanner={collection} title={'Pantalones'} two_row={true} redirectTo={'shorts'}/>
        </section>
     );
}

export default HomeSection;