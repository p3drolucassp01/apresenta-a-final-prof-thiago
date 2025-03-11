import sqlite3

def criar_banco():
    conn = sqlite3.connect("novo_banco.db")
    cursor = conn.cursor()

    # Criando tabelas
    script_sql = """
CREATE TABLE Cliente_Fisico (
            id_cliente INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            CPF TEXT NOT NULL,
            endereco TEXT NOT NULL,
            telefone TEXT,
            email_cliente TEXT NOT NULL,
            senha TEXT NOT NULL
        );

CREATE TABLE sqlite_sequence(name,seq);

CREATE TABLE Cliente_Juridico (
            id_cliente INTEGER PRIMARY KEY AUTOINCREMENT,
            CNPJ TEXT NOT NULL,
            nome_empresa TEXT NOT NULL,
            nome_representante TEXT NOT NULL,
            email_empresa TEXT NOT NULL,
            telefone_empresa TEXT,
            telefone_representante TEXT,
            email_representante TEXT
        );

CREATE TABLE Pedido (
            id_pedido INTEGER PRIMARY KEY AUTOINCREMENT,
            id_cliente INTEGER NOT NULL,
            quantidade INTEGER NOT NULL,
            data_pedido TEXT NOT NULL,
            forma_pagamento TEXT NOT NULL,
            status_envio_produto TEXT NOT NULL,
            valor_total REAL NOT NULL,
            status_pagamento_pedido TEXT NOT NULL,
            FOREIGN KEY (id_cliente) REFERENCES Cliente_Fisico(id_cliente)
        );

CREATE TABLE Estoque(
            cod_estoque INTEGER PRIMARY KEY AUTOINCREMENT,
            nome_produto TEXT NOT NULL,
            quantidade INTEGER NOT NULL,
            endereco TEXT NOT NULL
        );

CREATE TABLE Admin (
            id_admin INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            email TEXT NOT NULL,
            senha TEXT NOT NULL
        );

CREATE TABLE Financas (
            id_financa INTEGER PRIMARY KEY AUTOINCREMENT,
            tipo_transacao TEXT NOT NULL,  -- Receita ou Despesa
            descricao TEXT NOT NULL,
            valor REAL NOT NULL,
            data_transacao TEXT NOT NULL,
            categoria TEXT NOT NULL,
            id_funcionario INTEGER,
            FOREIGN KEY (id_funcionario) REFERENCES Funcionario(id_funcionario)
        );

CREATE TABLE Produto (
        id_produto INTEGER PRIMARY KEY AUTOINCREMENT,
        codigo_produto TEXT NOT NULL,
        nome_produto TEXT NOT NULL,
        tipo_produto TEXT NOT NULL,
        preco REAL NOT NULL,
        quantidade_estoque INTEGER NOT NULL,
        endereco_estoque TEXT,
        status INTEGER NOT NULL  -- Status (1 = Em Estoque, 2 = Em Falta)
    );

CREATE TABLE Funcionario (
        id_funcionario INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        CPF TEXT NOT NULL,
        email TEXT NOT NULL,
        senha TEXT NOT NULL,
        telefone TEXT NOT NULL,
        cargo TEXT NOT NULL,
        salario REAL NOT NULL,
        id_departamento INTEGER NOT NULL,
        data_admissao TEXT,  -- Adicionando a coluna data_admissao
        FOREIGN KEY (id_departamento) REFERENCES Departamento(id_departamento)
    );

CREATE TABLE servicos(
        ID_servico INTEGER PRIMARY KEY AUTOINCREMENT,
        ID_cliente INTEGER NOT NULL,
        ID_funcionario INTEGER NOT NULL,
        tipo VARCHAR(60),
        valor FLOAT,
        data_solicitacao DATE,
        data_finalizacao DATE,
        status_servico INTEGER,
        descricao VARCHAR(300),
        FOREIGN KEY(ID_cliente) REFERENCES cliente_fisico(ID_cliente),
        FOREIGN KEY(ID_funcionario) REFERENCES funcionario(ID_funcionario)
    );

CREATE TABLE Departamento (
    id_departamento INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL
);

CREATE TABLE Fornecedores (
    id_fornecedor INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_fornecedor TEXT NOT NULL,
    CNPJ TEXT NOT NULL,
    endereco TEXT NOT NULL,
    telefone TEXT NOT NULL,
    email TEXT NOT NULL,
    representante TEXT NOT NULL,
    telefone_representante TEXT,
    email_representante TEXT
);
    """
    
    cursor.executescript(script_sql)

    conn.commit()
    conn.close()

if __name__ == "__main__":
    criar_banco()
