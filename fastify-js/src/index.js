import Fastify from 'fastify';

const fastify = Fastify({
  // logger: true,
  // http2: true,
});

fastify.get('/', async (request, reply) => {
  // console.log('🚀 request', request);
  return { hello: 'world' };
});

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3005, host: 'localhost' }).then(() => {
      console.log('listening on http://localhost:3005');
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
