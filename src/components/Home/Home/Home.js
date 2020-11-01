import React from 'react';
import CarouselSection from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <CarouselSection />
            <Review />
            <Footer />
        </div>
    );
};

export default Home;