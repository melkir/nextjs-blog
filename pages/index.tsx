import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <p className="mt-3 text-xl sm:mt-4">
        Hello, I&lsquo;m Thibault. I&lsquo;m a software engineer. Curious to
        gain more knowledge about computer science.
      </p>

      <section className="text-lg p-px pt-6">
        <h2 className="font-bold text-2xl my-4">Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className="mt-5" key={id}>
              <Link href={`/posts/${id}`}>
                <a className="text-blue-600">{title}</a>
              </Link>
              <br />
              <small className="text-gray-600">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
