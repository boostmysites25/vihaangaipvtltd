import { Navigate, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import NormalizeSlash from "./components/NormalizeSlash";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { Toaster } from "react-hot-toast";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import React, { Suspense } from "react";
import { LoadingSpinner } from "./components/LoadingSpinner";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load components with error handling
const lazyLoad = (importFunc) => {
  return React.lazy(() => 
    importFunc().catch(err => {
      console.error('Failed to load component:', err);
      throw err; // Re-throw to be caught by ErrorBoundary
    })
  );
};

const Home = lazyLoad(() => import("./pages/Website/Home"));
const AboutUs = lazyLoad(() => import("./pages/Website/AboutUs"));
const OurServices = lazyLoad(() => import("./pages/Website/OurServices"));
const Blogs = lazyLoad(() => import("./pages/Website/Blogs"));
const BlogDetails = lazyLoad(() => import("./pages/Website/BlogDetails"));
const ServicePageLayout = lazyLoad(() => import("./components/Website/ServicePageLayout"));
const AppDevelopment = lazyLoad(() => import("./pages/Website/AppDevelopment"));
const WebDevelopment = lazyLoad(() => import("./pages/Website/WebDevelopment"));
const AIAndMLDevelopment = lazyLoad(() => import("./pages/Website/AIAndMLDevelopment"));
const BlockchainDevelopment = lazyLoad(() => import("./pages/Website/BlockchainDevelopment"));
const CloudComputing = lazyLoad(() => import("./pages/Website/CloudComputing"));
const ContactUs = lazyLoad(() => import("./pages/Website/ContactUs"));
const LandingPage = lazyLoad(() => import("./pages/LandingPage/LandingPage"));
const UIUX = lazyLoad(() => import("./pages/Website/UIUX"));
const ChatbotDevelopment = lazyLoad(() => import("./pages/Website/ChatbotDevelopment"));
const DataAnalyticsBusiness = lazyLoad(() => import("./pages/Website/DataAnalyticsBusiness"));
const IoTDevelopment = lazyLoad(() => import("./pages/Website/IoTDevelopment"));
const GameDevelopment = lazyLoad(() => import("./pages/Website/GameDevelopment"));

AOS.init({
  once: true,
  duration: 500,
  offset: -150,
});

function App() {
  return (
    <ErrorBoundary>
      <SpinnerContextProvider>
        <Suspense fallback={<LoadingSpinner />}>
          <NormalizeSlash>
            <ScrollToTop />
            <LoadingSpinnerContext />
            <WhatsAppIcon />
            <Toaster
              position="top-bottom"
              toastOptions={{
                style: {
                  background: "#010C2A",
                  color: "#ffffff",
                },
              }}
            />
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:title" element={<BlogDetails />} />

            {/* Services Detail Routes with Layout */}
            <Route path="/services" element={<ServicePageLayout />}>
              <Route path="web-development" element={<WebDevelopment />} />
              <Route path="app-development" element={<AppDevelopment />} />
              <Route
                path="ai-ml-development"
                element={<AIAndMLDevelopment />}
              />
              <Route
                path="blockchain-solutions"
                element={<BlockchainDevelopment />}
              />
              <Route
                path="cloud-computing-services"
                element={<CloudComputing />}
              />
              <Route path="ui-ux" element={<UIUX />} />
              <Route path="chatbot-development" element={<ChatbotDevelopment />} />
              <Route path="data-analytics-business" element={<DataAnalyticsBusiness />} />
              <Route path="iot-development" element={<IoTDevelopment />} />
              <Route path="game-development" element={<GameDevelopment />} />
            </Route>

            {/* Landing Pages */}
            <Route
              path="/web-development"
              element={<LandingPage page={"web-development"} />}
            />
            <Route
              path="/app-development"
              element={<LandingPage page={"app-development"} />}
            />
          </Routes>
          </NormalizeSlash>
        </Suspense>
      </SpinnerContextProvider>
    </ErrorBoundary>
  );
}

export default App;
