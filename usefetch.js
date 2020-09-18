import { useEffect, useState } from "react";

const body = async (res) => {
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch (err) {
    return text;
  }
};

export default function useFetch(url, options) {
  const [response, setResponse] = useState({ status: "pending" });
  useEffect(() => {
    fetch(url, options)
      .then(async (res) => {
        setResponse({ status: res.status, body: await body(res) });
      })
      .catch((err) => {
        setResponse({ status: "failed", reason: err.message });
      });
  }, [url, options]);
  return response;
}
