const mongoose = require('mongoose');
const Article = require('../models/Article');

describe('Article Model', () => {
  // Connect to the MongoDB test database before running any tests
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/testdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  // Clear the test database after each test
  afterEach(async () => {
    await Article.deleteMany();
  });

  // Close the MongoDB connection after all tests are done
  afterAll(async () => {
    await mongoose.connection.close();
  });

  // Test case for saving a new article
  it('should save a new article', async () => {
    const articleData = {
      title: 'Test Article',
      description: 'This is a test article',
      author: mongoose.Types.ObjectId(),
      body: 'Lorem ipsum dolor sit amet',
    };

    const article = new Article(articleData);
    const savedArticle = await article.save();

    expect(savedArticle.title).toBe(articleData.title);
    expect(savedArticle.description).toBe(articleData.description);
    expect(savedArticle.author).toEqual(articleData.author);
    expect(savedArticle.body).toBe(articleData.body);
  });
});
