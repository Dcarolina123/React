import "bootstrap/dist/css/bootstrap.css";
import Carousel from '../components/carousel/carousel';
import Text from '../components/text';
import Cards from '../components/cards';
import Footer from '../layouts/footer';


function Home() {
    return(
        <div className="Home">

        <Carousel/>

        <Text/>

        <Cards/>

        <Footer/>
            
        </div>
    );
}

export default Home;