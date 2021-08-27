# language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo encontrar mais mantimentos
    Para que eu possa consumir mais e dar para os outros viajanntes.

    Contexto:
        Dado um Hunter de nome "Kant"
        E ele sempre começa a viagem com 2 refeição
        E ele sempre começa a viagem saudável.

    Cenário: Caçou para conseguir mais refeições
        Quando o caçador sair para caçar 1 vezes
        Então a quantidade de refeições deve ser igual a 7

    Cenário: Comeu e seguiu saudável
        Quando o caçador parar para comer 2 vezes
        Então a quantidade de refeições deve ser igual a 3
        E o caçador não ficará doente

    Cenário: Comeu e ficou doente
        Quando o caçador parar para comer 2 vezes
        Então a quantidade de refeições deve ser igual a 0
        E o caçador ficará doente

    Cenário: Saiu para caçar, comeu e seguiu saudável
        Quando o caçador sair para caçar 2 vezes
        E o caçador parar para comer 2 vezes
        Então a quantidade de refeições deve ser igual a 6
        E o caçador não ficará doente

    Cenário: Comeu e seguiu saudável
        Quando o caçador parar para comer 2 vezes
        Então a quantidade de refeições deve ser igual a 2
        E o caçador não ficará doente