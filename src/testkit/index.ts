import {testkitFactoryCreator} from 'wix-ui-test-utils/vanilla';

import {inputDriverFactory} from '../components/Input/Input.driver';
export const inputTestkitFactory = testkitFactoryCreator(inputDriverFactory);

import {autocompleteDriverFactory} from '../components/Autocomplete/Autocomplete.driver';
export const autocompleteTestkitFactory = testkitFactoryCreator(autocompleteDriverFactory);