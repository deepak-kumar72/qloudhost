import EnterpriseGrade from "@/components/commonComponent/enterpriseGrade";
import HeroComponent from "@/components/commonComponent/heroComponent";
import InstallationPanel from "@/components/commonComponent/installationPanel";
import QlodHostServices from "@/components/commonComponent/qlodHostServices";
import WebsiteCover from "@/components/commonComponent/websiteCover";
import RussiaDedicatedPlan from "@/components/russiaDedicatedServer/russiaDedicatedPlan";
import FAQsSection from "@/components/commonComponent/faqSection";
import ChatNow from "@/components/commonComponent/chatNow";

// Server-side data fetching using getServerSideProps
export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://qloudhost.com/data/russiaDedicated.json");
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } };
  }
};

const DedicatedRussia = ({ data }) => {
  if (!data) {
    return <div></div>; // Fallback UI if data is not available
  }

  const { heroComponent } = data;

  return (
    <div>
      <HeroComponent {...heroComponent} />
      <RussiaDedicatedPlan />
      <EnterpriseGrade
        heading="Enterprise-Grade DMCA Ignored Dedicated Servers"
        subHeading="Lease a dependable and cheap dmca ignored dedicated hosting with unmetered resources for your business, 
        and enjoy unparalleled processing power coupled with top-tier security for your critical applications. 
        We provide top-notch hardware, incredibly fast network speeds, and round-the-clock support at budget-friendly rates.
         Whether you’re hosting a website or scripting a site, choose QloudHost for an exceptional experience:"
      />
      <QlodHostServices
        heading={data.featureHeading.Heading}
        content={data.featureHeading.subHeading}
        features={data.features}
      />
      <InstallationPanel
        title="Fast OS/Admin Panel Installation!"
        description="Revamp high-quality possibilities effectively instead of focusing solely on innovative ideas.
        Utilize advanced technology security measures to ensure accurate information dissemination."
        buttonText="Get Started Now"
        url="explore"
        panelOptions={[
          { name: 'cPanel', img: '/assets/icon/cPanel.png' },
          { name: 'DirectAdmin', img: '/assets/icon/directAdmin.png' },
          { name: 'CyberPanel', img: '/assets/icon/cyberPanel.png' },
          { name: 'Ubuntu', img: '/assets/icon/ubuntu.png' },
          { name: 'debian', img: '/assets/icon/debain.png' },
        ]}
      />
      <WebsiteCover />
      <FAQsSection faqs={data.faqsData} />
      <ChatNow />
    </div>
  );
};

export default DedicatedRussia;
