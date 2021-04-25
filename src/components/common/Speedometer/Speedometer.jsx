import React from 'react';
import s from './speedometer.module.scss';

export const Speedometer = (props) => {

  console.log(props.counter);
  
  return (
    <div className={s.wrapper}>
      <div className={s.rang}>
        <div className={s.rangTitle}>
          <div className={s.rangNumber} id="show">
            {props.counter}
          </div>
        </div>
        <svg className={s.meter}>
          <circle className={s.meterLeft} r="96" cx="135" cy="142"></circle>
          <circle className={s.meterCenter} r="96" cx="136" cy="142"></circle>
          <circle className={s.meterRight} r="96" cx="138" cy="142"></circle>
          <polygon
            className={s.meterClock}
            style={
              props.counter >= 20
                ? { transform: `rotate(97deg)` }
                : { transform: `rotate(${props.rotate}deg)` }
            }
            points="129,145 137,90 145,145"
          ></polygon>
          <circle className={s.meterCircle} r="10" cx="137" cy="145"></circle>
        </svg>
      </div>
    </div>
  );
};
