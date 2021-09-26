// Core
import React, { FC } from 'react';

// Types
import { DaysState } from '../../../bus/days/types';

// Styles
import { Forecast } from './styles';

// Components
import { Day } from '../index';

type PropTypes = {
    weatherData: DaysState
}

export const WeatherForecast: FC<PropTypes> = ({ weatherData }) => {
    const weekWeater = weatherData.slice(0, 7);

    return (
        <Forecast>
            {weekWeater.map((value, index) => (
                <Day
                    className = { index === 0 ? 'selected' : '' }
                    day = { value.day }
                    key = { `${value.id}+ ${index}` }
                    temperature = { value.temperature }
                    type = { value.type }
                />
            ))}
        </Forecast>
    );
};
