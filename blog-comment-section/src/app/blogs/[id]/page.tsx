"use client";
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

const DynamicBlogSection = () => {
  const [comment, setcomment] = useState("");
  const author= 
    [
      "Author-1",
      "Author-2",
      "Author-3",
      "Author-4",
      "Author-5",
      "Author-6",
      "Author-7",
      "Author-8",
      "Author-9",
      "Author-10",
    ];

  const titles= 
    [
      "Introduction to react ",
      "Routing in NextJS",
      "What is cloud native computing",
      "Who is devops enginner",
      "Future of Artificial intellegence",
      "Introduction to C programming language",
      "Javascript VS Typescript . Which is better",
      `Python VS R? Which is better`,
      "String methods in python",
      "Type safe React",
    ];

  const [comments,setComments] = useState([
    ` maxime quibusdam repellendus autem assumenda omnis quisquam quos, quam alias mollitia natus ab velit atque illum dolorem, vero blanditiis fugit eaque.`,
    ` uscipit exercitationem. Voluptatibus commodi sequi autem quam alias mollitia natus ab velit atque illum dolorem,  fugit eaque.`,
    ` maxime quibusdam repeio cum facilis suscipit reprehenderit unde, provident, asperiores illum, quam non numquam!
    A, volupt.`,
    ` maxim sequi autem quam alias mollitia natus ab velit atque illum dolorem, vero blanditiis fugit eaque.`,
    ` maxime quibusdambus commodi sequi autem quam alias mollitia natus ab velit atque illum dolorem, vero blanditiis fugit eaque.`,
    `mollitia natus ab velit atque illum dolorem, vero blanditiis fugit eaque.`,
    ` maxime quibusdam repellendus autem assumenda omnis quisquam quos, non recusandae voluptatem. Saepe opime vel blanditiis suscipit exercitationem. Volum dolorem, vero blanditiis fugit eaque.`,
    ` maxime quibusdam repellenSaepe optio cum facilis suscipit reprem, vero blanditiis fugit eaque.`,
    ` maxime quibuss fugit eaque.`,
  ]);

  
  const myRouter = usePathname().split("/")[2];
  const id = Number(myRouter);

  const handleCommentAdd = () => {
    setComments([...comments, comment])
    setcomment("");
  }

  return (
        <div className='p-10'>
          <div className='border-2 border-solid border-black'></div>
          <br />
          <span className='text-gray-500 text-[15px]'>{new Date().toDateString()}</span>
          <br /><br />
          <div>
            <h1 className='text-[30px] font-bold text-black'>{titles[id]} <span className='text-[15px] text-gray-500'>{author[id]}</span></h1>
          </div>
          <br />
          <div>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit nostrum esse illum voluptatem nam blanditiis est, voluptas corrupti totam. Ipsum necessitatibus a dolores, debitis nemo culpa autem voluptates at?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus voluptates libero totam distinctio dolores soluta! Suscipit illum, expedita esse alias unde ipsam impedit dicta facilis et atque libero eos sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos magni quam deserunt incidunt, pariatur natus dicta non, vero praesentium, molestiae earum voluptate sint id voluptas ad eum hic consectetur quasi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit nobis expedita nisi totam rem modi officia omnis eum tenetur odio, blanditiis suscipit, quae quis sunt aperiam? Ullam distinctio ea expedita.
           <br />
           <br />
           Veniam dolore hic sequi dolores fugit minus perspiciatis debitis, laudantium consequatur ab at harum mollitia assumenda eveniet, voluptate ullam dolorem, suscipit nulla vel distinctio maiores cum! Sunt repellat excepturi dignissimos?
           Cum assumenda tenetur cumque, sint ea quo! Repudiandae reprehenderit quibusdam velit cupiditate libero accusantium placeat laborum labore id eveniet blanditiis beatae, iste doloremque officiis molestiae quos minima. Debitis, natus laborum!
           Officiis libero expedita magnam laboriosam doloremque temporibus cumque id vel facere, ut voluptas eaque reprehenderit repudiandae ex ipsum, error aperiam et perspiciatis quidem obcaecati quibusdam voluptatibus. Ea incidunt porro neque.
           Error corrupti repellendus quidem blanditiis deserunt beatae magnam autem, necessitatibus ullam odio? Deserunt odio quae, porro molestias officiis officia recusandae mollitia fuga nisi voluptas illum harum voluptates aut dolorem numquam.
           Voluptates voluptatem a esse molestiae eaque impedit reprehenderit! Laudantium amet obcaecati ad? Praesentium dignissimos voluptatibus at repellendus magnam provident repellat assumenda veniam libero repudiandae possimus ipsam impedit aspernatur, voluptas temporibus.
           <br />
           <br />
           Fuga incidunt aut labore? Asperiores quam excepturi itaque illo dolorem ratione. Doloremque veritatis amet nulla enim pariatur hic voluptatem harum, facere suscipit voluptate aperiam maxime, quae incidunt dignissimos excepturi quis.
           Libero voluptatum, officiis iste hic atque ipsum eos at numquam, minus repellendus amet enim nostrum. Tempore, rerum obcaecati dolorem impedit suscipit quidem magni minima explicabo tempora modi repudiandae iure pariatur.
           Provident at, facilis iste est ex maxime quibusdam repellendus autem assumenda omnis quisquam quos, non recusandae voluptatem. Saepe optio cum facilis suscipit reprehenderit unde, provident, asperiores illum, quam non numquam!
           A, voluptatum, quod ullam culpa eum ad porro maxime vel blanditiis suscipit exercitationem. Voluptatibus commodi sequi autem quam alias mollitia natus ab velit atque illum dolorem, vero blanditiis fugit eaque.
          </div>
    
          <br />
          <br />
          <br />
          <div className='rounded-lg border-t-2 border-solid border-black'>
            <br />
            <h1 className='text-[20px] font-bold'>Comments:</h1>
            <br />
            <div>
              {comments.map((comment:string, index:number) => {
                return <div key={index} className='w-[70vw]'>
                  <div><span className='text-2xl font-bold'>-</span> {comment}</div> <br />
                </div>
              })}
            </div>
    
            <br />
            <div className='flex flex-row flex-wrap gap-3 p-2 items-center justify-center max-md:justify-between'>
              <input type="text" name='comment' id='comment' placeholder='Enter your comment' className='w-[70vw] px-[20px] py-2' onChange={(e) => {
                setcomment(e.target.value);
              }} value={comment}/>
              <button type="button" className='rounded-lg bg-green-700 text-white text-[15px] px-[20px] py-[10px]' onClick={handleCommentAdd}>Comment</button>
            </div>
          </div>
          </div>
      )
}

export default DynamicBlogSection