# -*- coding: utf-8 -*-

from pyspark.sql import SparkSession

# Inicializamos Spark
spark = SparkSession.builder.appName("Performance").getOrCreate()

# Leer archivo CSV separado por tabulaciones
df = spark.read.option("sep", "\t").csv("hdfs://namenode:9000/user/root/input/passwords/")


# Persistir y cachear
#dfpn = df.filter(df["_c1"].isNull())
dfp = df.filter(df["_c0"] == df["_c1"])
dfp.cache()  # Cachear en memoria
dfp_count = dfp.count()

print("Conteo después de persistir: {}".format(dfp_count))

# Número de particiones por defecto (8)
default_partitions = dfp.rdd.getNumPartitions()
print("Particiones por defecto: {}".format(default_partitions))

# Escribir el DataFrame filtrado
dfp.write.mode("overwrite").csv("hdfs://namenode:9000/user/root/output/perf")

# Coalesce: reducir el número de particiones
dfres2 = dfp.coalesce(4)
dfres2_partitions = dfres2.rdd.getNumPartitions()
print("Particiones después de coalesce: {}".format(dfres2_partitions))
dfres2.write.mode("overwrite").csv("hdfs://namenode:9000/user/root/output/perf2")

# Repartition: aumentar el número de particiones
dfres6 = dfp.repartition(12)
dfres6_partitions = dfres6.rdd.getNumPartitions()
print("Particiones después de repartition: {}".format(dfres6_partitions))
dfres6.write.mode("overwrite").csv("hdfs://namenode:9000/user/root/output/perf6")

# Finalizar Spark
spark.stop()
