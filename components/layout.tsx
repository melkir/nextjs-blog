import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Thibault Vieux";
export const siteTitle = "Thibault Vieux";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center mt-12">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full"
              height={144}
              width={144}
              alt={name}
            />
            <h1 className="my-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
              {name}
            </h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className="rounded-full"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-3xl">
              <Link href="/">
                <a className="text-inherit">{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main className="flex-auto items-center max-w-2xl mx-auto my-4">
        {children}
        {!home && (
          <div className="my-6 text-blue-600">
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </main>
      <footer className="w-full max-w-container mx-auto border-t py-6 text-center text-sm text-gray-500 sm:flex sm:items-center sm:justify-center">
        Made with ❤️ by @melkir
      </footer>
    </>
  );
}
