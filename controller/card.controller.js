const database = require("./db");

class CardController {

    static createTable() {
        return database.creatTable('cards', card.getDbOject());
    }




    static insertCard(novaCard) {
        return database.insert('cards', 'nome,type,image,text,'
            `'${novaCard.nome}', 
            '${novaCard.type}', '${novaCard.image}','${novaCard.text}"`);
    }


    static deleteCard(id) {
        return database.
        delete('cards', id);

    }


    static updateCard(card) {
        return database.update('cards', `nome = '${card.nome}), type = '${card.type}', image = "${card.image}",  text = "${card.text}"`, `ID = ${card.id}`);
    }


    static getCard(id) {
        return database.get('cards', id);
    }

    static getCard() {
        return database.get('cards', null);
    }
}

module.exports = CardController