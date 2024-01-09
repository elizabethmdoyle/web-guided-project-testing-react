import React from 'react';
import App from './App';
import { fireEvent, render, screen, wait } from '@testing-library/react'

//comes from the api file
import mockFetchMissions from './api/fetchMissions';

jest.mock('./api/fetchMissions');


test(`App renders`, () => {
    render(<App />)
})

test(`renders mission data`, async () => {
    render(<App />);
    mockFetchMissions.mockResolvedValueOnce({
        data: [
            {mission_name: 'Mission 1', mission_id: 'Mission 1'},
            {mission_name: 'Mission 2', mission_id: 'Mission 2'},

        ]
    })

    const button = screen.getByRole('button')
    fireEvent.click(button)

    await wait();

    expect(screen.getAllByTestId('mission')).toHaveLength(2);
})

