import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComunicacionService {
  listaObjetos: any[] = [
    {
      id: 1,
      title: 'Escuche activamente',
      description:
        'Esta habilidad es fundamental para entender a la otra persona; concéntrese en lo que está diciendo el interlocutor, es relevante prestar atención, observar el lenguaje corporal, dejar que la persona termine de hablar, y evitar distracciones como el celular ya que es irrespetuoso y esto hace que no se centre en la escucha',
      imageUrl: 'escucha-activa-880.jpg',
      video: 'https://www.youtube.com/embed/TgHe1XjYHhw',
      step: 'Primer paso',
    },
    {
      id: 2,
      title: 'Demuestre seguridad',
      description:
        'para algunos individuos es un desafío comunicarse con su jefe. Sin embargo, este no debe ser un limitante. El lenguaje verbal y no verbal comunican por lo que el uso correcto del lenguaje corporal, las palabras y el tono es fundamental. Evite hablar de forma agresiva, si se encuentra alterado, tómese un tiempo para dirigirse a su jefe. Una forma de adquirir seguridad es preparar con antelación lo que desea comunicar, incluyendo las respuestas a las posibles preguntas que surjan una vez emita el mensaje',
      imageUrl: 'segurida930x620.jpg',
      video: 'https://www.youtube.com/embed/01Lr4PwKzuw',
      step: 'Segundo paso',
    },
    {
      id: 3,
      title: 'Utilice las palabras adecuadas',
      description:
        'usted puede decir lo mismo, pero las palabras van a determinar la percepción del receptor. Algunos ejemplos son: •	Hace falta vs. Una oportunidad de mejora es… •	Hágalo así vs. Le sugiero, •	No puedo, ¿Con que tiempo?  Vs. En este momento estoy en otra actividad a ¿qué debo darle prioridad?, •	Cálmese vs escuchar, dejar que se desahogue y después buscar la solución',
      imageUrl: 'utilizar palabras adecuadas.jpg',
      video: 'https://www.youtube.com/embed/vzyYtFGHOC4',
      step: 'Tercer paso',
    },
    {
      id: 4,
      title: 'Evite suponer, valide',
      description:
        'cuando le surja una duda, aclárela, asimismo, sea sincero cuando no tenga conocimiento de algo, no saber algo no puede generarle vergüenza, pero en muchas ocasiones no ser honesto desde el principio acerca del desconocimiento de algo, hace que las cosas se retrasen, o que no tenga pleno entendimiento de la misión que se le encomiendan. Si tiene una duda acerca del uso de algún termino, verifíquelo. Igualmente, asegúrese que lo que quería comunicar se entendió.',
      imageUrl: 'Suponer-1024x682.jpg',
      video: 'https://www.youtube.com/embed/aJXhhQgCCIU',
      step: 'Cuarto paso',
    },
    {
      id: 5,
      title: 'Detecte el momento y canal adecuado para hablar con su jefe',
      description:
        'El tiempo y el lugar son fundamentales para otorgar un mensaje adecuado, e incluso reforzar la información por varios canales, ayuda a que se comprenda el mismo.  Los emails, en muchas ocasiones pueden pasar desapercibidos, por lo que es importante reforzar los mensajes a través del contacto verbal, confirmando la recepción de la información, o incluso un mensaje de WhatsApp siempre y cuando aplique según el objetivo de lo que quiera comunicar',
      imageUrl: 'hablar-jefe.jpg',
      video: 'https://www.youtube.com/embed/aJXhhQgCCIU',
      step: 'Quinto paso',
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
