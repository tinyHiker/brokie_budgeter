// rrd imports
import { Outlet, useLoaderData } from "react-router-dom";

// assets

import {  getAllMatchingItems } from "../helpers";

// components
import Nav from "../components/Nav";

//  helper functions
import { fetchData } from "../helpers"

// loader
export async function mainLoader({ params }) {
  
  const userName = fetchData("userName");

  if (params.id){
    const budget = await getAllMatchingItems({
      category: "budgets",
      key: "id",
      value: params.id,
    })[0];
    return {userName, budget: budget}
  }

  


  return { userName, budget: undefined }
}

const Main = () => {
  const { userName, budget } = useLoaderData()

  

  return (
    <div className="layout">
      <Nav userName={userName} budget={budget} />
      <main>
        <Outlet />
      </main>
      
    </div>
  )
}
export default Main