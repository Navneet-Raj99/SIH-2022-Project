import React,{useState} from 'react'
import MemberContext from "./MemberContext";
function MemberStates(props) {
    let s1 = {
        name: "Navneet",
        age: "20",
      };
      const [name,setname]=useState(s1);
      function changename(series)
      {  setTimeout(() => {
        setname({name:series.name,age:series.age});
      }, 1000);
          
      }
  return (
    <MemberContext.Provider 
    value={{
      name:name,
      changename:changename
    }}
    >
        {props.children}
    </MemberContext.Provider>
  )
}

export default MemberStates