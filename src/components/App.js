import { useEffect, useState } from "react";

export default function App() {
  const [dataArr, setDataArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDataArr(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log({ error });
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return "Loading";
  if (dataArr.status === "error") return "Error fetching data";

  return <img src={dataArr.message} alt="A Random Dog" />;
}