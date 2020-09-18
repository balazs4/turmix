export default function Index(props) {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
}
