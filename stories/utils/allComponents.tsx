import * as React from 'react';
import * as componentsScope from '../../src/components';
import * as iconsScope from 'wix-ui-icons-common';

/*
 * This object contains all wix-ui-tpa components including icons
 * It is used in code section of autodocs.
 */
export const allComponents = {
  ...componentsScope,
  Icons: iconsScope,
  ExampleWithContextProps: ({ children, mobile = false, rtl = false }) => (
    <componentsScope.TPAComponentsProvider value={{ mobile, rtl }}>
      {children}
    </componentsScope.TPAComponentsProvider>
  ),
};
