
const { put_reload } = require('../functions/PUT_RELOAD')
const Reload = require('../../../models/reloadModel');

// Mock the necessary dependencies
jest.mock('../../../models/reloadModel');

describe('put_reload', () => {
  let req;
  let res;

  beforeEach(() => {
    // Create mock request and response objects
    req = {
      params: {
        id: 'mock-id',
      },
      body: {
        // Mock request body properties
        // Provide the necessary properties for the update
      },
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should update a reload document and return the updated document', async () => {
    // Mock the `findOneAndUpdate` method to return a mock reload document
    const mockUpdatedReload = {
      _id: 'mock-id',
      // Mock other properties of the updated reload document
    };
    Reload.findOneAndUpdate.mockResolvedValue(mockUpdatedReload);

    // Call the tested function
    await put_reload(req, res);

    // Check if the correct functions were called with the expected arguments
    expect(Reload.findOneAndUpdate).toHaveBeenCalledWith({ _id: 'mock-id' }, req.body);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockUpdatedReload);
  });

  it('should handle errors and return a 400 response with the error message', async () => {
    // Mock the `findOneAndUpdate` method to throw an error
    const mockError = new Error('Mock error message');
    Reload.findOneAndUpdate.mockRejectedValue(mockError);

    // Call the tested function
    await put_reload(req, res);

    // Check if the correct functions were called with the expected arguments
    expect(Reload.findOneAndUpdate).toHaveBeenCalledWith({ _id: 'mock-id' }, req.body);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Mock error message' });
  });
});
