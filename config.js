const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5WVWW+rOBTHv4tfk3vDnhCp0kAChEBWsnY0DwYMmD3GkJCrfvcRTatWust0eLKM/T/b7xz/AHmBK2ShFox/gJLgBlLULWlbIjAGah0EiIA+8CGFYAx6a6wwExJIoQn3256nVC6V7vGmjUfSIbRNfSlzVa71opR5Ai99UNZuir0/CKJS7S0nvilHdnKGmhzd4mm506cln6WsvkOeeD2elUvI3MMn8NIpQkxwHmplhDJEYGqhdg0x+Zr75lLaDQ6Lw52gY5GX83kbcGqwZwbKMLEYOPMjqZwJi56dXr/mfmPbq42C22VF0tZeLVEe7ByqbgSzvhu8fGHOlS1HulVOrw/3KxzmyDd9lFNM2y/n3bHojS1W6FK7yhIyS59YjtFIh4GwWTONWnD3aGE4u+WzkXzNcUceREvTa/RePbjE4bVp8vUtutHFkfK95SBmDp574tTT3WE+O74m76wk/yfvodom0+fFQDcGxHEyPQtxixb24Xrex+zpFEn2PDDKnpAZX8RGOxaDON6fKzQLWsYumcRjqKVrUivMU0YKjrntjmpNJ9How31Ia/LHJHvKQOSXopRs1+R4EQnTiwhs5YlshbqLtDhn1Ut2gXgNE+uItWgfeW48H9rSZp070sE+oZCYE4PINRKSZ5OGcxQpT68RJag1fTBmX/qAoBBXlECKi7zb4wShD6DfOMgjiL6mFwwLr7Ce1fN6ti/se90cPCc6MsaK6Ok+M23PZi9OPlgtL9roCfRBSQoPVRXyZ7iiBWkXqKpgiCow/vu1Ul3QBGUFRXPsgzHgRGHIs5zAsZL8V/X9GkFawbL8niMK+iAgRbZAYExJjfrg9YKmDVlRkTVtNBkpgqBMuOGU16ecqE11VlOmXYjZw+gOZ6iiMCvBmB3yMjdiBXb48k8f5OhGH/x0UfNsHwSYVHSf12VaQP8drvef0POKOqdOm3uTboEIGH/aRpTiPKy6yOocEi/CDZp0cYBxANMKvfSBjxrsoU4PbKwR30hkus2wL2cpF7TGFW+6zEVF/jjCCx4zkl32m+DC4JsgcdI3V0TeN18WWZ91OQ+5AejS8Wjd7s5vSUoVrtKCaaXah63on1GVXfyrufALOXyl4YEAIsh/z7ILvaQud0WC8j/oWpV+PyT6ljH966JS94UkH7zJcxsom0+6D7TA+MfHuJwUfqd3YJ+HR2Ergq5anZ2faBiL0s9A5LA7Dc5F3Rl5q0B33UcU4rQCYzBZXaxcFAxtDXPiMoahmKEyCRXwUbH3DnwQvkrE6hYkOraMKimupx1BmFEHfHl3xCqE840X3G7TIJnzxdMvRMAYENWdkDrmXdabxo3qO8VZbWaDjHCjtVIa4d0ZSGR5UFWXXFQxtzLxVMe5zig0U2cYZ9VpsxGSIydZ5GCO6uK059Xp9amz9iDns7FwnqQT3/DdO9pW28UoeU5vs118nDfUGg7ym7e9xSPed/Vgdd+RpjHnk8CKEtcrxXqxe7bN22bBo9ncSI04JlqvMLY4fJsNr7MpfXsT8FvXPjgLMHodsW8V+M9KfSDPvPQ/abwN7d9gpe7Klbs4ieoZR2RuLXRG4guqBLLkMbVrGng/m428DS9OfAm8dL1cppAGBcnAGMDcJwX2QR+ksKLKR9f+ahBwfZC1Slk6FNL3ZgdK963jI3j5F6h/csOPCAAA',
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
    MENUTYPE : process.env.MENUTYPE || 'Marine Bot',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
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

