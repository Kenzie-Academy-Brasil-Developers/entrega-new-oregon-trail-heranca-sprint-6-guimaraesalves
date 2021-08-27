# language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo curar os outros viajanntes;
    Para que eles possam seguir a viagem saudável.

    Contexto:
        Dado um Doctor de nome "Fritz"
        E ele é um Traveler que se dá melhor curando os outros Traveler.
        E ele sempre começa a viagem com 1 refeição
        E ele sempre começa a viagem saudável.

    Cenário: Caçou para conseguir mais refeições
        Quando o Doctor sair para caçar 1 vezes
        Então a quantidade de refeições deve ser igual a 3

    Cenário: encontrou um Traveler
        Quando o Doctor encontrar um Traveler
        Então o Traveler fica saudável

    