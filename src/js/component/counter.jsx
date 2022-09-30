import React from "react";

export const Counter = (props) => {
return(

    

        <div className="container text-center">
            <div className="row align-items-center px-1 py-5 my-5 bg-dark">

                <div className="col text-white border rounded border-secondary px-1 py-5 mx-2">
                 <i class="far fa-clock fa-4x"></i>
                </div>
                <div className="col text-white display-4 border rounded border-secondary px-1 py-5 mx-2">
                {props.tiempo6}
                </div>
                <div className="col text-white display-4 border rounded border-secondary px-1 py-5 mx-2">
                {props.tiempo5}
                </div>
                <div className="col text-white display-4 border rounded border-secondary px-1 py-5 mx-2">
                {props.tiempo4}
                </div>
                <div className="col text-white display-4 border rounded border-secondary px-1 py-5 mx-2">
                {props.tiempo3} 
                </div>
                <div className="col text-white display-4 border rounded border-secondary px-1 py-5 mx-2">
                {props.tiempo2}
                </div>
                <div className="col text-white display-4 border rounded border-secondary px-1 py-5 mx-2">
                {props.tiempo}
                </div>
                <button className="bg-dark text-white display-1 my-2 border-secondary" type="button" onClick={()=>{clearInterval(props.stop)}}>Stop</button>
            </div> 
  
        </div>
   

   

)
};