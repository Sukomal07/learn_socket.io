import server from "./app.js";


server.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
})