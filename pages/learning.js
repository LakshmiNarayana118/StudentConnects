import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Card, CardActions } from '@mui/material';
import { useState } from 'react';
import Header from "../components/Header";

function Learning() {
  return (
    <div className="bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>Learning</title>
        <link rel="icon" href="/Users/anirudhreddy/Desktop/anirudh/public/mvsrlogo.jpeg" />
      </Head>

      <Header />

      <main className="items-center max-w-screen-lg mx-auto p-2">
        <div
          className={`bg-white dark:bg-[#1D2226] ${
            true ? "rounded-lg" : "rounded-lg"
          } space-y-2 py-2.5 border border-gray-300 dark:border-none`}
        >
          <div className="space-y-4 xl:space-y-6 p-2">
            <h1 className="text-3xl md:text-5xl pt-2 text-center text-amber-800/80 xl:pl-0">
              Learning resources
            </h1>
            <h2 className='uppercase text-center p-1'>"Never Stop Learning, because life never stops teaching📚."</h2>
          </div>
          <br />

          <div className="flex flex-wrap space-y-6 ">
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto dark:bg-white dark:text-black">
              <iframe className='p-4 m-4' src="https://www.youtube.com/embed/hdI2bqOjy3c"></iframe>
              <div className="px-6 py-4 items-center">
                <div className="font-bold text-xl mb-2">JavaScript Crash Course For Beginners</div>
                <p className="text-gray-700 text-base">
                  In this crash course, we will go over the fundamentals of JavaScript including more modern syntax like classes, arrow functions, etc. This is the starting point on my channel for learning JS.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#web</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JS</span>
              </div>
              <CardActions>
                <Link href="/mock-test/javascript" passHref>
                  <Button size="small" color="primary">
                    Take Mock Test
                  </Button>
                </Link>
              </CardActions>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto dark:bg-white dark:text-black">
              <iframe className='p-4 m-4' src="https://www.youtube.com/embed/fBNz5xF-Kx4"></iframe>
              <div className="px-6 py-4 items-center">
                <div className="font-bold text-xl mb-2">Node.js Crash Course</div>
                <p className="text-gray-700 text-base">
                  In this crash course, we will explore Node.js fundamentals including modules such as path, url, fs, events and we will create an HTTP server from scratch without Express and deploy to Heroku.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NodeJS</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#web</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#npm</span>
              </div>
              <CardActions>
                <Link href="https://www.tutorialsteacher.com/online-test/nodejs-test" passHref>
                  <Button size="small" color="primary">
                    Take Mock Test
                  </Button>
                </Link>
              </CardActions>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto dark:bg-white dark:text-black">
              <iframe className='p-4 m-4' src="https://www.youtube.com/embed/NzZXz3fJf6o"></iframe>
              <div className="px-6 py-4 items-center">
                <div className="font-bold text-xl mb-2">Cloud Computing Course</div>
                <p className="text-gray-700 text-base">
                  In this crash course, we will cover an overview of cloud computing, including trends in computing, distributed computing, on-demand self-service provisioning of resources, broad network access, resource pooling, rapid elasticity, and measured service.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CloudComputing</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#VirtualizedInstance</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CloudServices</span>
              </div>
              <CardActions>
                <Link href="https://www.vskills.in/practice/cloud-computing-professional-mock-test" passHref>
                  <Button size="small" color="primary">
                    Take Mock Test
                  </Button>
                </Link>
              </CardActions>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto dark:bg-white dark:text-black">
              <iframe className='p-4 m-4' src="https://www.youtube.com/embed/3dHNOWTI7H8"></iframe>
              <div className="px-6 py-4 items-center">
                <div className="font-bold text-xl mb-2">Angular Crash Course</div>
                <p className="text-gray-700 text-base">
                  In this crash course, we will cover the fundamentals of Angular. You will learn about components, modules, data binding, services, routing, and more.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Angular</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TypeScript</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Beginners</span>
              </div>
              <CardActions>
                <Link href="https://www.vskills.in/practice/angular-6-mock-test" passHref>
                  <Button size="small" color="primary">
                    Take Mock Test
                  </Button>
                </Link>
              </CardActions>
            </div>

             <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto dark:bg-white dark:text-black">
              <iframe className='p-4 m-4' src="https://www.youtube.com/embed/w7ejDZ8SWv8"></iframe>
              <div className="px-6 py-4 items-center">
                <div className="font-bold text-xl mb-2">React JS Crash Course </div>
                <p className="text-gray-700 text-base">
                Get started with React in this crash course. We will be building a task tracker app and look at components, props, state, hooks, working with an API and more.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Angular</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TypeScript</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Beginners</span>
              </div>
              <CardActions>
                <Link href="https://www.vskills.in/practice/reactjs-mock-test" passHref>
                  <Button size="small" color="primary">
                    Take Mock Test
                  </Button>
                </Link>
              </CardActions>
            </div> 

            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto dark:bg-white dark:text-black">
              <iframe className='p-4 m-4' src="https://www.youtube.com/embed/SWYqp7iY_Tc"></iframe>
              <div className="px-6 py-4 items-center">
                <div className="font-bold text-xl mb-2">Git and GitHub Crash Course For Beginners</div>
                <p className="text-gray-700 text-base">
                In this Git tutorial we will talk about what exactly Git is and we will look at and work with all of the basic and most important commands such as add, commit, status, push and more. This tutorial is very beginner friendly.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Angular</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TypeScript</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Beginners</span>
              </div>
              <CardActions>
                <Link href='https://www.udemy.com/course/git-github-practice-tests-and-interview-questions-basic-advanced/' passHref>
                  <Button size="small" color="primary">
                    Take Mock Test
                  </Button>
                </Link>
              </CardActions>
            </div> 
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default Learning;

