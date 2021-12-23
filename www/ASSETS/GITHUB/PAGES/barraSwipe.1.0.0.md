# notas e codes - barraSwipe.1.0.0.


# Expandir barraSwipe

- ### tratar 1° Caso
   - status: move, right e menor ou igual a 250
   - set transform tranlate igual a distance enquanto 'distance' for menor ou igual a 250

- ### tratar 2° Caso
   - status: cancel, right e menor ou igual a 100
   - set transform tranlate em 0 (posição inicial) se houver cancelamento enquanto 'distance' for menor do que 100

- ### tratar 3° Caso
   - status: end, right e menor ou igual a 100
   - set transform tranlate em/na 0 (posição inicial) se houver cancelamento enquanto 'distance' for menor do que 100


- ### tratar 4° Caso
  - status: end, right e menor ou igual a 102
   - addClass("open-sidebar") enquanto 'distance' for igual ou maior do que 102






![image](https://user-images.githubusercontent.com/93455937/140307267-0aaa27ed-693f-40c8-b1b3-8e8bf1565f8d.png)
