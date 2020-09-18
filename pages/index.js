import { useRouter } from "next/router";
import useFetch from "usefetch";

export default function Index(props) {
  const router = useRouter();
  const response = useFetch(`/api${router.asPath}`);
  if (response.status === `pending`) return `Please wait...`;
  if (response.status === `failed`) return <p>{response.reason}</p>;
  if (response.status === 200) {
    return <pre>{JSON.stringify(response.body, null, 2)}</pre>;
  }
  return <pre>{JSON.stringify(response, null, 2)}</pre>;
}
