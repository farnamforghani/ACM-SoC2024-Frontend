import Header from './Header';
import Footer from './Footer';

function PageLayout( {children} ) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default PageLayout;