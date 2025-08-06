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

const Home = React.lazy(() => import("./pages/Website/Home"));
const AboutUs = React.lazy(() => import("./pages/Website/AboutUs"));
const OurServices = React.lazy(() => import("./pages/Website/OurServices"));
const Blogs = React.lazy(() => import("./pages/Website/Blogs"));
const BlogDetails = React.lazy(() => import("./pages/Website/BlogDetails"));
const ServicePageLayout = React.lazy(() =>
  import("./components/Website/ServicePageLayout")
);
const AppDevelopment = React.lazy(() =>
  import("./pages/Website/AppDevelopment")
);
const WebDevelopment = React.lazy(() =>
  import("./pages/Website/WebDevelopment")
);
const AIAndMLDevelopment = React.lazy(() =>
  import("./pages/Website/AIAndMLDevelopment")
);
const BlockchainDevelopment = React.lazy(() =>
  import("./pages/Website/BlockchainDevelopment")
);
const CloudComputing = React.lazy(() =>
  import("./pages/Website/CloudComputing")
);
const ContactUs = React.lazy(() => import("./pages/Website/ContactUs"));
const LandingPage = React.lazy(() => import("./pages/LandingPage/LandingPage"));
const UIUX = React.lazy(() => import("./pages/Website/UIUX"));
const ChatbotDevelopment = React.lazy(() => import("./pages/Website/ChatbotDevelopment"));
const DataAnalyticsBusiness = React.lazy(() => import("./pages/Website/DataAnalyticsBusiness"));
const IoTDevelopment = React.lazy(() => import("./pages/Website/IoTDevelopment"));
const GameDevelopment = React.lazy(() => import("./pages/Website/GameDevelopment"));

AOS.init({
  once: true,
  duration: 500,
  offset: -50,
});

function App() {
  return (
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
  );
}

export default App;
