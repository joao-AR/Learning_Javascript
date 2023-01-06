use udemy; 

CREATE TABLE IF NOT EXISTS cidades(
	id INT UNSIGNED NOT NULL auto_increment,
    nome VARCHAR(255) NOT NULL,
    estado_id INT unsigned NOT NULL,
    area DECIMAL(10,2) ,
    PRIMARY KEY (id),
    foreign KEY (estado_id) references estados (id)
)


CREATE TABLE IF NOT EXISTS teste(
	id INT UNSIGNED NOT NULL auto_increment PRIMARY key
)

DROP TABLE IF EXISTS teste;