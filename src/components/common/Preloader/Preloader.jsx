import s from './Preloader.module.scss';

const Preloader = () => {
	return (
		<div>
			<div className={s.roller}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Preloader;
