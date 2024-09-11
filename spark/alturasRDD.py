from pyspark import SparkConf, SparkContext

# Create SparkContext
conf = SparkConf().setAppName("Alturas RDD")
sc = SparkContext(conf=conf)

# Read the CSV file
data = sc.textFile("hdfs://namenode:9000/user/root/input/alturasRev.csv")

# Split each line by the separator (comma)
values = data.map(lambda line: line.split(",")) \
             .map(lambda row: (row[0], row[1]))

# Correct values that are in meters instead of centimeters
values_corrected = values.mapValues(lambda v: int(float(v) * 100) if float(v) < 10 else int(v))

# Filter out invalid data (empty values or negative heights)
values_filtered = values_corrected.filter(lambda row: row[0] != "" and row[1] > 0)

# Group by key (sexo)
grouped = values_filtered.groupByKey()

# Calculate the average for each group (sexo)
averages = grouped.mapValues(lambda v: sum(v) / len(v))

# Print the results
averages.saveAsTextFile("hdfs://namenode:9000/user/root/output/alturasRDD")

# Stop the SparkContext
sc.stop()
