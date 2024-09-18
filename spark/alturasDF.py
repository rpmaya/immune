from pyspark.sql import SparkSession
from pyspark.sql.functions import col, when, avg

# Create a SparkSession
spark = SparkSession.builder \
    .appName("AlturasDataFrames") \
    .getOrCreate()

# Read CSV file from HDFS
dfo = spark.read.csv("hdfs://namenode:9000/user/root/input/alturasRev.csv", header=False, inferSchema=True)

# Rename columns to 'sexo' and 'altura'
dfc = dfo.withColumnRenamed("_c0", "sexo").withColumnRenamed("_c1", "altura")

# Convert 'altura' to float and correct heights that are in meters
df = dfc.withColumn("altura", when(col("altura") < 10, col("altura") * 100).otherwise(col("altura")))

# Filter out invalid data (empty or negative heights)
df_filtered = df.filter((col("sexo").isNotNull()) & (col("altura") > 0))

# Group by 'sexo' and calculate the average 'altura'
df_result = df_filtered.groupBy("sexo").agg(avg("altura").alias("media"))

# Save the result to HDFS
df_result.write.csv("hdfs://namenode:9000/user/root/output/alturasDF", header=False)

# Stop the SparkSession
spark.stop()
