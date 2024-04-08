import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  
  return (
    <div className='explore_menu' id="explore_menu">
      <h1>Explore Our Menu</h1><br/>
      <p className='explore_menu_text'>Choose the Restaurant to order from and add the food items to the cart. Add or remove food items to the cart before making the final order.Be sure to be constantly aware of what's happening and excited about tasty meal.</p>
    <div className='explore_menu_list'>
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev =>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore_menu_list_item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
    </div>
    <hr/>
    </div>
  )
}

export default ExploreMenu
