import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormHeader } from './FormHeader';
import { Inputs } from '../App';
import { PlusIcon } from '@heroicons/react/20/solid';

interface LinksFormProps {
  page: string
}

const LinksForm: React.FC<LinksFormProps> = ({ page }) => {
	const { control, register } = useFormContext<Inputs>();
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'links',
	});

	return (
		<>
			{page === 'links' ? (
				<>
					<FormHeader
						title="Customize your links"
						body="Add/edit/remove links below and then share all your profiles with the world!"
					/>
					<button
						className="flex justify-center items-center w-full border text-indigo-600 border-indigo-600 rounded py-2 font-medium"
						onClick={() =>
							append({
								platform: 'github',
								url: '',
							})
						}
					>
						<PlusIcon className="h-4 w-4" />
						Add a new link
					</button>

					<ul>
						{fields?.map((field, index) => {
							return (
								<li key={field.id}>
									<div className="flex justify-between mt-5">
										<select {...register(`links.${index}.platform`)}>
											<option value="github">Github</option>
											<option value="youtube">Youtube</option>
										</select>
										<input
											{...register(`links.${index}.url`)}
											className="border p-2"
										/>
										<button onClick={() => remove(index)}>Remove</button>
									</div>
								</li>
							);
						})}
					</ul>
				</>
			) : null}
		</>
	);
};

export { LinksForm };
