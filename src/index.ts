import { app } from './app/app';

const PORT = 3333;

app.listen(PORT, () => {
    console.log(`🚀 Aplicação rodando em http://localhost:${PORT}`);
})
