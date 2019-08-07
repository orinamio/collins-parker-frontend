// @flow
import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import cogoToast from 'cogo-toast';

import { LabeledInput } from '../../../components/Input';
import { ShippingAddressForm } from '../style';
import { FormGroup } from '../../sharedStyle';

import { CREATE_ADDRESS } from '../../../api/mutation/auth';

export default () => {
  return (
    <ShippingAddressForm>
      <FormGroup>
        <LabeledInput
          label="First Name"
          id="firstName"
          name="firstName"
          arial-label="First Name"
          type="text"
          required
          // disabled={signupResult.loading}
        />
        <LabeledInput
          label="Last Name"
          id="lastName"
          name="lastName"
          arial-label="Last Name"
          type="text"
          required
          // disabled={signupResult.loading}
        />
      </FormGroup>

      <FormGroup>
        <LabeledInput
          label="Address"
          id="address"
          name="address"
          arial-label="Address"
          type="text"
          required
          // disabled={signupResult.loading}
        />
      </FormGroup>
      <FormGroup>
        {/* <LabeledInput
        label="First Name"
        id="firstname"
        name="firstname"
        arial-label="First Name"
        type="text"
        required
        // disabled={signupResult.loading}
      /> */}
        <LabeledInput
          label="Phone Number"
          id="phoneNumber"
          name="phoneNumber"
          arial-label="Phone Number"
          type="text"
          required
          // disabled={signupResult.loading}
        />
      </FormGroup>

      <FormGroup>
        <LabeledInput
          label="First Name"
          id="firstname"
          name="firstname"
          arial-label="First Name"
          type="text"
          required
          // disabled={signupResult.loading}
        />
        <LabeledInput
          label="First Name"
          id="firstname"
          name="firstname"
          arial-label="First Name"
          type="text"
          required
          // disabled={signupResult.loading}
        />
        <LabeledInput
          label="First Name"
          id="firstname"
          name="firstname"
          arial-label="First Name"
          type="text"
          required
          // disabled={signupResult.loading}
        />
      </FormGroup>
    </ShippingAddressForm>
  );
};
