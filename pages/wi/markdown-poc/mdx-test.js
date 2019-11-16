import React from 'react';
import Head from 'next/head';
import ContentSection from '../../../components/shared/ContentSection';

import MarkdownInput from './mdx-input.mdx';

export default () => (
  <div>
    <Head>
      <title key="title">MDX test</title>
    </Head>
    <ContentSection backgroundColor="white" fontColor="dark" id="more-info">
      <MarkdownInput eventDate="10/10/1010" />
    </ContentSection>
  </div>
);
