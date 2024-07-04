/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';

import { AddButton } from './index';

describe('Component Add Button', () => {
  test('Renders', () => {
    const { getByText } = render(AddButton, { label: 'btn label' });
    expect(getByText('btn label')).toBeInTheDocument();
  });
});
