import React from 'react'

type Props = {
    //onClick(): string;
    //onClick(text: string): void;
    // onClick: (text: string) => void;
   // onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// const Button = ({onClick}: Props) => {
//     return (
//         <div>
//            <button onClick={onClick}>Click me</button> 
//         </div>
//     )
// }

const Button:React.FC<Props> = ({onClick, children}) => {
    return (
        <div>
           <button onClick={onClick}>{children}</button> 
        </div>
    )
}

export default Button
