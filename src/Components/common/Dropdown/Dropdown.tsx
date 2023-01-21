import React from 'react';
import Select, { SingleValue } from 'react-select';
import { ErrorMessage, useField } from 'formik';
import DropdownContent, { customDropdownStyles } from './Dropdown.style';

type Option = { label: string; value: string; labelShort: string; phoneCode: string };

type DropdownT = { name: string; options: Array<Option>; optionValue: string };

const Dropdown = ({ name, options, optionValue }: DropdownT) => {
  //eslint-disable-next-line
  const [fieldOpt, extendedFieldOpt, fieldActions] = useField(name);

  return (
    <DropdownContent>
      <Select
        placeholder={name}
        styles={customDropdownStyles}
        name={name}
        getOptionValue={(option: any) => option[optionValue]}
        getOptionLabel={(option: any) =>
          option[optionValue] + (optionValue === 'phoneCode' ? '  ' + option.labelShort : '')
        }
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#B2B2B2',
          },
        })}
        components={{
          IndicatorSeparator: () => null,
        }}
        options={options}
        defaultValue={options.find((option) => option.value === fieldOpt.value)}
        onChange={(option: SingleValue<Option>) => fieldActions.setValue(option?.value)}
      />

      <ErrorMessage name={name}>{(msg) => <div className="errorMessage">{msg}</div>}</ErrorMessage>
    </DropdownContent>
  );
};

export default Dropdown;
