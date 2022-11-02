import {render, screen} from '@testing-library/react';
import SearchForm from '../components/SearchForm';
import Toolslist from '../components/Toolslist';

test ('searchform test', () => {
    render(<SearchForm />);
    const linkElement = screen.getByText(/searchform/i);
    expect(linkElement).toBeInTheDocument();
}
);

test('toolslist test', () => {
    render(<Toolslist />);
    const linkElement = screen.getByText(/toolslist/i);
    expect(linkElement).toBeInTheDocument();
}
);
