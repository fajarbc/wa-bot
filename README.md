# wa-bot

WhatsApp bot using [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js).

Using MongoDB and mongoose to store list message and reply

# Setup
1. Install Dependecies
    ```
    npm install
    ```
2. Database seeds. Example of `autoreplies` collection to mention the message sender. Here `@{mention}` will be replaced by `@{contact.user.id}`
    ```json
    {
    "message": "!hi",
    "reply": "hello @{mention}",
    "created_at": {
        "$date": {
        "$numberLong": "1665014400000",
        },
    },
    "updated_at": {
        "$date": {
        "$numberLong": "1665070380000",
        },
    },
    }
    ```

# Running
1. Run the app
    ```
    npm start
    ```
2. Scan QR Code shown in terminal

# Testing
```
npm test
```

# Run docker compose in detached mode
```
docker-compose up -d
```
# Manage database
where mongodb_container is the container name
```
sudo docker exec -it mongodb_container bash
```
Enter this to switch to your database
```
use datbaseName
```