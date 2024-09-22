import Head from 'next/head';
import Script from 'next/script';
import Loader from '../components/Loader'; // Import the loader component
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import CounterSection from '../components/CounterSection';
import About from '../components/About';
import Skills from '../components/Skills.js'
import Services from '../components/Services';
import Projects from '@/components/Projects';
import ContactSection from '../components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Clyde - Free Bootstrap 4 Template</title>
        <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
        {/* Bootstrap, jQuery, and other external libraries */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        {/*  Bootstrap CSS */}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css" integrity="sha384-dpuaG1suU0eT09tx5plTaGMLBsfDLzUCCUXOY2j/LSvXYuG6Bqs43ALlhIqAJVRb" crossorigin="anonymous"></link>
      </Head>
{/*      
      <Loader />
       */}
      <Navbar />
      <Slider />
      <CounterSection />
      <About />
      <Skills />
      <Services />
      <Projects />
      <ContactSection />
      <Footer />
      {/* Scripts for the app */}
      {/* Option 1: Bootstrap Bundle with Popper */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></Script>
      <Script src="https://code.jquery.com/jquery-3.3.1.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" strategy="beforeInteractive" />
      <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" strategy="beforeInteractive" />
      <Script src="/js/jquery.easing.1.3.js" strategy="lazyOnload" />
      <Script src="/js/jquery.waypoints.min.js" strategy="lazyOnload" />
      <Script src="/js/jquery.stellar.min.js" strategy="lazyOnload" />
      <Script src="/js/owl.carousel.min.js" strategy="lazyOnload" />
      <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
      <Script src="/js/jquery.animateNumber.min.js" strategy="lazyOnload" />
      <Script src="/js/scrollax.min.js" strategy="lazyOnload" />
      
      {/* Google Maps API */}
      <Script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&sensor=false" strategy="lazyOnload" />
      
      {/* Google Analytics */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-23581568-13');
        `}
      </Script>

      {/* Cloudflare Insights */}
      <Script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015"
        integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ=="
        data-cf-beacon='{"rayId":"8c1e36ebab9c1546","token":"cd0b4b3a733644fc843ef0b185f98241"}'
        crossOrigin="anonymous"/>
    </>
  );
}
