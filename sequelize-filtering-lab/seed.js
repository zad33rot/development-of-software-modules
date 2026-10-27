const {
  sequelize,
  User,
  Post,
  Author,
  Book,
  Student,
  Course,
  Order,
  Item,
} = require('./models');

async function seed() {
  await sequelize.sync({ force: true });

  const alice = await User.create({
    name: 'Alice',
    email: 'alice@example.com',
    isActive: true,
  });
  const bob = await User.create({
    name: 'Bob',
    email: 'bob@example.com',
    isActive: false,
  });
  const carol = await User.create({
    name: 'Carol',
    email: 'carol@example.com',
    isActive: true,
  });

  await Post.create({
    title: 'Alice recent published',
    publishedAt: new Date('2024-05-01'),
    status: 'published',
    authorId: alice.id,
  });
  await Post.create({
    title: 'Alice old published',
    publishedAt: new Date('2022-01-01'),
    status: 'published',
    authorId: alice.id,
  });
  await Post.create({
    title: 'Alice draft',
    publishedAt: new Date('2024-06-01'),
    status: 'draft',
    authorId: alice.id,
  });
  await Post.create({
    title: 'Bob recent published',
    publishedAt: new Date('2023-06-01'),
    status: 'published',
    authorId: bob.id,
  });

  const tolstoy = await Author.create({
    firstName: 'Leo',
    lastName: 'Tolstoy',
    country: 'Russia',
  });
  const austen = await Author.create({
    firstName: 'Jane',
    lastName: 'Austen',
    country: 'UK',
  });
  const twain = await Author.create({
    firstName: 'Mark',
    lastName: 'Twain',
    country: 'USA',
  });

  await Book.create({
    title: 'War and Peace',
    year: 1869,
    genre: 'novel',
    authorId: tolstoy.id,
  });
  await Book.create({
    title: 'Pride and Prejudice',
    year: 1813,
    genre: 'novel',
    authorId: austen.id,
  });

  const anna = await Student.create({ name: 'Anna', group: 'A' });
  const boris = await Student.create({ name: 'Boris', group: 'B' });
  const vera = await Student.create({ name: 'Vera', group: 'C' });

  const math = await Course.create({ title: 'Math', credits: 4 });
  const physics = await Course.create({ title: 'Physics', credits: 3 });
  const chemistry = await Course.create({ title: 'Chemistry', credits: 5 });
  const biology = await Course.create({ title: 'Biology', credits: 2 });
  const art = await Course.create({ title: 'Art', credits: 2 });

  await anna.setCourses([math, physics]);
  await boris.setCourses([chemistry, biology]);
  await vera.setCourses([art]);

  const order1 = await Order.create({
    number: 'ORD-001',
    status: 'paid',
    createdAt: new Date('2024-01-01'),
  });
  const order2 = await Order.create({
    number: 'ORD-002',
    status: 'new',
    createdAt: new Date('2024-01-02'),
  });

  await Item.create({
    productName: 'Laptop',
    quantity: 3,
    price: 1200.0,
    orderId: order1.id,
  });
  await Item.create({
    productName: 'Mouse',
    quantity: 1,
    price: 25.0,
    orderId: order1.id,
  });
  await Item.create({
    productName: 'Keyboard',
    quantity: 4,
    price: 80.0,
    orderId: order1.id,
  });
  await Item.create({
    productName: 'Monitor',
    quantity: 1,
    price: 300.0,
    orderId: order2.id,
  });
  await Item.create({
    productName: 'Cable',
    quantity: 5,
    price: 10.0,
    orderId: order2.id,
  });

  console.log('Seed completed');
}

module.exports = seed;