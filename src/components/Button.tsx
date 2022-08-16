type Props = {
  children: string;
  size?: "big" | "small"
};

export function Button({ children, size, ...props }: Props) {
 
 let style={
    paddingTop: "10px",
    paddingBottom: "10px",
    backgroundColor: "pink"
 }

 if (size === 'small') {
    style.paddingTop = "5px"
    style.paddingBottom = "5px"
  }

  if (size === 'big') {
    style.paddingTop = "10px"
    style.paddingBottom = "10px"
  }
    return (
   <button style={style} {...props}>
     {children}
   </button>
 )
}
