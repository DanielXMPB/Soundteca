create schema soundteca;

create table soundteca.tipo_usuario(
	id_tipo_usuario int primary key,
	nombre_tipo varchar(50) not null
);

create table soundteca.usuario(
	id_usuario int primary key auto_increment,
	nombre varchar(50) not null,
	correo varchar(50) not null,
	contrasena varchar(20) not null,
	id_tipo_usuario int not null,
	foreign key (id_tipo_usuario) references soundteca.tipo_usuario(id_tipo_usuario)
);

create table soundteca.artista(
	id_artista int primary key,
	nombre varchar(50) not null
);

create table soundteca.album(
	id_album int primary key,
	nombre varchar(50) not null
);

create table soundteca.artista_album(
	id_artista_album int primary key,
	id_artista int not null,
	id_album int not null,
	foreign key (id_artista) references soundteca.artista(id_artista),
	foreign key (id_album) references soundteca.album(id_album)
);

create table soundteca.genero(
	id_genero int primary key,
	nombre varchar(50) not null
);

create table soundteca.cancion(
	id_cancion int primary key,
	nombre varchar(50) not null,
	id_album int not null,
	id_genero int not null,
	foreign key (id_album) references soundteca.album(id_album),
	foreign key (id_genero) references soundteca.genero(id_genero)
);

create table soundteca.favoritos(
	id_favoritos int primary key,
	id_usuario int not null,
	nombre varchar(100) not null,
	foreign key (id_usuario) references soundteca.usuario(id_usuario)
);

create table soundteca.favoritos_cancion(
	id_favoritos_cancion int primary key,
	id_favoritos int not null,
	id_cancion int not null,
	foreign key (id_favoritos) references soundteca.favoritos(id_favoritos),
	foreign key (id_cancion) references soundteca.cancion(id_cancion)
);

create table soundteca.playlist(
	id_playlist int primary key,
	nombre varchar(50) not null
);

create table soundteca.playlist_cancion(
	id_playlist_cancion int primary key,
	id_playlist int not null,
	id_cancion int not null,
	foreign key (id_playlist) references soundteca.playlist(id_playlist),
	foreign key (id_cancion) references soundteca.cancion(id_cancion)
);

create table soundteca.playlist_usuario(
	id_playlist_usuario int primary key,
	id_playlist int not null,
	id_usuario int not null,
	foreign key (id_playlist) references soundteca.playlist(id_playlist),
	foreign key (id_usuario) references soundteca.usuario(id_usuario)
);

insert into soundteca.tipo_usuario (id_tipo_usuario, nombre_tipo) values (1, "Administrador");
insert into soundteca.tipo_usuario (id_tipo_usuario, nombre_tipo) values (2, "Usuario");
insert into soundteca.usuario (nombre, correo, contrasena, id_tipo_usuario) values ("administrador", "admin@hotmail.com", "1234", 1);
insert into soundteca.usuario (nombre, correo, contrasena, id_tipo_usuario) values ("Daniel Perez", "danielmpb@hotmail.com", "1234", 2);
insert into soundteca.artista (id_artista, nombre) values (1, "The Weeknd");
insert into soundteca.album  (id_album, nombre) values (1, "Dawn FM");
insert into soundteca.artista_album (id_artista_album, id_artista, id_album) values (1, 1, 1);
insert into soundteca.genero (id_genero, nombre) values (1, "Pop");
insert into soundteca.cancion (id_cancion, nombre, id_album, id_genero) values (1, "Dawn FM", 1, 1);
insert into soundteca.cancion (id_cancion, nombre, id_album, id_genero) values (2, "Gasoline", 1, 1);
insert into soundteca.cancion (id_cancion, nombre, id_album, id_genero) values (3, "How Do I Make You Love Me?", 1, 1);
insert into soundteca.playlist (id_playlist, nombre) values (1, "Canciones Pop");
insert into soundteca.playlist_cancion (id_playlist_cancion, id_playlist, id_cancion) values (1, 1, 1);


