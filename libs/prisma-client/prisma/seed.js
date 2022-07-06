const prisma = new (require('../src').PrismaClient)();
const MOCK_DATA = [
  {
    description: 'Sports',
    type: 'INGRESO',
    amount: 46237,
    date: '2022-02-08T01:29:14Z',
  },
  {
    description: 'Books',
    type: 'EGRESO',
    amount: 136061,
    date: '2021-05-20T05:21:29Z',
  },
  {
    description: 'Industrial',
    type: 'INGRESO',
    amount: 7380,
    date: '2021-11-16T08:40:58Z',
  },
  {
    description: 'Tools',
    type: 'EGRESO',
    amount: 41786,
    date: '2021-08-30T09:21:47Z',
  },
  {
    description: 'Automotive',
    type: 'EGRESO',
    amount: 135000,
    date: '2021-07-26T16:28:46Z',
  },
  {
    description: 'Clothing',
    type: 'EGRESO',
    amount: 47116,
    date: '2022-03-04T11:27:03Z',
  },
  {
    description: 'Toys',
    type: 'EGRESO',
    amount: 73967,
    date: '2021-05-07T01:49:02Z',
  },
  {
    description: 'Beauty',
    type: 'INGRESO',
    amount: 33134,
    date: '2021-12-23T04:38:37Z',
  },
  {
    description: 'Shoes',
    type: 'INGRESO',
    amount: 112283,
    date: '2021-09-21T10:45:11Z',
  },
  {
    description: 'Computers',
    type: 'INGRESO',
    amount: 57800,
    date: '2022-06-20T22:18:19Z',
  },
  {
    description: 'Clothing',
    type: 'EGRESO',
    amount: 42395,
    date: '2021-11-11T16:33:01Z',
  },
  {
    description: 'Grocery',
    type: 'EGRESO',
    amount: 64830,
    date: '2021-12-10T14:17:59Z',
  },
  {
    description: 'Jewelry',
    type: 'EGRESO',
    amount: 87325,
    date: '2021-09-04T05:01:24Z',
  },
  {
    description: 'Beauty',
    type: 'EGRESO',
    amount: 122916,
    date: '2022-05-02T09:32:13Z',
  },
  {
    description: 'Games',
    type: 'INGRESO',
    amount: 55761,
    date: '2021-07-12T22:43:29Z',
  },
  {
    description: 'Outdoors',
    type: 'INGRESO',
    amount: 133303,
    date: '2022-01-21T11:09:19Z',
  },
  {
    description: 'Baby',
    type: 'INGRESO',
    amount: 92263,
    date: '2021-12-14T08:19:16Z',
  },
  {
    description: 'Music',
    type: 'EGRESO',
    amount: 50488,
    date: '2021-07-31T18:20:52Z',
  },
  {
    description: 'Tools',
    type: 'EGRESO',
    amount: 72715,
    date: '2021-07-24T22:17:36Z',
  },
  {
    description: 'Industrial',
    type: 'INGRESO',
    amount: 84480,
    date: '2021-10-29T00:50:42Z',
  },
  {
    description: 'Industrial',
    type: 'EGRESO',
    amount: 121764,
    date: '2022-06-06T22:58:45Z',
  },
  {
    description: 'Music',
    type: 'EGRESO',
    amount: 58014,
    date: '2021-06-09T22:02:28Z',
  },
  {
    description: 'Baby',
    type: 'INGRESO',
    amount: 129078,
    date: '2021-07-18T13:50:13Z',
  },
  {
    description: 'Kids',
    type: 'EGRESO',
    amount: 11765,
    date: '2022-02-14T13:50:13Z',
  },
  {
    description: 'Books',
    type: 'EGRESO',
    amount: 87033,
    date: '2022-06-30T13:08:50Z',
  },
  {
    description: 'Grocery',
    type: 'EGRESO',
    amount: 18818,
    date: '2021-05-06T17:01:46Z',
  },
  {
    description: 'Health',
    type: 'EGRESO',
    amount: 136384,
    date: '2021-05-11T05:50:32Z',
  },
  {
    description: 'Automotive',
    type: 'EGRESO',
    amount: 51021,
    date: '2021-11-04T02:41:59Z',
  },
  {
    description: 'Tools',
    type: 'INGRESO',
    amount: 46984,
    date: '2021-08-16T00:16:30Z',
  },
  {
    description: 'Computers',
    type: 'EGRESO',
    amount: 13009,
    date: '2021-06-29T07:54:45Z',
  },
  {
    description: 'Garden',
    type: 'EGRESO',
    amount: 70466,
    date: '2022-05-25T17:44:06Z',
  },
  {
    description: 'Sports',
    type: 'EGRESO',
    amount: 100291,
    date: '2021-10-17T00:03:53Z',
  },
  {
    description: 'Movies',
    type: 'INGRESO',
    amount: 4483,
    date: '2021-06-03T05:39:15Z',
  },
  {
    description: 'Sports',
    type: 'EGRESO',
    amount: 128783,
    date: '2021-09-13T01:24:52Z',
  },
  {
    description: 'Automotive',
    type: 'INGRESO',
    amount: 85093,
    date: '2021-12-22T05:43:43Z',
  },
  {
    description: 'Outdoors',
    type: 'EGRESO',
    amount: 82854,
    date: '2021-08-29T00:40:02Z',
  },
  {
    description: 'Sports',
    type: 'INGRESO',
    amount: 116452,
    date: '2022-03-05T13:12:18Z',
  },
  {
    description: 'Garden',
    type: 'INGRESO',
    amount: 2406,
    date: '2021-09-02T21:30:10Z',
  },
  {
    description: 'Sports',
    type: 'INGRESO',
    amount: 91890,
    date: '2021-09-03T08:24:54Z',
  },
  {
    description: 'Industrial',
    type: 'EGRESO',
    amount: 62298,
    date: '2021-07-27T11:15:36Z',
  },
  {
    description: 'Kids',
    type: 'INGRESO',
    amount: 87113,
    date: '2021-05-27T21:17:12Z',
  },
  {
    description: 'Kids',
    type: 'EGRESO',
    amount: 21874,
    date: '2021-05-01T01:59:57Z',
  },
  {
    description: 'Kids',
    type: 'INGRESO',
    amount: 31762,
    date: '2021-12-14T18:29:09Z',
  },
  {
    description: 'Kids',
    type: 'INGRESO',
    amount: 131500,
    date: '2021-04-15T20:46:18Z',
  },
  {
    description: 'Baby',
    type: 'INGRESO',
    amount: 129224,
    date: '2022-07-05T08:43:23Z',
  },
  {
    description: 'Baby',
    type: 'EGRESO',
    amount: 52318,
    date: '2022-04-09T02:06:32Z',
  },
  {
    description: 'Sports',
    type: 'INGRESO',
    amount: 43882,
    date: '2021-08-13T02:38:52Z',
  },
  {
    description: 'Grocery',
    type: 'EGRESO',
    amount: 121142,
    date: '2022-05-05T23:30:57Z',
  },
  {
    description: 'Health',
    type: 'INGRESO',
    amount: 89431,
    date: '2021-04-03T17:48:28Z',
  },
  {
    description: 'Beauty',
    type: 'EGRESO',
    amount: 126812,
    date: '2022-02-17T11:02:10Z',
  },
];

async function seed() {
  await prisma.operation.deleteMany();
  await prisma.operation.createMany({
    //@ts-expect-error untyped data
    data: MOCK_DATA,
  });
}

try {
  seed();
} catch (e) {
  console.error(e);
  process.exit(1);
} finally {
  (async () => {
    await prisma.$disconnect();
  })();
}
