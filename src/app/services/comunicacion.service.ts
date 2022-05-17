import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComunicacionService {
  listaObjetos: any[] = [
    {
      id: 1,
      title: 'Haz contacto visual',
      description:
        'El contacto visual con el público es muy importante para poder conectarse con clientes o interlocutores que se tengan en frente, la falta de contacto demuestra falta de seguridad como si estuviésemos intimidados',
      imageUrl: 'contacto visual.jpg',
      video: 'https://www.youtube.com/embed/vtlmJV7wEJ4',
      step: 'Primer paso',
    },
    {
      id: 2,
      title: 'Gesticula ',
      description:
        'Si tenemos conciencia de los gestos que hacemos, sabemos lo que estamos diciendo, logrando así el control de lo que se está diciendo. Se puede expresar con las manos o con el rostro',
      imageUrl: 'Gesticulacion.jpg',
      video: 'https://www.youtube.com/embed/dw5zl3sAx9A',
      step: 'Segundo paso',
    },
    {
      id: 3,
      title: 'Ve al grano',
      description:
        'Muchas veces llevamos conversaciones a puntos muertos en donde no se requiere mayor interés, “ir al grano”, requiere de mucha habilidad sobre todo en momentos de intentar convencer a un cliente',
      imageUrl: 'ir al grano.jpg',
      video: 'https://www.youtube.com/embed/4usdgGgfNbo',
      step: 'Tercer paso',
    },
    {
      id: 4,
      title: 'Escucha antes de hablar',
      description:
        'Saber escuchar es algo muy importante dentro de la comunicación, por tal razón como menciona Epiteo "Tenemos dos oídos y una boca para escuchar el doble de lo que hablamos. (Epíteto)"',
      imageUrl: 'escucha antes de hablar.jpg',
      video: 'https://www.youtube.com/embed/Tt2J6KLPvnU',
      step: 'Cuarto paso',
    },
    {
      id: 5,
      title: 'Has más preguntas ',
      description:
        'Este punto está ligado con el inmediatamente anterior, ya que al tener una escucha activa, podemos determinar lo que el cliente desea, pero no asumas cosas, es mejor seguir preguntando hasta llegar a la satisfacción del cliente',
      imageUrl: 'has mas preguntas.jpg',
      video: 'https://www.youtube.com/embed/YBWIMFjzy5o',
      step: 'Quinto paso',
    },
    {
      id: 6,
      title: 'Lee',
      description:
        'Este tip juega un papel muy importante, ya que el leer hace que tu lenguaje verbal, y no verbal mejore en un 40 %, logrando de esta manera conseguir que el cliente nos entienda mejor',
      imageUrl: 'lee.jpg',
      video: 'https://www.youtube.com/embed/nx1Fp_27YoA',
      step: 'Sexto paso',
    },
    {
      id: 7,
      title: 'Elige el medio correcto ',
      description:
        'Muchas veces no elegimos el medio correcto para decir las cosas, como por ejemplo si necesitas algo urgente y tienes la posibilidad de transmitir este mensaje de manera personal, hazlo, ya que es una tarea que lo requiere. El medio a veces influye mucho en las tareas de las demás personas, muchas veces genera desconcentración, poco interés y que la información no logre ser transmitida. Como lo veremos a continuación',
      imageUrl: 'escuchar el medio correcto.png',
      video: 'https://www.youtube.com/embed/-KscrAzJSjo',
      step: 'Septimo paso',
    },
    {
      id: 8,
      title: 'No interrumpas',
      description:
        'El no interrumpir es tan, o mas importante que hablar, esto se debe a que si no dejas que tu cliente o persona que se encuentra frente a ti no termina de expresar sus ideas, se tiende a mal interpretar lo que te intentan decir',
      imageUrl: 'no interrumpir.jpg',
      video: 'https://www.youtube.com/embed/v803oz1pZPY',
      step: 'Octavo paso',
    },
    {
      id: 9,
      title: 'Practica frente al espejo',
      description:
        'Muchas veces la inseguridad que nace en nosotros es algo de falta de autoestima, los ejercicios frente al espejo refuerzan mucho esta parte, generando asi tal confianza en nosotros que la podremos transmitírsela a los demás',
      imageUrl: 'frente al espejo.jpg',
      video: 'https://www.youtube.com/embed/IiGdH5cRLnM',
      step: 'Noveno paso',
    },
    {
      id: 10,
      title: 'Vincúlate',
      description:
        'Al poner la atención debida a tu cliente o interlocutor, lograras entender con mas claridad lo que te tratan de transmitir, de esta manera harás que tu trato hacia ellos sea más empático',
      imageUrl: 'vinculate.jpg',
      video: 'https://www.youtube.com/embed/dw7UvqJoykY',
      step: 'Decimo paso',
    },
  ];
  constructor() {}

  getComunicaciones() {
    return this.listaObjetos;
  }

  getComunicacionById(id: number) {
    return this.listaObjetos.find((x) => x.id == id);
  }
}
