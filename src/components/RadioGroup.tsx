type Props={
    question: string
    name: string
    options: []
    }

export function RadioGroup({question, options, name }: Props){
    return(
        <>
{question}
{options.map(option=>(
 <label>
 <input type="radio" name={name} value={option}></input>
 {option}
</label>
))}
       
        </>
    )
}