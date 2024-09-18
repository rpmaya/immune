from pyspark import SparkConf, SparkContext
from pyspark.streaming import StreamingContext
import re

def clean_word(word):
    # Eliminar caracteres no alfanuméricos y convertir a mayúsculas
    return re.sub(r'\W+', '', word).upper()

def main():
    # Crear SparkConf y SparkContext
    conf = SparkConf().setAppName("StreamingWordCount")
    sc = SparkContext(conf=conf)

    # Crear StreamingContext con intervalo de batch de 5 segundos
    ssc = StreamingContext(sc, 5)

    # Crear un DStream que conecte a un host y puerto especificado
    lines = ssc.socketTextStream("localhost", 9999)

    # Splitear las líneas en palabras
    words = lines.flatMap(lambda line: line.split(" "))

    # Limpiar palabras, convertir a tuplas y contar
    word_counts = words.map(clean_word) \
                       .filter(lambda word: word != "") \
                       .map(lambda word: (word, 1)) \
                       .reduceByKey(lambda a, b: a + b)

    # Imprimir los resultados en consola
    word_counts.pprint()

    # Iniciar el StreamingContext y esperar su finalización
    ssc.start()
    ssc.awaitTermination()

if __name__ == "__main__":
    main()
