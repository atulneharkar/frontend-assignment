import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { getJwtToken } from "../../helpers/userHelper";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import { GET_HOME_PAGE_DATA } from "../../ApolloClient";
import "./Home.scss";

function Home() {
  const navigate = useNavigate();
  const jwtToken = getJwtToken();

  useEffect(() => {
    if (!jwtToken) {
      return navigate("/login");
    }
  });

  const { loading, error, data } = useQuery(GET_HOME_PAGE_DATA);

  if (error) return <div>Error while fetching the data.</div>;

  return (
    <>
      <Header />
      {data && (
        <div className="bg-gray-100">
          <div className="xl:container mx-auto px-6">
            <div className="pt-9 pb-3 mobile:pt-4 mobile:pb-6">
              <h2
                className="text-4xl mobile:text-2xl font-semibold leading-normal mb-1 text-gray-800 mobile:mb-3 page-title"
                id="simple"
              >
                {data.homePage.data.attributes.PageTitle}
              </h2>
              <p className="mb-8 page-description mobile:hidden">
                {data.homePage.data.attributes.PageDescription}
              </p>

              <div>
                {data.homePage.data.attributes.PageSections.map((section) => {
                  return (
                    <div key={section.id} className="mb-6">
                      <h3
                        className="text-2xl mobile:text-base font-medium leading-normal mt-0 mb-5 text-gray-800"
                        id="simple"
                      >
                        {section.SectionTitle}
                      </h3>

                      <div className="grid grid-cols-4 gap-5 mobile:grid-cols-1 mobile:gap-6">
                        {section.Cards.map((card, index) => {
                          return <Card card={card} key={index} />;
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && <Loader />}
      <Footer />
    </>
  );
}

export default Home;
