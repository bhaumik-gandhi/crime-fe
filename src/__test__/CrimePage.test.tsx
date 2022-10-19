
import { act, cleanup, render, screen, waitFor } from '@testing-library/react';
import CrimePage from '../CrimePage';

afterEach(cleanup);

describe('Group by Select element', () => {
  test('check groupBy select exist', () => {
    render(<CrimePage />)
    const element = screen.getByTestId('group-by')
    expect(element).toBeInTheDocument();
  })

  test('Default value should be selected', () => {
    render(<CrimePage />)
    const element = screen.getByTestId('group-by')
    expect(element).toHaveTextContent(/Suburb - Incident/i);
  })
})
//   const fakeResponse = { title: 'example text' };
//   const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
//   const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
//   (global as any).fetch = mockedFetch;
//   render(<CrimePage />)
//   const div = await waitFor(() => screen.findAllByTestId('crime-group-list'));
//   expect(div).toHaveTextContent('example text');
//   expect(mockedFetch).toBeCalledTimes(1);
//   expect(mRes.json).toBeCalledTimes(1);
// });

describe('Crime Data', () => {
  test('should find loading', async () => {
    render(<CrimePage />)
    const element = await screen.findByTestId('loading-crime-data')
    expect(element).toBeInTheDocument()
  })

  test('should fetch data once', async () => {
    const fakeResponse = [{ _id: "1" }]
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
    global.fetch = mockedFetch;
    render(<CrimePage />);
    await act(async () => {
      await waitFor(() => expect(mockedFetch).toHaveBeenCalledTimes(1))
    })
  })
})





