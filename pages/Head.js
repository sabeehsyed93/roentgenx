import Head from "next/head";

const PageHead = ({ title }) => {
  return (
    <>
      <Head>
        <title>{`${title} || Roentgenx - Medical Imaging AI Platform`}</title>
        <meta name="description" content="Roentgenx - Advanced Medical Imaging AI Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/images/logo/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default PageHead;
