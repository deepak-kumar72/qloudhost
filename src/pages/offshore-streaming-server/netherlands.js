import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import TechnicalSpecification from "@/components/commonComponent/technicalSpecification";
import NetherLandStreamingFeature from "@/components/netherlandStreamingServer/netherlandStreamingFeature";
import NetherLandStreamingPlan from "@/components/netherlandStreamingServer/netherlandStreamingPlan";
import OpenTicket from "@/components/netherlandStreamingServer/openTicket";
import PopularStreamingUse from "@/components/streamingServer/popularStreamingUse";
import Guarantees from "@/components/streamingServer/qloudHostGurantees";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/netherlandStreaming.json");
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const NetherlandStreaming = ({ data }) => {
  if (!data) {
    return <div></div>; // Fallback UI if data is not available
  }

  const { heroComponent } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <NetherLandStreamingPlan />
      <OpenTicket />
      <Guarantees
        subHeading='Boost your website performance with world-class Best & Cheap Netherlands streaming servers and guaranteed performance.'
      />
      <TechnicalSpecification />
      <InstallationPanel
        title="Operating Systems"
        description="Install your desired OS in just a matter of seconds!"
        buttonText="Get Started Now"
        url="#explore"
        panelOptions={[
          { name: 'cPanel', img: '/assets/icon/cPanel.png' },
          { name: 'CyberPanel', img: '/assets/icon/cyberPanel.png' },
          { name: 'Ubuntu', img: '/assets/icon/ubuntu.png' },
          { name: 'Windows', img: '/assets/icon/window-icon.png' },
          { name: 'Debian', img: '/assets/icon/debain.png' },
        ]}
      />
      <NetherLandStreamingFeature />
      <QlodHostServices
        heading={data.featureHeading.Heading}
        content={data.featureHeading.subHeading}
        features={data.features}
      />
      <PopularStreamingUse />
      <FAQsSection faqs={data.faqsData} />
      <ChatNow />
    </div>
  );
};

export default NetherlandStreaming;
