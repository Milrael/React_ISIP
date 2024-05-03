// import { FC } from "react";
import { ButtonProps } from "./Button.props";
import styles from './Button.module.css';
import cn from 'classnames';



// export const ButtonAlt: FC<ButtonProps> = ({children, className, ...props}) => {
//     return (
//         <button className={className} {...props}>{children}</button>
//     ) 
// }


function Button({children, className, buttonStyle = 'small', ...props}: ButtonProps) {
    return (
        <button className={cn(styles['button'], styles['accent'], className, {
            [styles['small']]: buttonStyle === 'small',
            [styles['big']]: buttonStyle === 'big',
        })} {...props}>{children}</button>
    )
}

export default Button;