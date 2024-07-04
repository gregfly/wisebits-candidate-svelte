/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';

import { Tag } from './index';

describe('Component Add Button', () => {
  test('Renders', () => {
    const { getByText } = render(Tag, { label: 'tag label' });
    expect(getByText('tag label')).toBeInTheDocument();
  });
});
