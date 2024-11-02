import { useEffect,useState } from 'react';
import './Card.css'

function Card(){

const [testName, setName]=useState("test")
    
useEffect(()=> {
    const fetchData = async ()=> {
    let response = await fetch('https://hp-api.onrender.com/api/characters');
    console.log(response)
    let data = await response.json();

    let name = data[0]['name'];
    console.log(name);
    setName(name);
    };
    fetchData();
    },[])   

    return (
        <div className="card">
            <p>I am a card</p>
            <p> {testName} from API</p>
        </div>
    )
}


async function getName(){

    let response = await('https://hp-api.onrender.com/api/characters');
    let data = await response.json();

    let name = data[0]['name']

    return name
}









export {Card}