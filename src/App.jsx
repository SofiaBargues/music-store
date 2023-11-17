import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import AlbumListing from './components/albumlisting/albumlisting'
function App() {
  const [count, setCount] = useState(0)
const[albums, setAlbums] =useState()
  const topAlbums = [{ name : "101" }, { name: "202" }, { name : "303" }]
  const latestAlbums = [{ name : "101a" }, { name: "202b" }, { name : "303c" }]


  
  useEffect(()=>{
    async function getData(){
        const responce = await fetch(" https://jsonplaceholder.typicode.com/albums")
        const data = await responce.json()
        setAlbums(data);
}
getData()
  },[])


  return (
    <>
      <Header/>
      <AlbumListing heading="top albums" listing={albums}/>
      <AlbumListing heading="latest albums" listing={albums}/>
    </>
  )
}

export default App
