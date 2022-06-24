class cards {
    id;
    nome;
    type;
    image;
    text;

    constructor(id, nome, type, image, text) {
        this.id = id;
        this.nome = nome;
        this.type = type;
        this.image = image;
        this.text = text;
    }

    /**
     * Retorna as colunas do model user como dbObject
     */
    static getDbObject() {
        return [
            new dbObject('ID', 'INT', true, true),
            new dbObject('NOME', 'VARCHAR(255)', false, false),
            new dbObject('TYPE', 'VARCHAR(255)', false, false),
            new dbObject('IMAGE', 'BLOB', false, false),
            new dbObject('text', 'VARCHAR(500)', false, false)

        ];
    }

    //     static createTable() {
    //         return database.createTable('cards', card.getDbObject());
    //     }

    //     static insertUser(novoUsuario) {
    //         return database.insert('user', 'username, password, ativo', `'${novoUsuario.username}', '${novoUsuario.password}', ${novoUsuario.ativo}`);
    //     }

    //     static deleteUser(id) {
    //         return database.delete('user', id);
    //     }

    //     static updateUser(user) {
    //         return database.update('user', `username = '${user.username}', password = '${user.password}', ativo = ${user.ativo}`, `ID = ${user.id}`);
    //     }

    //     static getUser(id) {
    //         return database.get('user', id);
    //     }
}

module.exports = User