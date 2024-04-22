const mongoose = require('mongoose');
const User = require('../models/user');

describe('User Model', () => {
  // Connect to the MongoDB test database before running any tests
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/testdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  // Clear the test database after each test
  afterEach(async () => {
    await User.deleteMany();
  });

  // Close the MongoDB connection after all tests are done
  afterAll(async () => {
    await mongoose.connection.close();
  });

  // Test case for saving a new user
  it('should save a new user', async () => {
    const userData = {
      firstName: 'John',
      lastName: 'Doe',
      username: 'johndoe',
      email: 'johndoe@example.com',
      password: 'password123',
    };

    const user = new User(userData);
    const savedUser = await user.save();

    expect(savedUser.firstName).toBe(userData.firstName);
    expect(savedUser.lastName).toBe(userData.lastName);
    expect(savedUser.username).toBe(userData.username);
    expect(savedUser.email).toBe(userData.email);
    expect(savedUser.password).not.toBe(userData.password); // Password should be hashed
  });
});
