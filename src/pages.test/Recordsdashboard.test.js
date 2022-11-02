import {render, screen} from '@testing-library/react';
import RecordsDashboard from '../pages/RecordsDashboard';


test('records dashboard test', () => {
    render(<RecordsDashboard />);
    const linkElement = screen.getByText(/records/i);
    expect(linkElement).toBeInTheDocument();
}
);

test ('charts are working', () => {
    render(<RecordsDashboard />);
    const linkElement = screen.getByText(/charts/i);
    expect(linkElement).toBeInTheDocument();
}
);
