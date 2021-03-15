import react from 'react';
import { Redirect } from 'react-router';
import Preloader from '../../common/Preloader/Preloader';
import s from './Today.module.scss';

const Today = (props) => {
	if (!props.isAuth) return <Redirect to="/" />;

	return (
		<div>
			{props.todayPage.loading ? (
				<table className={s.table}>
					<thead>
						<tr>
							<td className={s.subtitle}>Кличка</td>
							<td className={s.subtitle}>Назначение</td>
						</tr>
					</thead>
					<tbody>
						{props.todayPage.todayInfo.map((elem) => (
							<tr key={elem.animal.id}>
								<td
									onClick={() => {
										props.setModalActive(true);
										props.setCheckElem(elem.animal);
									}}
								>
									{elem.animal.name}
								</td>
								<td>{elem.animal.spec_name}</td>
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

export default Today;
