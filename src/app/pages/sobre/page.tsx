import Link from "next/link";
import './sobre.css';

export default function sobre() {
  return (

  <div>
    <header className="grid grid-rows p-4 items-center justify-items-center">
    <div className="logo">
          <svg fill="none" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" fill="none" viewBox="0 0 394 80"><path fill="#fff" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#fff" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
    </div> 
    <div>
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44" href='/' rel="noopener noreferrer"
          >Início</Link>

          <Link className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] bg-[#1a1a1a] ;hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44" href='/pages/sobre' rel="noopener noreferrer"
          >Sobre</Link>

          <Link className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44" href='/pages/contatos' rel="noopener noreferrer"
          >Contatos</Link>

          <Link className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44" href='/pages/produtos' rel="noopener noreferrer"
          >Produtos</Link>
        </div>
      </div>
      </div>
    </header>

    <main className="sobre">
        <div className="card">
          <div className="content">
            <p className="heading">Sobre a empresa</p>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laboriosam
              at voluptas minus culpa deserunt delectus sapiente inventore pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore ipsam, obcaecati deserunt esse libero voluptate minima odio fugiat excepturi unde expedita, veritatis accusantium adipisci aliquid doloribus, sunt quas. Deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fuga necessitatibus optio repudiandae natus beatae praesentium. Reiciendis, modi. Sit, ipsam? Deleniti quam, reiciendis natus fugiat facilis nemo asperiores tenetur! Animi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum magnam architecto, dolorum velit officiis esse quis voluptatum nemo sapiente quia eum reiciendis id, a officia vero deserunt natus, quisquam vel! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta libero dolore exercitationem error fugit architecto hic natus. Tempora, distinctio dolores quidem sint, explicabo, harum fugit aut ipsam rerum inventore fugiat! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum a, cum quidem unde amet harum inventore cumque, delectus facere, maxime aperiam corrupti similique voluptatem sapiente temporibus expedita placeat commodi nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vitae quod quas temporibus blanditiis. Dicta saepe perferendis dolores vel ipsa beatae modi voluptas rerum? Maiores praesentium quisquam ratione facere aperiam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa debitis ad expedita temporibus ex voluptas, deserunt hic corrupti quia recusandae doloribus mollitia minus commodi! Sapiente aut illo veritatis corporis similique. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi labore sunt voluptates iste, sint, cum sequi necessitatibus quaerat unde consequatur quam. Reprehenderit consequatur nemo obcaecati ullam veritatis cupiditate consequuntur tenetur.
            </p>
          </div>
      </div>
    </main>
  </div>
  );
}
