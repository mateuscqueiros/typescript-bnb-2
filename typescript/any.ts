// Ao declarar variáveis sem um valor inicial, o TS não consegue assinalar um tipo para ela.
let phoneNumber;

phoneNumber = '+55(44)123456789';
phoneNumber = 554412345678;

// Assinalar tipo explicitamente
let guess: string;

guess = 'blue';
// Erro: tentando assinalar um número para uma variável que é do tipo string;
// guess = 42;
