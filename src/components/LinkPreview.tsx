import {  useFormContext } from "react-hook-form";

interface Link {
  id: string;
  platform: string;
  url: string;
}

interface LinkPreviewProps {
  links?: Link[]
  previewImage: string | null;
}

const LinkPreview: React.FC<LinkPreviewProps> = ({ previewImage }) => {
	const { watch } = useFormContext()

	return (
		<div className="bg-white flex mr-5 rounded justify-center items-center flex-col p-10 flex-1">
			{previewImage && (
				<img
					src={previewImage}
					alt="Preview"
					className="h-32 w-32 rounded-full object-cover"
				/>
			)}
			<p className="text-lg font-medium capitalize">
				{ watch('firstName') } { watch('lastName') } 
			</p>
			<p className="text-gray-500">{watch('email') || 'Email goes here'}</p>

			<div className="mt-5 flex flex-col justify-center">
				<button className="border border-indigo-600 px-5 py-1 rounded text-indigo-600 font-medium w-full">
					Links Here
				</button>
				{ watch('links') && watch('links').map((field) => {
					return (
						<ul key={field.id}>
							<a href={`${field.url}`} target="_blank">
								{field.url}
								<div className="flex justify-between bg-gray-200 p-4 mt-2">
									<li>{field.platform} </li>
								</div>
							</a>
						</ul>
					);
				})}
			</div>
		</div>
	);
};

export { LinkPreview };
