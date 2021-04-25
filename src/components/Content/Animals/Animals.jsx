import { Redirect } from 'react-router';
import Preloader from '../../common/Preloader/Preloader';
import s from '../Animals/Animals.module.scss';

const Animals = (props) => {

  if (!props.token) return <Redirect to="/" />;

  return (
    <div>
      {props.animalsPage.loading ? (
        <table className={s.table}>
          <thead>
            <tr>
              <th className={s.subtitle}>Кличка</th>
              <th className={s.subtitle}>Тип животного</th>
              <th className={s.subtitle}>Подтип</th>
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
