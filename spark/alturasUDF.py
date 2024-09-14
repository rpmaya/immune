from pyspark.sql import SparkSession
from pyspark.sql.types import FloatType, IntegerType
from pyspark.sql.functions import col, avg, udf, when

# Create a SparkSession
spark = SparkSession.builder \
    .appName("AlturasUDF") \
    .getOrCreate()

# User-defined function to convert meters to centimeters if the height is less than 10
def m2cm(altura):
    return altura * 100 if altura < 10 else altura

# Register the UDF with PySpark
m2cm_udf = udf(m2cm, FloatType())

# Read CSV file from HDFS
df = spark.read.csv("hdfs://namenode:9000/user/root/input/alturasRev.csv", header=False)

# Perform DataFrame transformations with the UDF
avgDF = (df.withColumnRenamed("_c0", "sexo")
          .withColumnRenamed("_c1", "altura")
          .withColumn("altura", col("altura").cast(FloatType()))
          .where((col("sexo").isNotNull()) & (col("altura").isNotNull()) & (col("altura") > 0))
          .withColumn("altura", m2cm_udf(col("altura")))
          .groupBy("sexo")
          .agg(avg("altura").cast(IntegerType()).alias("media")))

# Save the result to HDFS
avgDF.write.csv("hdfs://namenode:9000/user/root/output/alturasUDF", header=False)

# Stop the SparkSession
spark.stop()

