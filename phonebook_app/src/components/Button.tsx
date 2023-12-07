
interface ButtonProps {
    children: React.ReactNode;
    className?:string;
    onClick?:(event: React.MouseEvent<HTMLButtonElement>) => void;

}
//? means it is optional
export default function Button(props: ButtonProps ) {

  return (
    <button onClick={props.onClick} className={props.className}>
        {props.children}
    </button>
  )
}

