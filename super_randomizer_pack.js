function name() {
    const firstNames = ['Иван', 'Артур', 'Алексей', 'Евгений', 'Сергей', 'Пётр', 'Дмитрий', 'Вячеслав', 'Михаил', 'Вазген'];
    const lastNames = ['Иванов', 'Смирнов', 'Кузнецов', 'Попов', 'Соколов', 'Лебедев', 'Морозов', 'Петров', 'Волков', 'Соловьев'];

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${firstName} ${lastName}`;
}

function email() {
    const domains = ['yandex.ru', 'gmail.com', 'mail.ru'];
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let username = '';
    for (let i = 0; i < 8; i++) {
        username += chars[Math.floor(Math.random() * chars.length)];
    }

    const domain = domains[Math.floor(Math.random() * domains.length)];

    return `${username}@${domain}`;
}

function date() {
    const start = new Date(1900, 0, 1);
    const end = new Date();
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

    const day = String(randomDate.getDate()).padStart(2, '0');
    const month = String(randomDate.getMonth() + 1).padStart(2, '0');
    const year = randomDate.getFullYear();

    return `${day}.${month}.${year}`;
}

module.exports = { name, email, date }