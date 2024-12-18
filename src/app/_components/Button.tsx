import cn from "~/lib/cn";

const Button : React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {

	const defaultStyle = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

	return <button className={cn(defaultStyle, className)} {...props}>{children}</button>;
}

export default Button;
