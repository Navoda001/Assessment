import { motion } from 'framer-motion';
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

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HomePage = () => {
  return (
    <div className='overflow-x-hidden'>
      {/* Header */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        <Header />
      </motion.div>

      {/* Hero Section */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
      </motion.div>

      {/* News Banner 1 */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
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
      </motion.div>

      {/* Program Section */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ProgramSection />
      </motion.div>

      {/* Hero Section 2 */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <HeroSection2 />
      </motion.div>

      {/* Enrollment Steps */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <EnrollmentSteps />
      </motion.div>

      {/* News Banner 2 */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <NewsBanner
          bgFrom="from-neutral2"
          bgTo="to-neutral2"
          iconSrc="./pic2.png"
          title="TAKE THE FIRST STEP"
          subtitle="Your gateway to learn Japanese  language and culture. we will support you step by step."
          buttonText="Register"
          txtColor="black"
          btnColor="border-primary1 text-primary1"
          onButtonClick={() => {
            console.log("Button clicked");
          }}
        />
      </motion.div>

      {/* Instruction Methods */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <InstructionMethods />
      </motion.div>

      {/* Hero Section 3 */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <HeroSection3 />
      </motion.div>

      {/* News Banner 3 */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <NewsBanner
          bgFrom="from-neutral2"
          bgTo="to-neutral2"
          iconSrc="./pic3.png"
          title="How can we help?"
          subtitle="Ask a question. Say hello. Our team members are here to help you get where you are going."
          buttonText="CONTACT US"
          txtColor="black"
          btnColor="border-primary1 text-primary1"
          onButtonClick={() => {
            console.log("Button clicked");
          }}
        />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <ContactSection />
      </motion.div>

      {/* Footer */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <FooterSection />
      </motion.div>
    </div>
  );
};

export default HomePage;
