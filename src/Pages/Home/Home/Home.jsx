import Banner from "../Banner/Banner";
import Chose from "../Chose/Chose";
import Expert from "../Expert/Expert";
import Mission from "../Mission/Mission";
import Process from "../Process/Process";
import Product from "../Product/Product";
import Service from "../Service/Service";


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Mission></Mission>
            <Product></Product>
            <Service></Service>
            <Expert></Expert>
            <Process></Process>
            <Chose></Chose>
        </div>
    );
};

export default Home;