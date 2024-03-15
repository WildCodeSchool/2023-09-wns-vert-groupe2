import Layout from "@/components/Layout";
import TripSearchBar, { SearchBar } from "@/components/trips/TripSearch";
import TripsList from "@/components/trips/TripsList";
import { useGetAllTripsQuery } from "@/gql/graphql";
import { useState } from "react";

export default function Journey() {
  const { data, loading, error } = useGetAllTripsQuery();
  const [search, setSearch] = useState<SearchBar>({});
  return (
    <Layout>
      <TripSearchBar search={search} setSearch={setSearch} />
      <TripsList search={search} setSearch={setSearch} />
    </Layout>
  );
}
