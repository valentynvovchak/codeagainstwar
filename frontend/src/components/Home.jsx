import   React         from "react";
import { Link }        from 'react-router-dom';
import   HeroCard      from "./helpers/HeroCard";
import   AboutBlock    from "./helpers/AboutBlock";
import   LearningBlock from "./helpers/LearningBlock";
import   PartnersBlock from "./helpers/PartnersBlock";
import   Header        from "./Header";
import   Footer        from "./helpers/Footer"

function Home({ pageRefs }) {
  return (
    <div
      ref={(el) => (pageRefs.current = { ...pageRefs.current, home: el })}
      className=""
    >
      <Header pageRefs={pageRefs} />
      <div className="flex justify-center self-center">
        <div className="grid grid-cols-3 sm:grid-cols-1">
          <HeroCard img="solider-1.webp" title="Help Ukraine" />
          <Link to="/challenges">
            <HeroCard img="solider-1.webp" title="Take Challenges" />
          </Link>

          <HeroCard img="solider-1.webp" title="Get Job Offers" />
        </div>
      </div>
      <AboutBlock pageRefs={pageRefs} />
      <LearningBlock pageRefs={pageRefs} />
      <PartnersBlock pageRefs={pageRefs} />
      <Footer />
    </div>
  );
}
export default Home;
