"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import ns from "../Styles/NavStyle.module.css"
import { Home , Mail ,FolderKanban ,GanttChartSquare ,Menu , X} from 'lucide-react'
const Nav = () => {

    const [menur, setmenur] = useState(true)

  return (
<>
<center>
    <main className={ns.mainnav}>
     <Link href='./'><h2 className={ns.logo}>
        Portfolio
     </h2></Link>
     <div onClick={()=> setmenur(!menur)} className={ns.menu}>{menur?<Menu size={40} />:<X size={40}/>}</div>
     <ul className={menur?`${ns.list}`:`${ns.lista}`}>
<Link href='./'>     <li className={ns.item}> <Home size={20}/> Home</li></Link>
<Link href='projects'>     <li className={ns.item}> <FolderKanban size={20} /> Project</li></Link>
  <Link href='/Blogs'>   <li className={ns.item}> <GanttChartSquare size={20} /> Blogs</li></Link>
<Link href='/contact'>     <li className={ns.item}> <Mail size={20} /> Contact</li></Link>
             
             
     </ul>
    </main>
</center>
</>
  )
}

export default Nav