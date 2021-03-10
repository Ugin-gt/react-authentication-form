import React from 'react';
import PropTypes from 'prop-types';
import styles from './RadioForm.module.scss';
import { SIGN_UP_SCHEMA } from '../../utils/validationSchemas';
import Input from '../Input';

const RadioForm = props => {
  const roleArray = [
    {
      id: 1,
      value: 'buyer',
      joinAs: 'Buyer',
      joinAsDesc:
        'I am looking for a Name, Logo or Tagline for my business, brand or product.',
    },
    {
      id: 2,
      value: 'creative',
      joinAs: 'Creative or Marketplace Seller',
      joinAsDesc:
        'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.',
    },
  ];

  return (

//   //  {roleArray.map(role => (
//        <div className={styles.clientRadio}>
//         <Input id={role.id} value={role.value} type='radio'/>
//       <label htmlFor={role.id} className={styles.joinAs}>
//         (Join As a {role.joinAs}
//         <span className={styles.joinAsDesc}>{role.joinAsDesc}</span>
//       </label>
//     </div>
//     // ))}
  )
};
// RadioForm.propTypes = {
//   role: PropTypes.func.isRequired,
// };
  
export default RadioForm;
