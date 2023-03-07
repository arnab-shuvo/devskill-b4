import logo from './logo.svg';
import './App.css';
import Items from './Items';
import ItemDetails from './ItemDetails';
import { useEffect, useState } from 'react';

	

const dummyitemList = [
          {
            id:"1",
            name: 'Samsung A52',
            description: 'Qualcommn SnapDragon s720G',
            price: '32000',
            category: 'Mobile_Samsung_snapdragon',
          },
          {
            id:"2",
            name: 'Samsung A52s',
            description: 'Qualcommn SnapDragon s778G',
            price: '46000',
            category: 'Mobile_Samsung_snapdragon',
          },
          {
            id:"3",
            name: 'Samsung A53',
            description: 'Smasung exynos 1201',
            price: '48000',
            category: 'Mobile_Samsung_exynos',
          },
      ];

function App() {
  const[itemList, setItem]=useState([]);
  const[detail, setDeatil]=useState(null);

  useEffect(()=>{
    setItem(dummyitemList);
  },[])
  return (
        <>
        {!detail && (
           <Items item_List={itemList} setItemDetail={setDeatil}/>
        )}
        {detail && (
           <ItemDetails item={detail} setItemDetail={setDeatil}/> )}
        </>

  );
}

export default App;
 