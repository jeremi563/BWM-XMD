const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61V2Y6rOhb9F78m5yaEMZFKasKUiZCZUK2rKwfMEMbYhgBHJd0v6I/sL2lRqVKVdIaulhrxYBl77bX3XnvxHWR5RNASNWDyHRQ4qiBF3ZI2BQITMC19H2HQBx6kEEzAfFWJ1jkUzXYmLi6uvkz5SA167OrAIn9h+m3lsPf9Hs3t/Am89EFRXpLI/Q2gYG6o0FtGehnrh7SM7XPQECmFVQk5UZlfd9NjqD1n+1abP4GXDhFGOMoCrQhRijBMlqjZwAh/jb4mj60TCRN11O7KDWMIdm5XA1d4ruJ8Y4/D1dnidGWTr85fpC8eTvCoD6SzynjS3iy2m2B5OrHHZOOvZsq27VXPvX0oiMrh+KBPoiBD3txDGY1o8+W6u4pcrm3xOt46bp3jW8hYuAkkFgq3+tBGS4fI+sUw6/R0/Brxa481d9LSdBbhGi43Jw95sszv0O2wokyVQ3GlXUbJDGet/Jn4Br9rJf5f6h6vx6K6dlxxsJ8a8I7Sdh2eWsOW6cHaRRA79dDuxXw4TbZfo1/HA02ER94YjWdLFSXFzIt3HqxItjmjXJBNMpoNRiNjOHI+6ENa4t+xPK1TEu5PCWPgvJxXVnqTtP3Jva3NoYNL73qvb88Nmu7swN4mAzZOVI61fGfBNmxzL4ZboxkOItMa45txvkqa7TArot6fXjOKUTP3wIR56QOMgohQDGmUZ93eiOsD6FV75GJEX6sLzlqwbbeq3tpeSpXbAOaznjqL+L3LNoO9s/OpGmckM0ZN8AT6oMC5iwhB3iwiNMeNiQiBASJg8s/XRnU5Y5TmFC0iD0zAiOdElhlxI0YY/4P8cQ8hJbAo/sgQBX3g4zw1EZhQXKI+eL0gMMpQ1zRdFkfsUNU4TZrqii7w3FQQxOFU6jJMH0EPUYoIhWkBJozIjcYMzzHcy599kKGaPuTTJc0yfeBHmNBjVhZJDr13bb1/hK6blxndN5mrdAuEweTTNqI0ygLSZVZmELthVCGlywNMfJgQ9NIHHqoiF3V4INNUiv66XrYLxXIyzBy2slZsu8qFefY4IvCixAlj+A3xEvrGIYn5JonDyzdXZHieH/KC6EHQleMxud2dXwop6R1T/Uw87hTY91wZBkdYVuOeJPUetvJQAMLIe6/yBbpxWRzyGGW/wZ3CI2Hp1Q4TXVVrtL3U9cLwi5k1OH7CfSgLTL5/uKWSex2eMRNMe3Uaga5bXZwf1DAR2R8FkcHuNPj33//6f70d2bdOdjQ8RGGUEDABilUuM54zNBNakSgZhnwMZCWQwUfn3wf5MSlWzJPaj/VoaZA4v58PGEXD6YAt2j1PArjYun5dq368YPOnn4CACViGLdvcpqKzLAdT3S1rMreT7f1upM6JcHTB3g+VzUrYka9DbRnKJSlnDFuv66tlOtpmLLfru7GbN22ji7PsypyeF7oqP3XRHgr8HAzyfH4vipVqDQYaDgdizF99x0rWHCdYPau9IWeAdaMyglSEmFdOjCAd020pJWp+PyrP+7Yyzj3M1mIU3m3NjqdIUt4s5tXikrdfS/Q2/Q+9+hF6deq3Tv7Xjn+MzvCl/wnjzft/Jc9DYV3MMz91ohAvlqY+FNicyv5YcIflZW5Ex9lMcrcsr3gCeOk8oUgg9XOcdpXJPJxHHuiDBBIqf0z/zwyF6YO0kYtiTyF9Nw0gvz6JB17+A7ggQzjWCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

