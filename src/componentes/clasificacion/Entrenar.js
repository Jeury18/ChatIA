import natural from "natural";
import spanish from "../../../node_modules/natural/lib/natural/stemmers/porter_stemmer_es";

export const Entrenar = () => {
  const classifier = new natural.LogisticRegressionClassifier(spanish);

   classifier.addDocument("estado de mi compras", "status");
   classifier.addDocument("información sobre el producto", "servicio");
   classifier.addDocument("Catalogo", "catalogo");
   classifier.addDocument("Catalogo completo", "catalogo");
   classifier.addDocument("comprar", "comprar");
   classifier.addDocument("Los relojes mas vendidos", "reloj_vendido");
   classifier.addDocument("El reloj mas vendido", "reloj_vendido");
   
   classifier.addDocument("Salir", "terminar");
   classifier.addDocument("Terminar conversacion", "terminar");
   classifier.addDocument("Nada", "terminar");
   classifier.train();
 

  return classifier;
};

export default Entrenar;