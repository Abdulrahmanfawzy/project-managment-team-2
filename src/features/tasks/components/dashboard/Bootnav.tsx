import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import  imgg from './team3.jpg';

function Bootnav() {

const nav = [
{ title: "Dashboard" },
{ title: "Projects" },
{ title: "Tasks" },
{ title: "Chats" },
{ title: "Meetings" },
];

return (

<nav className="w-full bg-white rounded-3xl shadow-md px-10 py-5 flex justify-between items-center">

<div className="text-2xl font-bold">
Collabspace
</div>


<ul className="flex gap-5">

{nav.map((item,index)=>(

<li
key={index}

className={`px-5 py-2 rounded-full cursor-pointer
${
index===0
?
"bg-blue-500 text-white"
:
"text-gray-600 hover:bg-gray-100"
}`}

>

{item.title}

</li>

))}

</ul>


<div className="flex items-center gap-5">

<div className="bg-gray-100 rounded-full px-4 py-2 flex items-center gap-3">

<FaSearch/>

<input
type="text"
placeholder="Search"
className="bg-transparent outline-none"
/>

</div>


<FiBell className="text-2xl cursor-pointer"/>


<div className="flex items-center gap-3">

<img
src={imgg}
alt=""
className="w-10 h-10 rounded-full object-cover"
/>

<span>
Mohamed Salah
</span>

</div>

</div>

</nav>

);

}

export default Bootnav;