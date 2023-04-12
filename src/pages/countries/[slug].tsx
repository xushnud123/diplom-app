import axios from "axios";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { FC } from "react";
interface SlugProps {
  data: any;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://restcountries.com/v3.1/name/${params?.slug}`
  );

  return {
    props: {
      data: await res.data,
    },
  };
};

const Slug: FC<SlugProps> = ({ data }) => {
  return (
    <div>
      <h1> {data[0].name.official} </h1>
      <section>
        <Link href='/countries'>Back Page</Link>
      </section>
    </div>
  );
};
export default Slug;
