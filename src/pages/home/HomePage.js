import { useState, useEffect } from "react";
import CardContent from "../../components/CardContent";
import { getHeadlines } from "../../services/news";
import * as style from "./HomePage.style";

const HomePage = () => {
  const [headlines, setHeadlines] = useState([]);
  const [requestStatus, setRequestStatus] = useState("pending");

  useEffect(() => {
    async function fetchHeadlines() {
      const headlines = await getHeadlines();
      console.log(headlines);
      setHeadlines(headlines);
      setRequestStatus("done");
    }
    fetchHeadlines();
  }, []);

  return (
    <style.PageContainer>
      <style.Heading>News Consumer</style.Heading>
      <style.Content>
        {requestStatus === "pending" ? (
          <>Loading</>
        ) : (
          headlines.map(({ title, url, description, publishedAt }, key) => (
            <CardContent
              key={key}
              title={title}
              subtitle={`Publicado em ${publishedAt}`}
              paragraph={description}
              buttonLabel="Ir para a notícia"
              onClickButton={() => window.open(url)}
            />
          ))
        )}
      </style.Content>
    </style.PageContainer>
  );
};

export default HomePage;
