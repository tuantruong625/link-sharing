interface FormHeaderProps {
	title: string;
	body: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, body }) => (
	<>
		<h2 className="text-2xl font-bold mb-2">{title}</h2>
		<p className="text-gray-500 mb-5">{body}</p>
	</>
);

export { FormHeader };
