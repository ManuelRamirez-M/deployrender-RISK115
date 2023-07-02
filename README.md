# RISK 115 E2 WEB 

## Instrucciones para la base de datos:

- ``CREATE USER g115 WITH PASSWORD '123456789'``;
- ``CREATE DATABASE devdbe2``;
- ``GRANT ALL PRIVILEGES ON DATABASE devdbe2 TO g115``;

- ``psql -U g115 -d devdbe2``

## Para correr programa:

- Primero seguir instrucciones de base de datos
- `npm install`
- `npx sequelize-cli db:migrate`
- `npm start`

## Para hacer rollback migrations:
- `npx sequelize-cli db:migrate:undo:all`
- `npx sequelize-cli db:migrate`


## Modelo de relaciones:

1. Users: Quienes participan en los juegos. 

- id (primary key) 

- username 

- password 

2. Games: Partidas del juego. 

- id (primary key) 

- name 

- status: estado de la partida; in-progress o completed.  

- current_turn: numero del turno actual. 

3. Players Usuarios que juegan en una partida. 

- id (primary key) 

- game_id (foreign key referenciando Games) 

- user_id (foreign key referenciando Users) 

- color: asignado a un jugador para diferenciarlos. 

- status: estado del jugador en la partida; active, lost o winner. 

- number_of_territories: número de territorios que controla. 

- iron (Cantidad de hierro que posee el jugador) 

- wheat (Cantidad de trigo que posee el jugador) 

- oil (Cantidad de petróleo que posee el jugador) 

4. Territories: Territorios del tablero de juego. 

- id (primary key) 

- name 

- game_id (foreign key de Games) 

- current_owner_id (foreign key de Players): jugador que actualmente controla el territorio. 

- troops: número de tropas; fuerza del territorio para atacar o defenderse.  

- resource: recurso que recibe el jugador que controla este territorio. 

5. Borders: Territorios que comparten una frontera (se pueden atacar). 

- id (primary key) 

- territory_id (foreign key de Territories). 

- neighboring_territory_id (foreign key de Territories). 

6. Turns: Esta tabla almacenará información sobre los turnos individuales tomados durante una partida. 

- id (primary key) 

- game_id (foreign key de Games) 

- player_id (foreign key de Players): jugador al que le toca el turno. 

- recruited_troops: string que representa las tropas reclutadas, cantidad y tipo. 

- reinforced_territory: (foreign key de Territories); territorio al que llegan refuerzos. 

- attacking_territory: (foreign key de Territories); territorio que ataca. 

- attacked_territory: (foreign key de Territories); territorio que se defiende de un ataque. 

- result_of_attack: resultado del ataque; fail or success. 

## Referencias:

Lógica de generación de mapa:
- https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/
- https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

Modelos:
- chatgpt como herramienta

Sesiones/auth:
- codigo de ejemplo ayudantes. (capsula 8, )