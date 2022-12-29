import Link from 'next/link';
import { useRouter } from "next/router";

const Header = () => {

  const router = useRouter();
  
  return (
    <>
    <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <div class="logo">
        <h1 class="text-light"><a href="index.html">Serenity</a></h1>        
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li className={router.pathname == "/" ? "active" : ""}><Link href="/">Home</Link></li>
          <li><Link href="/aboutus">Aboutus</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contactus">Contact</Link></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    </>
  )
}

export default Header