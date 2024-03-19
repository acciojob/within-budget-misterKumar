import React,{useState} from 'react'
import items from "../data/items";

const Budget = () => {
    console.log(items)

    const [price, setPrice] = useState()
    console.log("Price : ",price)

  return (
    <div>
        <h4>Enter Your budget to check available items: </h4>
        <input type='number' onChange={(e)=>{
            setPrice(e.target.value)
            console.log(e.target.value)
        }} />
        <table>
            <thead>
                <th>
                    <td>
                        Items you can buy are in Green color
                    </td>
                </th>
            </thead>
            <tbody>
                {
                    items.map((item,index)=>(
                        <tr key={index}>
                            <td>{item.item}</td>
                            {
                                item.price>price ? 
                                <td style={{color:"rgb(255, 0, 0)"}}>{item.price}</td> :
                                <td style={{color:"rgb(0, 128, 0)"}}>{item.price}</td> 
                            }
                        </tr>
                    ))
                }

            </tbody>
        </table>
    </div>
  )
}

export default Budget