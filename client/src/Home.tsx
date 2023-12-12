import useFetchData from "./hooks/useFetchData";
import { ResponseData } from "./types";

function Home() {
  const { data, error, loading }: ResponseData = useFetchData();

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <section>
        {loading ? <div>Loading...</div> : <div>{data.message}</div>}
      </section>
    </>
  );
}

export default Home;
