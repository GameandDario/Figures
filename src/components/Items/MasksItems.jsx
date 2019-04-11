import React from "react";
import CardMasks from "../Card/CardMasks";
const maskcard = [
    { 
    name:"Grand", 
    country:"Cameroun", 
    photo:"https://i.pinimg.com/236x/4e/3c/c7/4e3cc7c87d52e7096002171ddb490d89.jpg", 
    description:"wood, ceremony",
},
{ 
    name:"kio", 
    country:"Burkina Faso", 
    photo:"https://i.pinimg.com/236x/95/62/e5/9562e5fb60170811c96db1c94fc93f6f.jpg", 
    description:"wood and metal",
},
{ 
    name:"Dogon", 
    country:"Peru", 
    photo:"https://i.pinimg.com/236x/e0/77/17/e07717159345e790c1586cade80f49c6.jpg", 
    description:"wood",
},
{ 
    name:"Grand", 
    country:"Burkina Faso", 
    photo:"https://i.pinimg.com/236x/08/df/12/08df12ce6b47f657d4577916e2e1dbfb.jpg", 
    description:"wood, ceremony",
},
{
    name:"Entrudo",
    country:"Portugal",
    photo:"https://i.pinimg.com/236x/03/f5/63/03f56311f71ee206432e447ecd574f9e.jpg",
    description:"",
},
{
    name:"",
    country:"Austria",
    photo:"https://i.pinimg.com/236x/46/72/db/4672db8361f559b7d7e15430a4336195.jpg",
    description:"",
},
{
    name:"Kureri Ritual",
    country:"Bulgaria",
    photo:"https://i.pinimg.com/236x/9f/bd/e1/9fbde19d6a3e1c9fe196dc7531807028.jpg",
    description:"",
},
{
    name:"",
    country:"",
    photo:"",
    description:"",
}
];

const MasksItems = () => (
    <div>
    {maskcard.map(item => 
    (
       <CardMasks {...item}
    // name = {item.name} country = {item.country} photo = {item.photo} description = {item.description}
     />
    )
        // <Travels {... travel} />
        )}
</div>
)

export default MasksItems;