# MensajesAngular2
Ejemplo de paso de mensajes entre nodos en Angular

Este proyecto es una pequeña aplicación que hice para comprender cómo se pasan mensajes entre componentes en Angular.

Consta de un abuelo, un padre, un tío y un hijo, de forma que cuando el hijo modifica un dato se lo emite al padre, éste al abuelo y éste al tío. De este modo se ven dos formas de pasar datos entre componentes
- El paso a través de variables de entrada
- El paso a traves de emisión de mensajes (EventEmitter)
