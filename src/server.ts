import Fastify from "fastify";

const app = Fastify({ logger: true });

app.get("/", async () => "Hello, Job Dashboard");

const port = Number(process.env.PORT ?? 3000);
app.listen({ port, host: "127.0.0.1" }).catch((err) => {
	app.log.error(err);
	process.exit(1);
});