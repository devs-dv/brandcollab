const app = require('./app');
const PORT = process.env.PORT || 9000;

process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});


const server = app.listen(PORT, () => {
    console.log(`Server running on PORT http://localhost:${PORT}`)
});

process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});