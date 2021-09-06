import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { CloneMe, CloneMeProps } from '.';

const props: CloneMeProps = {
  title: 'any',
};

describe('<CloneMe />', () => {
  it('should render', () => {
    renderTheme(<CloneMe {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
