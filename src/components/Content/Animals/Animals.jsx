import { Redirect } from 'react-router';
import Preloader from '../../common/Preloader/Preloader';
import s from '../Today/Today.module.scss';

const Animals = (props) => {
	if (!props.isAuth) return <Redirect to="/" />;

	return (
		<div>
			{props.animalsPage.loading ? (
				<table className={s.table}>
					<thead>
						<tr>
							<td className={s.subtitle}>Кличка</td>
							<td className={s.subtitle}>Тип животного</td>
							<td className={s.subtitle}>Подтип</td>
						</tr>
					</thead>
					<tbody>
						{props.animalsPage.animalsInfo.map((elem) => (
							<tr key={elem.id}>
								<td
									className={s.name}
									onClick={() => {
										props.setModalActive(true);
										props.setCheckElem(elem);
									}}
								>
									{elem.name}
								</td>
								<td>{elem.spec_name}</td>
								<td>{elem.spec_parent_name}</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<Preloader />
			)}
		</div>
	);
};

export default Animals;
