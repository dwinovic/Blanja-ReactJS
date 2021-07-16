import React, { useState, useCallback, useEffect } from 'react';
import SelectDatepicker from 'react-select-datepicker';

export const DatePicker = () => {
  const [value, setValue] = (useState < Date) | (null > new Date());

  const onDateChange = useCallback((date) => {
    setValue(date);
  }, []);

  return <SelectDatepicker value={value} onDateChange={onDateChange} />;
};
