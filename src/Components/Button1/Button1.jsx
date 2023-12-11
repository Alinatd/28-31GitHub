import React, { useState } from "react";
import { User } from "../User/User";
import { employes } from "../../data";
import css from './Button.module.css'

export const Button1 =()=>{
    const [status,setStatus] = useState ("")

    const filterStatus =()=>{
        switch(status){
            case "KYRGYZSTAN" :
                let stat = employes.filter((el)=>{
                    return el.age >18 && el.status =="KYRGYZSTAN"
                })
                return stat.map((el,id)=>{
                    return <User el={el} key={id} />
                })
                case "USA" :
                    let stat1 = employes.filter((el)=>{
                        return el.age >18 && el.status !="KYRGYZSTAN"
                    })
                    return stat1.map((el,id)=>{
                        return <User el={el} key={id} />
                    })
                    
        }
    }
    return  <div>
        <div className={css.ages}>
            <button className={css.button} onClick={()=>setStatus("KYRGYZSTAN")}>KYRGYZSTAN</button>
            <button className={css.button} onClick={()=>setStatus("USA")}>OTHERS</button>
        </div>
        <div className="container">
            <div>
            {filterStatus()}
            </div>
          
        </div>
    </div>
}