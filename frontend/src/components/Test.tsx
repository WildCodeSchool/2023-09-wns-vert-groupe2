import { gql, useQuery } from "@apollo/client";

const ME = gql`
  query Me {
    me {
      id
      email
    }
  }
`;

export const Test = () => {
  const { loading, error, data } = useQuery(ME);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {data && (
        <div>
          Utilisateur connecté :
          <pre>{data && JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
