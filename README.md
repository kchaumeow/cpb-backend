# SHOPIFY LIST APP:

Это приложение является тестовым заданием для CPB. Чтобы протестировать проект нужно выполнить следующие действия.

## Установить зависимости

```bash
npm install
```

## Прописать файл .env

Пример в файле **.env.example**
Внимательно! Надо заменить user, password, port, db_name, access_token, your_shop.
Базу данных самостоятельно создавать не нужно, она создаётся сама.

## Запустить миграции

```bash
npm run migrate
```
Подробнее в документации Prisma: https://www.prisma.io/docs

## Запустить проект

```bash
npm run dev
```


