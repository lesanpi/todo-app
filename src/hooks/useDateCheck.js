import {useEffect} from 'react';
import {format, parseISO, isBefore} from 'date-fns';
import {useAppState, useAppReducer} from '../AppContext';

export default function useDateCheck() {
  const {date} = useAppState();
  const dispatch = useAppReducer();
  const storedDate = parseISO(`${date.year}-${date.month}-${date.day}`);

  useEffect(() => {
    const interval = setInterval(() => {
      let newDate = new Date();
      let currentDate = parseISO(
        `${format(newDate, 'y')}-${format(newDate, 'MM')}-${format(
          newDate,
          'dd',
        )}`,
      );
      if (isBefore(storedDate, currentDate)) {
        dispatch({type: 'RESET_ALL'});
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [storedDate, dispatch]);
}
