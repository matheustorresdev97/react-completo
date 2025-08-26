import { Head } from "../../components/helper/head";
import { useFetch } from "../../hooks/useFetch";
import { STATS_GET } from "../../api";
import { Loading } from "../../components/helper/loading";
import { Error } from "../../components/helper/error";
import { lazy, Suspense, useEffect } from "react";
const UserStatsGraphs = lazy(() =>
  import("../../components/user-stats-graphs")
);

export default function UserStats() {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem("token");
      const { url, options } = STATS_GET(token);
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </Suspense>
    );
  else return null;
}
