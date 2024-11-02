import { useEffect,useState } from 'react';
import './Card.css'


function Card(){

const [isClicked, switchClick]=useState(false)
const [testPerson, setName]=useState({
    name:'',
    img:''
})
  

useEffect(()=> {
    const fetchData = async ()=> {
    let response = await fetch('https://hp-api.onrender.com/api/characters');
    let rawData = await response.json()
    let data = rawData.filter(item => item["image"]!=="");
    console.log(data);

    let index = Math.floor(Math.random()*data.length);
    let name = data[index]['name'];
    let img = data[index]['image'];

    setName({
        name: name,
        img: img
    });
    };
    fetchData();
    },[isClicked])   

    return (
        <div className="card">
            <button
                onClick={()=> switchClick(!isClicked)}
            >Switch Card</button>
            <p>I am a card</p>
            <p> {testPerson.name} from API</p>
            <img 
                src={testPerson.img} 
                alt={testPerson.name}
                onClick={()=> switchClick(!isClicked)}
            />
        </div>
    )
}


export {Card}