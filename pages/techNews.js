import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import Image from "next/image";
import * as React from 'react';
import { format, render, cancel, register } from 'timeago.js';
import TimeAgo from "timeago-react";
import Header from "../components/Header";
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import Widgets from "../components/Widgets";
import { styled } from '@mui/material/styles';

export default function TechNews({ articles }) {
  return (

    <div className="bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>News</title>
        <link rel="icon" href="/YUV-logo-highlighted.png" />
      </Head>

      <Header />


      <main className="items-center max-w-screen-lg mx-auto p-2">
        <div
          className="bg-white dark:bg-[#1D2226] rounded-lg space-y-2 py-2.5 border border-gray-300 dark:border-none"
        >
          <div className="space-y-4 xl:space-y-6 p-2">

            <h1 className="text-3xl md:text-5xl pt-2 text-center text-amber-800/80 xl:pl-0">
              Tech News
            </h1>
            <h2 className='uppercase text-center p-1'>"Technology is best when it brings people together."</h2>
            <div className="flex items-center justify-between font-bold px-2.5">
              <h4> News</h4>
              <InfoRoundedIcon className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              {articles.slice(0, 10).map((article) => (
                <div
                  key={article.url}
                  className="flex space-x-2 items-center cursor-pointer hover:bg-black/10 dark:hover:bg-black/20 px-2.5 py-1"
                >
                  <FiberManualRecordRoundedIcon className="!h-2 !w-2" />
                  <div>
                    <h5 className="max-w-l font-medium text-sm truncate pr-10">
                      <a href={article.url} target="_blank">{article.title}</a>
                    </h5>
                    <TimeAgo
                      datetime={article.publishedAt}
                      className="text-xs mt-0.5 dark:text-white/75 opacity-80"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>


  );
}


export async function getServerSideProps(context) {
  // Get Google News API
  const results = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2e92496d26ad438db29766108e26c1f5`
  ).then((res) => res.json());

  return {
    props: {
      articles: results.articles,
    },
  };
}

