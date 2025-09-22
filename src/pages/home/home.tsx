import NewsBanner from '@/components/banner/banner';
import ContactSection from '@/components/ContactSection/contactSection';
import EnrollmentSteps from '@/components/enrollmentSteps/enrollmentSteps';
import FooterSection from '@/components/footer/footer';
import Header from '@/components/header/header';
import HeroSection from '@/components/heroSection/heroSection';
import HeroSection2 from '@/components/heroSection2/heroSection2';
import HeroSection3 from '@/components/heroSection3/heroSection3';
import InstructionMethods from '@/components/InstructionMethods/InstructionMethods';
import ProgramSection from '@/components/programCards/programCards';

const HomePage = () => {
    return (
        <div className='overflow-x-hidden'>
            <Header />
            <HeroSection />
            <NewsBanner
                bgFrom="from-primary3"
                bgTo="to-primary2"
                iconSrc="./pic1.png"
                title="Latus News"
                subtitle="Next Intake Starts on January 05, 2026"
                buttonText="CONTACT US"
                txtColor="white"
                btnColor="border-white text-white"
                onButtonClick={() => {
                    console.log("Button clicked");
                }}
            />
            <ProgramSection/>
            <HeroSection2/>
            <EnrollmentSteps/>
            <NewsBanner
                bgFrom="from-neutral2"
                bgTo="to-neutral2"
                iconSrc="./pic2.png"
                title="Latus News"
                subtitle="Next Intake Starts on January 05, 2026"
                buttonText="Register"
                txtColor="black"
                btnColor="border-primary1 text-primary1"
                onButtonClick={() => {
                    console.log("Button clicked");
                }}
            />
            <InstructionMethods/>
            <HeroSection3/>
            <NewsBanner
                bgFrom="from-neutral2"
                bgTo="to-neutral2"
                iconSrc="./pic3.png"
                title="How can we help?"
                subtitle="Ask a question. Say hello.  Our team members are here to help you get where you are going."
                buttonText="CONTACT US"
                txtColor="black"
                btnColor="border-primary1 text-primary1"
                onButtonClick={() => {
                    console.log("Button clicked");
                }}
            />
            <ContactSection/>
            <FooterSection/>
        </div>
    );
};

export default HomePage;