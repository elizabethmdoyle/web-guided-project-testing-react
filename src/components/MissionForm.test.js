import {fireEvent, render, screen} from '@testing-library/react';

import React from 'react';

import MissionForm from './MissionForm';

test(`render mission form`, () => {
    render(<MissionForm />)
})

test(`render the message when isFetchingData is true`, () => {
    render(<MissionForm isFetchingData={true}/>)
    const value = screen.queryByText(/we are fetching data/i);
    expect(value).not.toBeNull();
})

test('renders button when isFetchingData is false', () => {
    render(<MissionForm usFetchingData={false}/>)
    const value = screen.queryByRole('button');
    expect(value).not.toBeNull();
})

test(`calls getData when button is pressed`, () => {
    const mockGetData = jest.fn(() => {});
    render(<MissionForm getData={mockGetData}/>)
    const button = screen.queryByRole('button');
    fireEvent.click(button);
    console.log(mockGetData.mock);
    expect(mockGetData.mock.calls).toHaveLength(1)
})