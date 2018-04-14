import React from 'react';
import SelectAntd from 'antd/lib/select';

import './Select.scss';

function Select({ children, ...other }) {
  return <SelectAntd {...other} className="select">{children}</SelectAntd>;
}

Select.defaultProps = {
  children: []
};

export default Select;
