import axios from "axios";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface CountriesProps {}

const Countries: FC<CountriesProps> = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const res = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");

      setData(response.data);
      console.log(response);
    };
    res();
  }, []);
  return (
    <div>
      <ul>
        {
          // @ts-ignore
          data?.map((item) => (
            <li key={item.name.official}>
              <Link href={`countries/${item.name.official}`}>
                {item.name.official}
              </Link>
            </li>
          ))
        }
      </ul>{" "}
    </div>
  );
};
export default Countries;
