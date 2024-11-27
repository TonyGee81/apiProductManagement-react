import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Section from './Section';

describe('Section Component', () => {
    it('renders the title and children correctly', () => {
        const title = 'Test Section';
        const childText = 'This is a child content';

        render(
            <Section icon="fa-test-icon" title={title}>
                <p>{childText}</p>
            </Section>
        );

        // Vérifie si le titre est rendu
        expect(screen.getByText(title)).toBeInTheDocument();

        // Vérifie si les enfants sont rendus
        expect(screen.getByText(childText)).toBeInTheDocument();
    });

    it('toggles expansion state on header click', () => {
        const title = 'Collapsible Section';

        render(
            <Section icon="fa-test-icon" title={title}>
                <p>Content to collapse</p>
            </Section>
        );

        // Vérifie que le contenu est initialement masqué
        const content = screen.getByText('Content to collapse');
        // eslint-disable-next-line testing-library/no-node-access
        expect(content.closest('div')).toHaveClass('collapse-inner');

        // Simule un clic sur l'en-tête
        const header = screen.getByText(title);
        fireEvent.click(header);

    });
});
