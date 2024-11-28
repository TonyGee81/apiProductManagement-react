import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdminHome from "./AdminHome";

describe('Admin Component', () => {
    it('renders the component correctly', () => {
        const text = 'Admin accueil';

        render(
            <AdminHome />
        );

        // Vérifie si le texte est rendu
        expect(screen.getByText(text)).toBeInTheDocument();
    });
});