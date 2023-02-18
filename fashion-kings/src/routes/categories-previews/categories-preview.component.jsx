import { useContext } from "react";
import { Fragment } from "react"
import { CategoriesContext } from "../../context/categories.context";


const CategoriesPreview =()=>{
  const {categories }=useContext(CategoriesContext);
    return(
        <Fragment>
        
         {
            categories.map((category,index)=>{
                return <CategoriesPreview key={index} category={category}/>
            })
         }
        </Fragment>
    )
}
export default CategoriesPreview;