import Card_blogs from '@/components/Card-blogs/Card-blogs'
import React from 'react'
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <br /><br /><br />
      <h1 className='text-4xl text-center font-bold'>Explore blogs</h1>
      <br /><br /><br />
      <div className='flex flex-row flex-wrap justify-center items-center gap-5'>

        <Link href={"/blogs/0"}><Card_blogs title={"Introduction to react "} /></Link>
        <Link href={"/blogs/1"}>  <Card_blogs title={"Routing in NextJS"} /></Link>
        <Link href={"/blogs/2"}><Card_blogs title={"What is cloud native computing"} /></Link>
        <Link href={"/blogs/3"}><Card_blogs title={"Who is devops enginner"} /></Link>
        <Link href={"/blogs/4"}> <Card_blogs title={"Future of Artificial intellegence"} /></Link>
        <Link href={"/blogs/5"}> <Card_blogs title={"Introduction to C programming language"} /></Link>
        <Link href={"/blogs/6"}> <Card_blogs title={"Javascript VS Typescript . Which is better"} /></Link>
        <Link href={"/blogs/7"}><Card_blogs title={`Python VS R? Which is better`} /></Link>
        <Link href={"/blogs/8"}><Card_blogs title={"String methods in python"} /></Link>
        <Link href={"/blogs/9"}>  <Card_blogs title={"Type safe React"} /></Link>
      </div>
    </div>
  )

}

export default Home