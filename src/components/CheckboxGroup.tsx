type Props={
question: string
name: string
options: []
}

export function CheckBoxGroup({question, options, name, ...props}:Props){
    return(
        <>
            {question}
        {options.map(item=>(
            <label >
            <input value={item} name={name} type="checkbox"></input>
            {item}
            </label>
            
        ))}
      
      </>
    )
}

