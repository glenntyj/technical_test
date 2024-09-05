import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import FileUpload from '../components/FileUpload';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('FileUpload Component', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterAll(() => {
    mock.restore();
  });

  test('should upload a file and display success message', async () => {
    mock.onPost('/api/files/upload').reply(200, { message: 'File processed successfully', data: [] });

    render(<FileUpload />);

    const fileInput = screen.getByLabelText(/upload file/i);
    const uploadButton = screen.getByText(/upload/i);

    fireEvent.change(fileInput, { target: { files: [new File(['sample'], 'test.csv', { type: 'text/csv' })] } });
    fireEvent.click(uploadButton);

    await waitFor(() => expect(screen.getByText(/upload successful/i)).toBeInTheDocument());
  });

  test('should handle upload errors', async () => {
    mock.onPost('/api/files/upload').reply(500);

    render(<FileUpload />);

    const fileInput = screen.getByLabelText(/upload file/i);
    const uploadButton = screen.getByText(/upload/i);

    fireEvent.change(fileInput, { target: { files: [new File(['sample'], 'test.csv', { type: 'text/csv' })] } });
    fireEvent.click(uploadButton);

    await waitFor(() => expect(screen.getByText(/error uploading file/i)).toBeInTheDocument());
  });

  // Add more tests for different scenarios and edge cases
});
