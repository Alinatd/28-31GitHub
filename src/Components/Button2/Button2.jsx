import React, { useState } from "react";
import { User } from "../User/User";
import { employes } from "../../data";
import css from './Button.module.css'


export const Button2 =()=>{
    const [status,setStatus] = useState ("")

    const filterStatus =()=>{
        switch(status){
            case "KYRGYZSTAN" :
                let stat4 = employes.filter((el)=>{
                    return el.age >18 && el.age<24 && el.status =="KYRGYZSTAN"
                })
                return stat4.map((el,id)=>{
                    return <User el={el} key={id} />
                })
                case "USA" :
                    let stat5 = employes.filter((el)=>{
                        return el.age >18 && el.age<24 && el.status !="KYRGYZSTAN"
                    })
                    return stat5.map((el,id)=>{
                        return <User el={el} key={id} />
                    })
        }
    }
    return <div>
        <div className={css.ages}>
            <button className={css.button} onClick={()=>setStatus("KYRGYZSTAN")}>KYRGYZSTAN</button>
            <button className={css.button} onClick={()=>setStatus("USA")}>OTHERS</button>
        </div>
        <div className="container">
           {filterStatus()}
        </div>
    </div>
}