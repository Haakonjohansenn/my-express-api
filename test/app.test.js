const request = require('supertest');
const app = require('../src/app'); // Import your Express app

let productId;
let studentId;

describe('CRUD operations for products', () => {
  it('should create a new product', async () => {
    const newProduct = { name: 'Test Product', price: 10 };

    const response = await request(app)
      .post('/products')
      .send(newProduct)
      .expect(200);

    productId = response.body.message.split(' ')[1]; // Extracting the product ID from the response
  });

  it('should retrieve a specific product', async () => {
    await request(app)
      .get(`/products/${productId}`)
      .expect(200);
  });

  it('should update an existing product', async () => {
    const updatedProduct = { name: 'Updated Product', price: 15 };

    await request(app)
      .put(`/products/${productId}`)
      .send(updatedProduct)
      .expect(200);
  });

  it('should delete a specific product', async () => {
    await request(app)
      .delete(`/products/${productId}`)
      .expect(200);
  });
});

describe('CRUD operations for students', () => {
  it('should create a new student', async () => {
    const newStudent = { name: 'Test Student', age: 20 };

    const response = await request(app)
      .post('/students')
      .send(newStudent)
      .expect(200);

    studentId = response.body.message.split(' ')[1]; // Extracting the student ID from the response
  });

  it('should retrieve a specific student', async () => {
    await request(app)
      .get(`/students/${studentId}`)
      .expect(200);
  });

  it('should update an existing student', async () => {
    const updatedStudent = { name: 'Updated Student', age: 25 };

    await request(app)
      .put(`/students/${studentId}`)
      .send(updatedStudent)
      .expect(200);
  });

  it('should delete a specific student', async () => {
    await request(app)
      .delete(`/students/${studentId}`)
      .expect(200);
  });
});
